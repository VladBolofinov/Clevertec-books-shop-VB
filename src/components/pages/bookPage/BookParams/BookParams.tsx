import React from 'react';
import styles from "./BookParams.module.scss"
import MyStarReview from "../../../sharedComponents/MyStarReview/MyStarReview";
import {useAppSelector} from "../../../hooks/redux";

export const BookParams = () => {
    const {currentBookData} = useAppSelector(state => state.apiRequestReducer);
    console.log('Сработал рендер в компоненте BookParams');
    return (
        <>
            <h3 className={styles.rank}>Рейтинг</h3>
            <span className={styles.grayLine}></span>
            <div className={styles.starWrapper}>
                <MyStarReview width={'168px'} score={currentBookData.rating}/>
                <span>{currentBookData.rating}</span>
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
                        <span>{currentBookData.publish}</span>
                        <span>{currentBookData.issueYear}</span>
                        <span>{currentBookData.pages}</span>
                        <span>{currentBookData.cover}</span>
                        <span>{currentBookData.format}</span>
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
                        <span>{(currentBookData.categories) ? currentBookData.categories[0] : null}</span>
                        <span>{currentBookData.weight}</span>
                        <span>{currentBookData.ISBN}</span>
                        <span>{currentBookData.producer}</span>
                    </div>
                </div>
            </div>
        </>
    );
}