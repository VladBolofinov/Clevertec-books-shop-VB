import styles from './Header.module.scss';
import Logo from '../../assets/img/MainLogo.svg';
import LogoName from '../../assets/img/MainLogoName.svg';
import avatar from '../../assets/img/avatar.png';
import IconBurgerLg from '../../assets/img/icons/IconBurgerLg.svg';
import IconBurgerSm from '../../assets/img/icons/IconBurgerSm.svg';
import {NavLink} from "react-router-dom";
import {userSlice} from "../../providers/store/reducers/UserSlice";
import {useAppDispatch, useAppSelector} from "../hooks/redux";


export const Header = () => {
    const {openModal} = userSlice.actions;
    const dispatch = useAppDispatch();
    const {isOpen} = useAppSelector(state => state.userReducer);
    const svgParametres = (windowWidth: number) => {
        if (windowWidth < 1110) {
            return <IconBurgerLg/>
        } else if (windowWidth < 768) {
            return <IconBurgerSm/>
        } else {
            return null
        }
    }

    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <NavLink to="/">
                <div className={styles.logo}>
                        <Logo/>
                        <LogoName style={{marginLeft:'8px'}}/>
                </div>
                </NavLink>
                <button onClick={() => dispatch(openModal(!isOpen))} className={styles.btnModal}>{svgParametres(window.innerWidth)}</button>
                <h1 className={styles.headerName}>Библиотека</h1>
            </div>
            <div className={styles.authorisation}>
                <span className={styles.avatarText}>Привет, новый пользователь {} !</span>
                <img src={avatar} alt="user-icon"/>
            </div>
        </div>
    )
}