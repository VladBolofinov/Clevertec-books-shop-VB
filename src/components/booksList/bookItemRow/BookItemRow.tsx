import stylesRow from './BookItemRow.module.scss';
import MyStarReview from "../../../shared/MyStarReview/MyStarReview";
import { NavLink } from 'react-router-dom';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import bookNotFound from "../../../assets/img/pictures/bookNotFound.png";
import {useEffect} from "react";
import {fetchBooksData, fetchToken} from "../../../providers/store/reducers/ApiRequestSlice";

export const BookItemRow = () => {
    const {data,jwt} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();
    const slicedData = data.slice(0, 10);

    useEffect(() => {
        if (jwt && data.length == 0) {
            dispatch(fetchBooksData(jwt));
        } else if (!jwt) {
            dispatch(fetchToken());
        }
    }, [jwt]);

    return (
        <>
            {slicedData.map((item:any,i:number) => {
                return(
                <div key={item.id} className={stylesRow.bookCard}>
                    <img className={stylesRow.bookImg} src={(item.image) ? item.image.url : bookNotFound} alt="book image"/>
                    <div className={stylesRow.wrapperElemsImg}>
                        <NavLink style={() => { return {
                            color: "black",
                            textDecoration: "none"
                        }}} to={`/bookPage/${item.id}`}>
                        <p className={stylesRow.bookName}>{item.title}</p>
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