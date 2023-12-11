import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import {NavLink} from "react-router-dom";
import MyStarReview from "../../sharedComponents/MyStarReview/MyStarReview";
import {IBookItemProps} from "../BookItemTypes";
import {memo, useMemo} from "react";
import {useAppSelector} from "../../hooks/redux";
import stylesColumn from './BookItemColumn.module.scss';
import stylesRow from "./BookItemRow.module.scss";
export const BookItemsList = memo(({truncateStr, highlightSearchMatch}:IBookItemProps) => {
    const {slicedData, searchInputValue} = useAppSelector(state => state.apiRequestReducer);
    const {isBookRow} = useAppSelector(state => state.userReducer);
    const bookListMarkup = (item: any) => {
        return (isBookRow)
            ?
             (
                <div className={stylesRow.bookCard}>
                    <img className={stylesRow.bookImg} src={(item.image) ? item.image.url : bookNotFound} alt="book image"/>
                    <div className={stylesRow.wrapperElemsImg}>
                        <NavLink style={() => { return {
                            color: "black",
                            textDecoration: "none"
                        }}} to={`/main/book/${item.id}`}>
                            <p className={stylesRow.bookName}>{highlightSearchMatch(truncateStr(item.title), searchInputValue)}</p>
                        </NavLink>
                        <p className={stylesRow.bookAuthor}>{item.authors[0]}, {item.issueYear}</p>
                        <div className={stylesRow.wrapperBtnStars}>
                            {(item.rating === null)
                                ? <span className={stylesRow.score}>еще нет оценок</span>
                                : <MyStarReview score={item.rating}/>}
                            <button className={stylesRow.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                        </div>
                    </div>
                </div>
            )
        :
         (
            <div className={stylesColumn.bookCard}>
                <img src={(item.image) ? item.image.url : bookNotFound} alt="book image" />
                {(item.rating === null)
                    ? <span className={stylesColumn.score}>еще нет оценок</span>
                    : <MyStarReview score={item.rating} width={'144px'} />}
                <NavLink
                    style={{ color: "black", textDecoration: "none", marginLeft: "15px" }}
                    to={`/main/book/${item.id}`}
                >
                    <span className={stylesColumn.bookName}>{highlightSearchMatch(truncateStr(item.title), searchInputValue)}</span>
                </NavLink>
                <p className={stylesColumn.bookAuthor}>{item.authors[0]}</p>
                <button className={stylesColumn.btnStyles}>ЗАБРОНИРОВАТЬ</button>
            </div>
        )
    }
    const renderBookCards = useMemo(() => {
        if (slicedData.length === 0) {
            return <div className={stylesRow.notFound}>По запросу ничего не найдено</div>
        } else {
            return slicedData.map((item: any) => {
                return bookListMarkup(item);
            });
        }
    }, [slicedData,isBookRow]);

    return <>{renderBookCards}</>;
})