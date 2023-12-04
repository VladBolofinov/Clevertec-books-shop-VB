import styles from './Menu.module.scss';
import {NavLink, useLocation} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import ArrowMenuTop from '../../assets/img/icons/ArrowMenuTop.svg';
import ArrowMenuBottom from '../../assets/img/icons/ArrowMenuBottom.svg';
import {bookSlice} from "../../store/reducers/BookSlice";
import {apiRequestSlice} from "../../store/reducers/ApiRequestSlice";
import React, {useMemo, memo} from "react";
import {modalSlice} from "../../store/reducers/ModalSlice";

export const Menu = memo(() => {
    const {isOpenModal} = useAppSelector(state => state.userReducer);
    const {isActiveDropDownMenu} = useAppSelector(state => state.modalReducer);
    const {isLoadingToken,categories, isLoadingCategories, isLoadingBook, searchInputValue} = useAppSelector(state => state.apiRequestReducer);
    const {setDropDownMenu} = modalSlice.actions;
    const {openModal} = bookSlice.actions;
    const {filterByCategory, searchQuery} = apiRequestSlice.actions;
    const dispatch = useAppDispatch();
    const menuStatus: string = (isLoadingToken || isLoadingBook || isLoadingCategories) ? styles.menuLoading : styles.menu;
    const renderCategories = useMemo(() => {
        return categories.map((item:any) => (
            <>
                <NavLink to={`/main/${item.path}`} style={({ isActive }) => ({
                    color: isActive ? "#F83600" : "black",
                    textDecoration: "none"
                })}>
                    <p key={item.id} onClick={() => {
                        dispatch(filterByCategory(item.name));
                        if (searchInputValue) {
                            dispatch(searchQuery());
                        }
                        if (isOpenModal) {
                            dispatch(openModal(!isOpenModal));
                        }
                    }}>
                        {item.name} <span>{item.booksCount}</span>
                    </p>
                </NavLink>
            </>
        ));
    }, [categories]);

    return  (
        <div>
            <div className={((useLocation().pathname.includes('/book/'))) ? styles.menuInBookSection : menuStatus}
                 style={(isOpenModal) ? {transform: 'translateX(-5%)', transition: '0.4s'} : null}>
                <div className={styles.arrowMenu}
                     onClick={() => dispatch(setDropDownMenu(!isActiveDropDownMenu))}>
                    {(isActiveDropDownMenu) ? <ArrowMenuTop fill={'#F83600'}/> : <ArrowMenuBottom fill={'#000000'}/>}
                </div>
                <NavLink
                    to="/main"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}
                    onClick={() => {
                        dispatch(filterByCategory('Все'));
                        dispatch(searchQuery());
                        if (isOpenModal) {
                            dispatch(openModal(!isOpenModal));
                        }
                    }}
                >
                    <h3 className={styles.booksHeader}>Витрина книг</h3>
                    <h3 className={(isActiveDropDownMenu) ? styles.allBooksHeader : styles.allBooksHeaderHide}>Все книги</h3>
                </NavLink>
                <div className={(isActiveDropDownMenu) ? null : styles.allBooksHide}>
                    {renderCategories}
                </div>
                <h3 className={styles.extraInformation} onClick={() => { if (isOpenModal) {
                    dispatch(openModal(false));
                }}}>
                    <NavLink
                        to="/main/rules" style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        }}}>Правила пользования
                    </NavLink>
                </h3>
                <h3 className={styles.extraInformation} onClick={() => { if (isOpenModal) {
                    dispatch(openModal(false));
                }}}><NavLink
                    to="/main/contract_offer"
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
})