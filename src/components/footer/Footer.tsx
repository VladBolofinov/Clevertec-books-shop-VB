import styles from './Footer.module.scss';
export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.trademark}>© 2020-2023 Cleverland. Все права защищены.</p>
            <div className={styles.socialWrapper}>
                <img src="" alt="facebook"/>
                <img src="" alt="instagram"/>
                <img src="" alt="VK"/>
                <img src="" alt="LinkedIn"/>
            </div>
        </div>
    )
}