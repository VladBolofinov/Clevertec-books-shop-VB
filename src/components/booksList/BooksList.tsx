import styles from './BooksList.module.scss';
import {FilterPanel} from "../filterPanel/FilterPanel";
import {BookItemColumn} from "./bookItemColumn/BookItemColumn";
import {BookItemRow} from "./bookItemRow/BookItemRow";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {MyLoader} from "../sharedComponents/MyLoader/MyLoader";
import {memo, useEffect, useMemo} from "react";
import {apiRequestSlice, fetchBooksData} from "../../store/reducers/ApiRequestSlice";
import {useLocation} from "react-router-dom";

const BooksList = memo(() => {
    const {isBookRow} = useAppSelector(state => state.userReducer);
    const {isLoading, allData, jwt, filteredData, categories} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();
    const {filterByCategory} = apiRequestSlice.actions;
    const pathname: string = useLocation().pathname;
    let slicedData:any = (pathname === '/main') ? allData.slice(0, 12) : filteredData.slice(0, 12);

    const truncateStr = useMemo(() => {
        return (text: string, maxLength = 55): string => (text.length > maxLength) ? text.substring(0, maxLength - 3) + '...' : text;
    }, []);
    const findPath = (res: any) => {
        return res.filter((category:any) => {
            return  category.path === pathname.slice(6);
        });
    }

    useEffect(() => {
        if (jwt && allData.length == 0 && categories.length > 0) {
            const res = findPath(categories);
            (res.length === 0)
                ? dispatch(fetchBooksData(jwt))
                : dispatch(fetchBooksData(jwt)).then(() => dispatch(filterByCategory(res[0].name)));
        }
    }, [categories]);

    console.log('Сработал рендер в компоненте BooksList');
    return (
        <div className={styles.wrapper}>
            {(isLoading)
                ? <MyLoader/>
                : <>
                    <FilterPanel/>
                    {(isBookRow)
                        ? <BookItemRow slicedData={slicedData} truncateStr={truncateStr}/>
                        : <BookItemColumn slicedData={slicedData} truncateStr={truncateStr}/>}
                </>}
        </div>
    )
})
export default BooksList;