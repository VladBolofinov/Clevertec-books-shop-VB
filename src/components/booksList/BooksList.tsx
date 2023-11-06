import styles from './BooksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemColumn} from "./bookItemColumn/BookItemColumn";
import {BookItemRow} from "./bookItemRow/BookItemRow";
import {useAppSelector} from "../hooks/redux";
import {MyLoader} from "../sharedComponents/MyLoader/MyLoader";

const BooksList = () => {
    const {isBookRow} = useAppSelector(state => state.userReducer);
    const {isLoading} = useAppSelector(state => state.apiRequestReducer);
    return (
        <div className={styles.wrapper}>
            {(isLoading)
                ? <MyLoader/>
                : <>
                    <FilterPanel/>
                    {(isBookRow) ? <BookItemRow/> : <BookItemColumn/>}
                </>}
        </div>
    )
}
export default BooksList;