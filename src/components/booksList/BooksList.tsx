import styles from './booksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemColumn} from "./bookItemColumn/BookItemColumn";
import {BookItemRow} from "./bookItemRow/BookItemRow";
import {useState} from "react";

export const BooksList = () => {
    const [bookItemDirection, setBookItemDirection] = useState(false);
    return (
        <div className={styles.wrapper}>
            <button onClick={()=>setBookItemDirection(!bookItemDirection)}>change direction</button>
            <FilterPanel/>
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
            {(bookItemDirection) ? <BookItemRow/> : <BookItemColumn/>}
        </div>
    )
}