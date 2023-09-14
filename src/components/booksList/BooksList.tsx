import styles from './booksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemColumn} from "./bookItemColumn/BookItemColumn";
import {BookItemRow} from "./bookItemRow/BookItemRow";
import {useState} from "react";

export const BooksList = () => {
    const [bookItemDirection, setBookItemDirection] = useState(false);
    const changeDirection = () => {
        setBookItemDirection(!bookItemDirection);
    }
    return (
        <div className={styles.wrapper}>
            <FilterPanel changeDirection={()=>changeDirection()}/>
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