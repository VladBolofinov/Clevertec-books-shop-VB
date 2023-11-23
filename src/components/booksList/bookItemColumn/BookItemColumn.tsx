import stylesColumn from './BookItemColumn.module.scss';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import {NavLink} from "react-router-dom";
import MyStarReview from "../../sharedComponents/MyStarReview/MyStarReview";
import {IBookItemProps} from "../BookItemTypes";
import {memo} from "react";
export const BookItemColumn = memo(({slicedData, truncateStr}:IBookItemProps) => {
    console.log('Сработал рендер в компоненте BookItemColumn');
    return (
        <>
            {slicedData.map((item:any) => (
                <div key={item.id} className={stylesColumn.bookCard}>
                    <img src={(item.image) ? item.image.url : bookNotFound} alt="book image" />
                    <MyStarReview score={item.rating} width={'144px'} />
                    <NavLink
                        style={{color: "black", textDecoration: "none", marginLeft: "15px"}}
                        to={`/main/book/${item.id}`}>
                        <span className={stylesColumn.bookName}>{truncateStr(item.title)}</span>
                    </NavLink>
                    <p className={stylesColumn.bookAuthor}>{item.authors[0]}</p>
                    <button className={stylesColumn.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                </div>
            ))}
        </>
    );
})