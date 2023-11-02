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
    //вынеси куда-нибудь функцию отдельно чтобы не дублировать ее
    const truncateString = (text:string, maxLength = 55) => {
        return (text.length > maxLength) ? text.substring(0, maxLength - 3) + '...' : text;
    }
    return (
        <>
            {slicedData.map((item:any,i:number) => {
                return(
                <div key={item.id} className={stylesRow.bookCard}>
                    <img className={stylesRow.bookImg} src={(item.image == 'not found') ? bookNotFound : item.image.url} alt="book image"/>
                    <div className={stylesRow.wrapperElemsImg}>
                        <NavLink style={() => { return {
                            color: "black",
                            textDecoration: "none"
                        }}} to={`/bookPage/${item.id}`}>
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