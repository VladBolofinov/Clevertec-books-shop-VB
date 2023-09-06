import styles from './Header.module.scss';

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <div className={styles.logo}>
                    <img src='' alt="icon-logo" />
                    <img src='' alt="icon-logo-text"/>
                </div>
                <h1 className={styles.headerName}>Библиотека</h1>
            </div>

            <div className={styles.authorisation}>
                <span>Привет, {} !</span>
                <img src="" alt="user-icon"/>
            </div>
        </div>
    )
}