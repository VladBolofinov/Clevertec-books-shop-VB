import styles from './booksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItem} from "./bookItem/BookItem";

export const BooksList = () => {
    return (
        <div className={styles.wrapper}>
            <FilterPanel/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
            <BookItem/>
        </div>
    )
}