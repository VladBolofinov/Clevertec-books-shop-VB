import styles from './Footer.module.scss';
import InstagramLogo from '../../assets/img/logo/InstagramLogo.svg';
import VkLogo from '../../assets/img/logo/VkLogo.svg';
import FacebookLogo from '../../assets/img/logo/FacebookLogo.svg';
import LinkedinLogo from '../../assets/img/logo/LinkedinLogo.svg';
export const Footer = () => {
    return (
        <div className={styles.footer}>
            <p className={styles.trademark}>© 2020-2023 Cleverland. Все права защищены.</p>
            <div className={styles.socialWrapper}>
                <a href="https://www.facebook.com/" target='_blank'><FacebookLogo/></a>
                <a href="https://www.instagram.com/" target='_blank'><InstagramLogo/></a>
                <a href="https://vk.com/" target='_blank'><VkLogo/></a>
                <a href="https://www.linkedin.com/" target='_blank'><LinkedinLogo/></a>
            </div>
        </div>
    )
}