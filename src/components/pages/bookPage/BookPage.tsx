import {useParams} from "react-router-dom";
import {useEffect} from "react";
import styles from './BookPage.module.scss';
import {Menu} from "../../menu/Menu";
import {BookParams} from "./BookParams/BookParams";
import {BookReview} from "./BookReview/BookReview";
import {Slider} from "../../sharedComponents/swiper-sliders/Slider";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {fetchBookByID} from "../../../store/reducers/ApiRequestSlice";
import {MyLoader} from "../../sharedComponents/MyLoader/MyLoader";
const BookPage = () => {
    const {id} = useParams();
    const {currentBookData,jwt, isLoading} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (jwt) {
            dispatch(fetchBookByID({ idNum: Number(id), token: jwt }));
        }
    },[jwt])
//сделай чтобы условие по стилям было
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
                                    <h1 className={styles.bookHeader}>{currentBookData.title}</h1>
                                    <span className={styles.textAuthor}>{(currentBookData.authors) ? currentBookData.authors[0] : null}</span>
                                    <button className={styles.btnStyles}>ЗАБРОНИРОВАТЬ</button>
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