import React from 'react';
import styles from "./BookReview.module.scss";
import ArrowMenuTop from "../../../../assets/img/icons/ArrowMenuTop.svg";
import ArrowMenuBottom from "../../../../assets/img/icons/ArrowMenuBottom.svg";
import ReviewersAvatar from "../../../../assets/img/icons/reviewsAvatar.svg";
import MyStarReview from "../../../sharedComponents/MyStarReview/MyStarReview";
import {useAppDispatch, useAppSelector} from "../../../hooks/redux";
import {modalSlice} from "../../../../store/reducers/ModalSlice";

export const BookReview = () => {
    const {isActiveDropDownReviews} = useAppSelector(state => state.modalReducer);
    const {currentBookData} = useAppSelector(state => state.apiRequestReducer);
    const {setDropDownReviews} = modalSlice.actions;
    const dispatch = useAppDispatch();
    console.log('Сработал рендер в компоненте BookReview');
    return (
        <>
            <h3 className={styles.extraDescrHeader}>Отзывы</h3>
            <div className={styles.arrowMenu}
                 onClick={() => dispatch(setDropDownReviews(!isActiveDropDownReviews))}>
                {(isActiveDropDownReviews) ? <ArrowMenuTop fill={'#F83600'}/> : <ArrowMenuBottom fill={'#000000'}/>}
            </div>
            <span className={styles.grayLine}></span>
            <div className={(!isActiveDropDownReviews) ? styles.reviewersWrapperHide : null}>
                {(currentBookData.comments) ? currentBookData.comments.map((item:any) => (
                    <div key={item.id}>
                        <div className={styles.reviewersWrapper}>
                            <ReviewersAvatar/>
                            <p className={styles.reviewersPadding}>{item.user.firstName} {item.user.lastName}</p>
                            <p className={styles.reviewersPadding}>{item.createdAt.slice(0, 10)}</p>
                        </div>
                        <MyStarReview width={'168px'} score={item.rating}/>
                        <p className={styles.reviewersDescr}>{item.text}</p>
                    </div>
                )) : null}
            </div>
            <button className={styles.btnStyles}>ОЦЕНИТЬ КНИГУ</button>
        </>
    );
};