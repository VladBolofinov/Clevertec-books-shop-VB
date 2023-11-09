import stylesColumn from './BookItemColumn.module.scss';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import {NavLink} from "react-router-dom";
import MyStarReview from "../../sharedComponents/MyStarReview/MyStarReview";

export const BookItemColumn = ({slicedData}:any) => {
    //react-dom.development.js:11340 Uncaught TypeError: Cannot read properties of null (reading 'url')   Разберись с этой ошибкой
    // рандомно появляется при клике по категориям, возможно добавь проверку
    //добавь в категорию другое какую-нибудь 1 книгу чтобы не писать логику для проверки если оно не будет работать
    const truncateString = (text:string, maxLength = 55) => {
        return (text.length > maxLength) ? text.substring(0, maxLength - 3) + '...' : text;
    }

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
                        <span className={stylesColumn.bookName}>{truncateString(item.title)}</span>
                    </NavLink>
                    <p className={stylesColumn.bookAuthor}>{item.authors[0]}</p>
                    <button className={stylesColumn.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                </div>
            ))}
        </>
    );
}