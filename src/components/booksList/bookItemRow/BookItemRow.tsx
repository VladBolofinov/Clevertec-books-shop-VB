import stylesRow from './BookItemRow.module.scss';
import bookPhoto from '../../../assets/img/pictures/BookPhoto.png';
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";
import { NavLink } from 'react-router-dom';

export const BookItemRow = () => {
    return (
        <div className={stylesRow.bookCard}>
            <img className={stylesRow.bookImg} src={bookPhoto} alt="book image"/>
            <div className={stylesRow.wrapperElemsImg}>
                <NavLink style={() => { return {
                    color: "black",
                    textDecoration: "none"
                }}} to={'/bookPage'}>
                <p className={stylesRow.bookName}>Грокаем алгоритмы. Иллюстрированное пособие</p>
                </NavLink>
                <p className={stylesRow.bookAuthor}>Адитья Бхаргава, Патрик Нимейер, 2019</p>
                <div className={stylesRow.wrapperBtnStars}>
                    <MyStarReview score={3}/>
                    <button className={stylesRow.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                </div>
            </div>
        </div>
    )
}