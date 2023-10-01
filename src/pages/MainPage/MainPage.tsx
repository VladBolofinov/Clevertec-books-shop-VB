import styles from './MainPage.module.scss'
import {Menu} from "../../components/menu/Menu";
import {BooksList} from "../../components/booksList/BooksList";

const MainPage = () => {
    return (
        <div className={styles.wrapperMiddleSection}>
            <Menu/>
            <BooksList/>
        </div>
    )
}
export default MainPage;
