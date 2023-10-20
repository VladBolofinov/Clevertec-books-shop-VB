import styles from './booksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemColumn} from "./bookItemColumn/BookItemColumn";
import {BookItemRow} from "./bookItemRow/BookItemRow";
import {useAppSelector} from "../hooks/redux";

export const BooksList = () => {
    const {isBookRow} = useAppSelector(state => state.userReducer);
    return (
        <div className={styles.wrapper}>
            <FilterPanel/>
            {(isBookRow) ? <BookItemRow/> : <BookItemColumn/>}
        </div>
    )
}