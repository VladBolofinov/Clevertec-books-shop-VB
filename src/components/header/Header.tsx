import styles from './Header.module.scss';
import Logo from '../../assets/img/MainLogo.svg';
import LogoName from '../../assets/img/MainLogoName.svg';
import avatar from '../../assets/img/avatar.png';
export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <div className={styles.logo}>
                    <Logo/>
                    <LogoName style={{marginLeft:'8px'}}/>
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