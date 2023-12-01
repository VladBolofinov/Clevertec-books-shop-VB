import styles from './BooksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemColumn} from "./bookItemColumn/BookItemColumn";
import {BookItemRow} from "./bookItemRow/BookItemRow";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {MyLoader} from "../sharedComponents/MyLoader/MyLoader";
import {memo, useCallback, useEffect} from "react";
import {apiRequestSlice, fetchBooksData} from "../../store/reducers/ApiRequestSlice";
import {useLocation} from "react-router-dom";

const BooksList = memo(() => {
    const {isBookRow} = useAppSelector(state => state.userReducer);
    const {isLoadingToken,isLoadingBook,isLoadingCategories, allData, jwt, filteredData, categories, sliceValue} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();
    const {filterByCategory, onLoadMoreBooks, sliceData} = apiRequestSlice.actions;
    const pathname: string = useLocation().pathname;
    let argValue: number = (pathname === '/main')
        ?  ((allData.length - sliceValue) >= 12) ? 12 : allData.length - sliceValue
        :  ((filteredData.length - sliceValue) >= 12) ? 12 : filteredData.length - sliceValue;

    useEffect(() => {
        dispatch(sliceData(pathname));
    },[pathname])

    const truncateStr = useCallback((text: string, maxLength = 55): string => (text.length > maxLength) ? text.substring(0, maxLength - 3) + '...' : text, []);
    const loadMoreBook = () => {
        dispatch(onLoadMoreBooks(argValue));
        dispatch(sliceData(pathname));
    }
    const findPath = (res: any) => {
        return res.filter((category:any) => {
            return  category.path === pathname.slice(6);
        });
    }

    useEffect(() => {
        if (jwt && allData.length == 0 && categories.length > 0) {
            const res = findPath(categories);
            (res.length === 0)
                ? dispatch(fetchBooksData(jwt)).then(() => dispatch(sliceData(pathname)))
                : dispatch(fetchBooksData(jwt))
                    .then(() => dispatch(filterByCategory(res[0].name)))
                    .then(() => dispatch(sliceData(pathname)));
        }
    }, [categories]);

    return (
        <div className={styles.wrapper}>
            {(isLoadingBook || isLoadingToken || isLoadingCategories)
                ? <MyLoader/>
                : <>
                    <FilterPanel/>
                    {(isBookRow) ? <BookItemRow truncateStr={truncateStr}/> : <BookItemColumn truncateStr={truncateStr}/>}
                    {(argValue > 0)
                        ? <div className={styles.btnWrapper}>
                                <button onClick={() => loadMoreBook()}>ЗАГРУЗИТЬ ЕЩЕ</button>
                            </div>
                        : null}
                </>
            }
        </div>
    )
})
export default BooksList;