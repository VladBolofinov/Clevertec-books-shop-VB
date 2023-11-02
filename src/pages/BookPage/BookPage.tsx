import {useParams} from "react-router-dom";
import {useEffect} from "react";
import styles from './BookPage.module.scss';
import {Menu} from "../../components/menu/Menu";
import {BookParams} from "./BookParams/BookParams";
import {BookReview} from "./BookReview/BookReview";
import {Slider} from "../../shared/swiper-sliders/Slider";
import {useAppDispatch, useAppSelector} from "../../components/hooks/redux";
import {fetchBookByID, fetchToken} from "../../providers/store/reducers/ApiRequestSlice";
import {MyLoader} from "../../shared/MyLoader/MyLoader";

const BookPage = () => {
    const {id} = useParams();
    const {bookData,jwt, isLoading} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        (jwt) ? dispatch(fetchBookByID({ idNum: Number(id), token: jwt })) : dispatch(fetchToken());
    },[jwt])

    return (
        <div className={styles.globalWrapper}>
            <div className={styles.wrapper}>
                    {(window.innerWidth < 1110) ? <Menu/> : null}
                    {
                        (isLoading)
                            ? <MyLoader/>
                            :
                            <>
                                <div className={styles.bookLocation}></div>
                                    <Slider/>
                                    <div className={styles.wrapperBookDescr}>
                                    <h1 className={styles.bookHeader}>{bookData.title}</h1>
                                    <span className={styles.textAuthor}>{(bookData.authors) ? bookData.authors[0] : null}</span>
                                    <button className={styles.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                                    <h3>О книге</h3>
                                    <p className={styles.aboutBook}>{bookData.description}</p>
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