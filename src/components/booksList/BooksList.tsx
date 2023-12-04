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
    console.log('render booklist component');
    const {isBookRow} = useAppSelector(state => state.userReducer);
    const {isLoadingToken,isLoadingBook,isLoadingCategories,
        allData, jwt, categories, isActiveBtnSlice, searchInputValue} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();
    const {filterByCategory, onLoadMoreBooks, sliceData, searchQuery} = apiRequestSlice.actions;
    const pathname: string = useLocation().pathname;
    const truncateStr = useCallback((text: string, maxLength = 55): string => (text.length > maxLength) ? text.substring(0, maxLength - 3) + '...' : text, []);

    const findPath = (res: any) => {
        let result = res.filter((category:any) => category.path === pathname.slice(6));
        return (result.length === 0) ? 'Все' : result[0].name;
    }
    useEffect(() => {
        (searchInputValue) ? dispatch(searchQuery()) : dispatch(sliceData());
    },[pathname])

    useEffect(() => {
        if (jwt && allData.length == 0 && categories.length > 0) {
            const res = findPath(categories);
            dispatch(fetchBooksData(jwt))
                .then(() => {
                    dispatch(filterByCategory(res));
                    dispatch(sliceData());
                })
        }
    }, [categories]);
    return (
        <div className={styles.wrapper}>
            {(isLoadingBook || isLoadingToken || isLoadingCategories)
                ? <MyLoader/>
                : <>
                    <FilterPanel/>
                    {(isBookRow) ? <BookItemRow truncateStr={truncateStr}/> : <BookItemColumn truncateStr={truncateStr}/>}
                    {(isActiveBtnSlice)
                        ? <div className={styles.btnWrapper}>
                                <button onClick={() => dispatch(onLoadMoreBooks())}>ЗАГРУЗИТЬ ЕЩЕ</button>
                            </div>
                        : null}
                </>
            }
        </div>
    )
})
export default BooksList;