import stylesColumn from './BookItemColumn.module.scss';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import {NavLink} from "react-router-dom";
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";
import {useAppSelector, useAppDispatch} from "../../hooks/redux";
import {fetchBookByID} from "../../../providers/store/reducers/ApiRequestSlice";

export const BookItemColumn = () => {
    const {data,jwt} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();
    const slicedData = data.slice(0, 12);
    return (
        <>
            {slicedData.map((item:any) => (
                <div key={item.id} className={stylesColumn.bookCard}>
                    <img src={(item.image) ? item.image.url : bookNotFound} alt="book image" />
                    <MyStarReview score={3} width={'144px'} />
                    <NavLink
                        style={{
                            color: "black",
                            textDecoration: "none"
                        }}
                        to={`/bookPage/${item.id}`}
                        onClick={() => dispatch(fetchBookByID({ idNum: Number(item.id), token: jwt }))}>
                        <span className={stylesColumn.bookName}>{item.title}</span>
                    </NavLink>
                    <p className={stylesColumn.bookAuthor}>{item.authors[0]}</p>
                    <button className={stylesColumn.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                </div>
            ))}
        </>
    );
}