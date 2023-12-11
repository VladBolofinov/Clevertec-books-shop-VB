import styles from './BooksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemsList} from "./bookItemsList/BookItemsList";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {MyLoader} from "../sharedComponents/MyLoader/MyLoader";
import {memo, useCallback, useEffect} from "react";
import {apiRequestSlice, fetchBooksData} from "../../store/reducers/ApiRequestSlice";
import {useLocation} from "react-router-dom";

const BooksList = memo(() => {
    const {isLoadingToken,isLoadingBook,isLoadingCategories,
        allData, jwt, categories, isActiveBtnSlice, searchInputValue} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();
    const {filterByCategory, onLoadMoreBooks, sliceData, searchQuery} = apiRequestSlice.actions;
    const pathname: string = useLocation().pathname;
    const truncateStr = useCallback((text: string, maxLength = 55): string => {
            return (text.length > maxLength) ? text.substring(0, maxLength - 3) + '...' : text;
        },[]);

    const findPath = (res: any) => {
        let result = res.filter((category:any) => category.path === pathname.slice(6));
        return (result.length === 0) ? 'Все' : result[0].name;
    }
    const highlightSearchMatch = useCallback((str:string, searchValue:string) => {
        if (searchValue === '') {
            return str;
        } else {
            let output = [];
            if (searchInputValue.length === 1) {
                for (let i = 0; i < str.length; i++) {
                    (str[i].toLowerCase() !== searchValue.toLowerCase()) ? output.push(str[i]) : output.push(<span>{str[i]}</span>);
                }
            } else if (searchInputValue.length > 1) {
                let indexFound = str.toLowerCase().indexOf(searchValue,0);
                if (indexFound !== -1) {
                    output.push(str.slice(0,indexFound));
                    output.push(<span>{str.slice(indexFound,indexFound + searchValue.length)}</span>);
                    output.push(str.slice(indexFound + searchValue.length, str.length));
                } else {
                    return str;
                }
            }
            return output;
        }
    },[searchInputValue]);
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
                    <BookItemsList truncateStr={truncateStr} highlightSearchMatch={highlightSearchMatch}/>
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