import React from 'react';
import styles from "./BookParams.module.scss"
import MyStarReview from "../../../sharedComponents/MyStarReview/MyStarReview";
import {useAppSelector} from "../../../hooks/redux";

export const BookParams = () => {
    const {bookData} = useAppSelector(state => state.apiRequestReducer);
    return (
        <>
            <h3 className={styles.rank}>Рейтинг</h3>
            <span className={styles.grayLine}></span>
            <div className={styles.starWrapper}>
                <MyStarReview width={'168px'} score={bookData.rating}/>
                <span>{bookData.rating}</span>
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
                        <span>{bookData.publish}</span>
                        <span>{bookData.issueYear}</span>
                        <span>{bookData.pages}</span>
                        <span>{bookData.cover}</span>
                        <span>{bookData.format}</span>
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
                        <span>{(bookData.categories) ? bookData.categories[0] : null}</span>
                        <span>{bookData.weight}</span>
                        <span>{bookData.ISBN}</span>
                        <span>{bookData.producer}</span>
                    </div>
                </div>
            </div>
        </>
    );
}