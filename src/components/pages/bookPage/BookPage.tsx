import {useParams} from "react-router-dom";
import {useEffect} from "react";
import styles from './BookPage.module.scss';
import {BookParams} from "./BookParams/BookParams";
import {BookReview} from "./BookReview/BookReview";
import {Slider} from "../../sharedComponents/swiper-sliders/Slider";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchBookByID} from "../../../store/reducers/ApiRequestSlice";
import {MyLoader} from "../../sharedComponents/MyLoader/MyLoader";
import {MyButton} from "../../sharedComponents/MyButton/MyButton";
const BookPage = () => {
    const {id} = useParams();
    const {currentBookData,jwt, isLoadingToken, isLoadingBook} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        if (jwt) {
            dispatch(fetchBookByID({ idNum: Number(id), token: jwt }));
        }
    },[jwt])
    return (
        <div className={styles.globalWrapper}>
            <div className={styles.wrapper}>
                    {
                        (isLoadingToken || isLoadingBook)
                            ? <MyLoader/>
                            :
                            <>
                                <div className={styles.bookLocation}></div>
                                <Slider/>
                                <div className={styles.wrapperBookDescr}>
                                    <h1 className={styles.bookHeader}>{currentBookData.title}</h1>
                                    <span className={styles.textAuthor}>{(currentBookData.authors) ? currentBookData.authors[0] : null}</span>
                                    <MyButton content={'Забронировать'} margin={'32px 0 62px 0'} size={'btnMd'}/>
                                    <h3>О книге</h3>
                                    <p className={styles.aboutBook}>{currentBookData.description}</p>
                                </div>
                                <BookParams/>
                                <BookReview/>
                            </>
                    }
                </div>
        </div>
    );
};
export default BookPage;