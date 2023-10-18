import stylesColumn from './BookItemColumn.module.scss';
import bookPhoto from '../../../assets/img/pictures/BookPhoto.png';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import {NavLink} from "react-router-dom";
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";
import {useAppSelector} from "../../hooks/redux";

export const BookItemColumn = () => {
    const {data} = useAppSelector(state => state.apiRequestReducer);
    return (
        <>
            {data.map((item:any) => (
                <div key={item.id} className={stylesColumn.bookCard}>
                    <img src={(item.image) ? item.image.url : bookNotFound} alt="book image" />
                    <MyStarReview score={3} width={'144px'} />
                    <NavLink
                        style={{
                            color: "black",
                            textDecoration: "none"
                        }}
                        to={'/bookPage'}>
                        <span className={stylesColumn.bookName}>{item.title}</span>
                    </NavLink>
                    <p className={stylesColumn.bookAuthor}>{item.authors[0]}</p>
                    <button className={stylesColumn.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                </div>
            ))}
        </>
    );
}