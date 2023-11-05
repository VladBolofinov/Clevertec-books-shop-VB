import styles from './Menu.module.scss';
import { NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import ArrowMenuTop from '../../assets/img/icons/ArrowMenuTop.svg';
import ArrowMenuBottom from '../../assets/img/icons/ArrowMenuBottom.svg';
import {bookSlice} from "../../providers/store/reducers/BookSlice";
export const Menu = () => {
    const {isOpenModal,isActiveDropDown} = useAppSelector(state => state.userReducer);
    const {isLoading,categories} = useAppSelector(state => state.apiRequestReducer);
    const {openDropDownList,openModal} = bookSlice.actions;
    const dispatch = useAppDispatch();

    const renderCategories = categories.map((item:any) => {
        return (
            <>
                <NavLink to={`/${item.path}`} style={({ isActive }) => {
                    return {
                        color: isActive ? "#F83600" : "black",
                        textDecoration: "none"
                    }}}>
                    <p key={item.id} onClick={() => { if (isOpenModal) {
                        dispatch(openModal(false));
                    }}}>{item.name}
                    <span>  {item.booksCount}</span>
                    </p>
                </NavLink>
            </>
        )
    })

    return  (
        <div>
            <div className={(isLoading) ? styles.menuLoading : styles.menu} style={(isOpenModal) ? {transform: 'translateX(-5%)', transition: '0.4s'} : null}>
                <div className={styles.arrowMenu}
                     onClick={() => dispatch(openDropDownList(!isActiveDropDown))}>
                    {(isActiveDropDown) ? <ArrowMenuTop fill={'#F83600'}/> : <ArrowMenuBottom fill={'#F83600'}/>}
                </div>
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}
                >
                <h3 className={styles.booksHeader}>Витрина книг</h3>
                <h3 className={(isActiveDropDown) ? styles.allBooksHeader : styles.allBooksHeaderHide}>Все книги</h3>
            </NavLink>
                <div className={(isActiveDropDown) ? null : styles.allBooksHide}>
                    {renderCategories}
                </div>
                <h3 className={styles.extraInformation} onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>
                    <NavLink
                        to="/rules" style={({ isActive }) => {
                            return {
                                color: isActive ? "#F83600" : "black",
                                textDecoration: "none"
                            }}}>Правила пользования
                    </NavLink>
                </h3>
                <h3 className={styles.extraInformation} onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}><NavLink
                    to="/contract_offer"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}>Договор оферты</NavLink></h3>
                <span className={styles.spanLine}></span>
                <div className={styles.wrapperBottomBlock}>
                    <h3 className={styles.extraInformation}>Профиль</h3>
                    <h3 className={styles.extraInformation}>Выход</h3>
                </div>
            </div>
        </div>
    )
}