import stylesRow from './BookItemRow.module.scss';
import MyStarReview from "../../sharedComponents/MyStarReview/MyStarReview";
import {NavLink} from 'react-router-dom';
import bookNotFound from "../../../assets/img/pictures/bookNotFound.png";

export const BookItemRow = ({slicedData}:any) => {
    const truncateString = (text:string, maxLength = 55) => {
        return (text.length > maxLength) ? text.substring(0, maxLength - 3) + '...' : text;
    }
    return (
        <>
            {slicedData.map((item:any) => {
                return(
                <div key={item.id} className={stylesRow.bookCard}>
                    <img className={stylesRow.bookImg} src={(item.image == 'not found') ? bookNotFound : item.image.url} alt="book image"/>
                    <div className={stylesRow.wrapperElemsImg}>
                        <NavLink style={() => { return {
                            color: "black",
                            textDecoration: "none"
                        }}} to={`/main/book/${item.id}`}>
                        <p className={stylesRow.bookName}>{truncateString(item.title)}</p>
                        </NavLink>
                        <p className={stylesRow.bookAuthor}>{item.authors[0]}, {item.issueYear}</p>
                        <div className={stylesRow.wrapperBtnStars}>
                            <MyStarReview score={3}/>
                            <button className={stylesRow.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                        </div>
                    </div>
                </div>
            )})}
        </>
    );
}