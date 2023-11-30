import stylesRow from './BookItemRow.module.scss';
import MyStarReview from "../../sharedComponents/MyStarReview/MyStarReview";
import {NavLink} from 'react-router-dom';
import bookNotFound from "../../../assets/img/pictures/bookNotFound.png";
import {IBookItemProps} from "../BookItemTypes";
import {memo} from "react";
import {useAppSelector} from "../../hooks/redux";

export const BookItemRow = memo(({truncateStr}:IBookItemProps) => {
    const {slicedData} = useAppSelector(state => state.apiRequestReducer);
    return (
        <>
            {slicedData.map((item:any) => {
                return(
                    <div className={stylesRow.bookCard}>
                        <img className={stylesRow.bookImg} src={(item.image) ? item.image.url : bookNotFound} alt="book image"/>
                        <div className={stylesRow.wrapperElemsImg}>
                            <NavLink style={() => { return {
                                color: "black",
                                textDecoration: "none"
                            }}} to={`/main/book/${item.id}`}>
                                <p className={stylesRow.bookName}>{truncateStr(item.title)}</p>
                            </NavLink>
                            <p className={stylesRow.bookAuthor}>{item.authors[0]}, {item.issueYear}</p>
                            <div className={stylesRow.wrapperBtnStars}>
                                <MyStarReview score={item.rating}/>
                                <button className={stylesRow.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                            </div>
                        </div>
                    </div>
                )})}
        </>
    );
})