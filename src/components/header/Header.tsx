import styles from './Header.module.scss';
import Logo from '../../assets/img/MainLogo.svg';
import LogoName from '../../assets/img/MainLogoName.svg';
import avatar from '../../assets/img/avatar.png';
import {NavLink} from "react-router-dom";
import {bookSlice} from "../../providers/store/reducers/BookSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";

export const Header = () => {
    const {openModal} = bookSlice.actions;
    const dispatch = useAppDispatch();
    const {isOpenModal} = useAppSelector(state => state.userReducer);
    const {isLoading} = useAppSelector(state => state.apiRequestReducer);
    return (
        <div className={(isLoading) ? styles.headerLoading : styles.header}>
            <div className={styles.logoWrapper}>
                <NavLink to="/">
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
                <img src={avatar} alt="user-icon"/>
            </div>
        </div>
    )
}