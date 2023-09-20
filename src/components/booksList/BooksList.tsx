import styles from './booksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemColumn} from "./bookItemColumn/BookItemColumn";
import {BookItemRow} from "./bookItemRow/BookItemRow";
import {useState} from "react";

export const BooksList = () => {
    const [bookItemDirection, setBookItemDirection] = useState(false);
    const changeDirectionRow = () => {
        setBookItemDirection(false);
    }
    const changeDirectionColumn = () => {
        setBookItemDirection(true);
    }
    return (
        <div className={styles.wrapper}>
            <FilterPanel changeDirectionRow={()=>changeDirectionRow()} changeDirectionColumn={()=>changeDirectionColumn()}/>
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
        </div>
    )
}