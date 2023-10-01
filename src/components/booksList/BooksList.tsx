import styles from './booksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemColumn} from "./bookItemColumn/BookItemColumn";
import {BookItemRow} from "./bookItemRow/BookItemRow";
import {useState} from "react";

export const BooksList = () => {
    const [btnBookRow, setBtnBookRow] = useState(false);
    const [btnBookColumn, setBtnBookColumn] = useState(true);
    const onChangeDirection = (btnStatus:boolean) => {
        if (!btnStatus) {
            setBtnBookRow(!btnBookRow);
            setBtnBookColumn(!btnBookColumn);
        }
    }

    return (
        <div className={styles.wrapper}>
            <FilterPanel btnBookRow={btnBookRow}
                         btnBookColumn={btnBookColumn}
                         onChangeDirection={onChangeDirection}/>
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
            {(btnBookRow) ? <BookItemRow/> : <BookItemColumn/>}
        </div>
    )
}