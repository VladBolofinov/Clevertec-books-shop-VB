import stylesColumn from './BookItemColumn.module.scss';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import {NavLink} from "react-router-dom";
import MyStarReview from "../../sharedComponents/MyStarReview/MyStarReview";
import {IBookItemProps} from "../BookItemTypes";
export const BookItemColumn = ({slicedData, truncateStr}:IBookItemProps) => {
    return (
        <>
            {slicedData.map((item:any) => (
                <div key={item.id} className={stylesColumn.bookCard}>
                    <img src={(item.image) ? item.image.url : bookNotFound} alt="book image" />
                    <MyStarReview score={3} width={'144px'} />
                    <NavLink
                        style={{
                            color: "black",
                            textDecoration: "none"
                        }}
                        to={`/main/book/${item.id}`}>
                        <span className={stylesColumn.bookName}>{truncateStr(item.title)}</span>
                    </NavLink>
                    <p className={stylesColumn.bookAuthor}>{item.authors[0]}</p>
                    <button className={stylesColumn.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                </div>
            ))}
        </>
    );
}