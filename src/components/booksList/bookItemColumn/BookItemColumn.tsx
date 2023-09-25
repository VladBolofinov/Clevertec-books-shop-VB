import stylesColumn from './BookItemColumn.module.scss';
import bookPhoto from '../../../assets/img/pictures/BookPhoto.png';
import {Link, NavLink} from "react-router-dom";
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";

export const BookItemColumn = () => {
    return (

            <div className={stylesColumn.bookCard}>
                <img src={bookPhoto} alt="book image"/>
                <MyStarReview score={3} width={'144px'}/>
                <NavLink style={() => { return {
                        color: "black",
                        textDecoration: "none"
                    }}} to={'/bookPage'}>
                <span className={stylesColumn.bookName}>Грокаем алгоритмы. Иллюстрированное пособие для програ...</span>
                </NavLink>
                <p className={stylesColumn.bookAuthor}>Адитья Бхаргава, Патрик Нимейер, 2019</p>
                <button className={stylesColumn.btnStyles}>ЗАБРОНИРОВАТЬ</button>
            </div>

    )
}