import styles from './Header.module.scss';
import Logo from '../../assets/img/MainLogo.svg';
import LogoName from '../../assets/img/MainLogoName.svg';
import avatar from '../../assets/img/avatar.png';
import {NavLink} from "react-router-dom";
import {bookSlice} from "../../store/reducers/BookSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import React, { memo } from 'react';

export const Header = memo(() => {
    const {openModal} = bookSlice.actions;
    const dispatch = useAppDispatch();
    const {isOpenModal} = useAppSelector(state => state.userReducer);
    const {isLoadingBook,isLoadingToken, isLoadingCategories} = useAppSelector(state => state.apiRequestReducer);

    return (
        <div className={(isLoadingToken || isLoadingBook || isLoadingCategories) ? styles.headerLoading : styles.header}>
            <div className={styles.logoWrapper}>
                <NavLink to="/main">
                    <div className={styles.logo}>
                        <Logo/>
                        <LogoName style={{marginLeft:'8px'}}/>
                    </div>
                </NavLink>
                <div className={(!isOpenModal) ? styles.burgerBtn : styles.burgerBtnClose} onClick={() => dispatch(openModal(!isOpenModal))}>
                    <span></span>
                </div>
                <h1 className={styles.headerName}>Библиотека</h1>
            </div>
            <div className={styles.authorisation}>
                <span className={styles.avatarText}>Привет, новый пользователь {} !</span>
                <NavLink to={`/authorization`}><img src={avatar} alt="user-icon"/></NavLink>
            </div>
        </div>
    )
})