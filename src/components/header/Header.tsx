import styles from './Header.module.scss';
import Logo from '../../assets/img/MainLogo.svg';
import LogoName from '../../assets/img/MainLogoName.svg';
import avatar from '../../assets/img/avatar.png';
import IconBurgerLg from '../../assets/img/icons/IconBurgerLg.svg';
import IconBurgerSm from '../../assets/img/icons/IconBurgerSm.svg';
import {NavLink} from "react-router-dom";

export const Header = () => {
    const svgParametres = (windowWidth: number) => {
        if (windowWidth < 1110) {
            return <button className={styles.btnModal}><IconBurgerLg/></button>
        } else if (windowWidth < 768) {
            return <button className={styles.btnModal}><IconBurgerSm/></button>
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
                {svgParametres(window.innerWidth)}
                <h1 className={styles.headerName}>Библиотека</h1>
            </div>
            <div className={styles.authorisation}>
                <span className={styles.avatarText}>Привет, новый пользователь {} !</span>
                <img src={avatar} alt="user-icon"/>
            </div>
        </div>
    )
}