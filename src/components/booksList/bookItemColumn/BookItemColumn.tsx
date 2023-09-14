import stylesColumn from './BookItemColumn.module.scss';
import bookPhoto from '../../../assets/img/pictures/BookPhoto.png';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import IconStar from '../../../assets/img/icons/IconStar.svg';
import {MyButton} from "../../../shared/MyButton";

export const BookItemColumn = () => {
    return (
            <div className={stylesColumn.bookCard}>
                <img src={bookPhoto} alt="book image"/>
                <div className={stylesColumn.starWrapper}>
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                    <IconStar/>
                </div>
                <span className={stylesColumn.bookName}>Грокаем алгоритмы. Иллюстрированное пособие для програ...</span>
                <p className={stylesColumn.bookAuthor}>Адитья Бхаргава, Патрик Нимейер, 2019</p>
                <MyButton width={'166px'} height={'40px'} text={'ЗАБРОНИРОВАТЬ'}
                          background={'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%'}
                          fontSize={'12px'}
                          fontWeight={'600'}
                          color={'white'}/>
            </div>
    )
}