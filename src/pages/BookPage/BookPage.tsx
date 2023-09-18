import React from 'react';
import styles from './BookPage.module.scss';
import bookPhotoBig from '../../assets/img/pictures/BookPhotoBig.png';
import {MyButton} from "../../shared/MyButton/MyButton";
import MyStarReview from "../../shared/MyStarReview/MyStarReview";

const BookPage = () => {return (
        <div>
            <div className={styles.bookLocation}>
                Бизнес-книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
            </div>
            <img className={styles.bookImg} src={bookPhotoBig} alt="book image"/>
            <div className={styles.bookDescr}>
                <h1 className={styles.bookHeader}>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</h1>
                <span className={styles.textAuthor}>Адитья Бхаргава, 2019</span>
                <MyButton width={'350px'} height={'52px'} text={'ЗАБРОНИРОВАТЬ'}
                          background={'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%'}
                          fontSize={'16px'}
                          fontWeight={'600'}
                          color={'white'}
                          margin={'32px 0 62px 0'}/>
                <h3>О книге</h3>
                <p className={styles.aboutBook}>Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены,
                    протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные
                    фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
                    <br/>
                    <br/>Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                    алгоритмы — это веселое и увлекательное занятие.</p>
            </div>
            <h3 className={styles.rank}>Рейтинг</h3>
            <span className={styles.grayLine}></span>
                <div className={styles.starWrapper}>
                    <MyStarReview width={'168px'}/>
                    <span>4.3</span>
                </div>
            <h3 className={styles.extraDescrHeader}>Подробная информация</h3>
            <span className={styles.grayLine}></span>
            <div className={styles.extraDescrWrapper}>
                <div className={styles.extraDescrWrapperFirstBlock}>
                    <div className={styles.paragraphBlock}>
                        <p>Издательство </p>
                        <p>Год издания </p>
                        <p>Страниц </p>
                        <p>Переплёт </p>
                        <p>Формат </p>
                    </div>
                    <div className={styles.spanBlock}>
                        <span>Питер</span>
                        <span>2019</span>
                        <span>288</span>
                        <span>Мягкая обложка</span>
                        <span>70х100</span>
                    </div>
                </div>
                <div className={styles.extraDescrWrapperSecondBlock}>
                    <div className={styles.paragraphBlock}>
                        <p>Жанр</p>
                        <p>Вес</p>
                        <p>ISBN</p>
                        <p>Изготовитель</p>
                    </div>
                    <div className={styles.spanBlock}>
                        <span>Компьютерная литература</span>
                        <span>370 г</span>
                        <span>978-5-4461-0923-4</span>
                        <span>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург,<br/> Петергофское ш, д.73, лит. А29</span> {/*напиши логику добавления br*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookPage;