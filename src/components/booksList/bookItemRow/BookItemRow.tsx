import stylesRow from './BookItemRow.module.scss';
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";
import { NavLink } from 'react-router-dom';
import {useAppSelector} from "../../hooks/redux";
import bookNotFound from "../../../assets/img/pictures/bookNotFound.png";

export const BookItemRow = () => {
    const {data} = useAppSelector(state => state.apiRequestReducer);
    return (
        <>
            {data.map((item:any) => (
                <div key={item.id} className={stylesRow.bookCard}>
                    <img className={stylesRow.bookImg} src={(item.image) ? item.image.url : bookNotFound} alt="book image"/>
                    <div className={stylesRow.wrapperElemsImg}>
                        <NavLink style={() => { return {
                            color: "black",
                            textDecoration: "none"
                        }}} to={'/bookPage'}>
                        <p className={stylesRow.bookName}>{item.title}</p>
                        </NavLink>
                        <p className={stylesRow.bookAuthor}>{item.authors[0]}, 2019</p>
                        <div className={stylesRow.wrapperBtnStars}>
                            <MyStarReview score={3}/>
                            <button className={stylesRow.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}