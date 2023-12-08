import stylesColumn from './BookItemColumn.module.scss';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import {NavLink} from "react-router-dom";
import MyStarReview from "../../sharedComponents/MyStarReview/MyStarReview";
import {IBookItemProps} from "../BookItemTypes";
import {memo, useMemo} from "react";
import {useAppSelector} from "../../hooks/redux";
export const BookItemColumn = memo(({truncateStr, highlightSearchMatch}:IBookItemProps) => {
    const {slicedData, searchInputValue} = useAppSelector(state => state.apiRequestReducer);
    const renderBookCards = useMemo(() => {
        return slicedData.map((item: any) => {
            return (
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
            );
        });
    }, [slicedData]);
    return <>{renderBookCards}</>;
})