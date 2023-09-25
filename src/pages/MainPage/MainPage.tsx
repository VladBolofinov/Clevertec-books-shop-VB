import styles from './MainPage.module.scss'
import {Menu} from "../../components/menu/Menu";
import {BooksList} from "../../components/booksList/BooksList";
import {MenuModal} from "../../components/menu/menuModal/MenuModal";
import {useState} from "react";
const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={styles.wrapperMiddleSection}>
            {(window.innerWidth < 1110) ? <MenuModal isOpen={isOpen}/> : <Menu/>}
            <button onClick={() => setIsOpen(!isOpen)}>Open modal</button>
            <BooksList/>
        </div>
    )
}
export default MainPage;
