import styles from './booksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
export const BooksList = () => {
    return (
        <div className={styles.wrapper}>
            <FilterPanel/>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
            <div className={styles.bookCard}></div>
        </div>
    )
}