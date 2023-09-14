import styles from './MainPage.module.scss'
import {Menu} from "../../components/menu/Menu";
import {BooksList} from "../../components/booksList/BooksList";
import {FC} from "react";
const MainPage: FC = () => {
    return (
        <div className={styles.wrapperMiddleSection}>
            <Menu/>
            <BooksList/>
        </div>
    )
}
export default MainPage;
