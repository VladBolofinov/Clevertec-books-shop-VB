import stylesColumn from './BookItemColumn.module.scss';
import bookPhoto from '../../../assets/img/pictures/BookPhoto.png';
import {NavLink} from "react-router-dom";
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";

export const BookItemColumn = () => {
    const {data} = useAppSelector(state => state.apiRequestReducer);
    console.log(data[5]);
    return (
        <>
            {data.map((item:any) => (
                <div key={item.id} className={stylesColumn.bookCard}>
                    <img src={bookPhoto} alt="book image" />
                    <MyStarReview score={3} width={'144px'} />
                    <NavLink
                        style={{
                            color: "black",
                            textDecoration: "none"
                        }}
                        to={'/bookPage'}
                    >
                        <span className={stylesColumn.bookName}>{item.title}</span>
                    </NavLink>
                    <p className={stylesColumn.bookAuthor}>Адитья Бхаргава, Патрик Нимейер, 2019</p>
                    <button className={stylesColumn.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                </div>
            ))}
        </>
    );
}