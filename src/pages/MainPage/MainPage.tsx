import styles from './MainPage.module.scss'
import {Menu} from "../../components/menu/Menu";
import {BooksList} from "../../components/booksList/BooksList";
import {MenuModal} from "../../components/menu/menuModal/MenuModal";
const MainPage = () => {
    return (
        <div className={styles.wrapperMiddleSection}>
            {/*{(window.innerWidth < 1110) ? <MenuModal/> : <Menu/>}*/}
            <Menu/>
            <BooksList/>
        </div>
    )
}
export default MainPage;
