import React from 'react';
import styles from "./BookReview.module.scss";
import ArrowMenuTop from "../../../assets/img/icons/ArrowMenuTop.svg";
import ArrowMenuBottom from "../../../assets/img/icons/ArrowMenuBottom.svg";
import ReviewersAvatar from "../../../assets/img/icons/reviewsAvatar.svg";
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";
import {useAppDispatch, useAppSelector} from "../../../components/hooks/redux";
import {bookSlice} from "../../../providers/store/reducers/BookSlice";

export const BookReview = () => {
    const {isActiveDropDown} = useAppSelector(state => state.userReducer);
    const {bookData} = useAppSelector(state => state.apiRequestReducer);
    const {openDropDownList} = bookSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <>
            <h3 className={styles.extraDescrHeader}>Отзывы</h3>
            <div className={styles.arrowMenu}
                 onClick={() => dispatch(openDropDownList(!isActiveDropDown))}>
                {(isActiveDropDown) ? <ArrowMenuTop/> : <ArrowMenuBottom/>}
            </div>
            <span className={styles.grayLine}></span>
            <div className={(!isActiveDropDown) ? styles.reviewersWrapperHide : null}>
                {(bookData.comments) ? bookData.comments.map((item:any) => (
                    <div key={(item.comments) ? item.comments.id : null}>
                        <div className={styles.reviewersWrapper}>
                            <ReviewersAvatar/>
                            <p className={styles.reviewersPadding}>{item.user.firstName} {item.user.lastName}</p>
                            <p className={styles.reviewersPadding}>{item.createdAt}</p>
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