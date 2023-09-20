import stylesRow from './BookItemRow.module.scss';
import bookPhoto from '../../../assets/img/pictures/BookPhoto.png';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import IconStar from '../../../assets/img/icons/IconStar.svg';
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";

export const BookItemRow = () => {
    return (
        <div className={stylesRow.bookCard}>
            <img className={stylesRow.bookImg} src={bookPhoto} alt="book image"/>
            <div className={stylesRow.wrapperElemsImg}>
                <p className={stylesRow.bookName}>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</p>
                <p className={stylesRow.bookAuthor}>Адитья Бхаргава, Патрик Нимейер, 2019</p>
                <div className={stylesRow.wrapperBtnStars}>
                    <MyStarReview score={3}/>
                    <button className={stylesRow.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                </div>
            </div>
        </div>
    )
}