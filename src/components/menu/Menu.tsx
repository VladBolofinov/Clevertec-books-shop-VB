import styles from './Menu.module.scss';
import {Link} from "react-router-dom";
export const Menu = () => {
    return  (
        <div className={styles.menu}>
            <h3 className={styles.booksHeader}>Витрина книг</h3>
            <h3 className={styles.allBooks}>Все книги</h3>
            <p>Бизнес-книги <span>0</span></p>
            <p>Детективы <span>0</span></p>
            <p>Детские книги <span>0</span></p>
            <p>Зарубежная литература <span>0</span></p>
            <p>История <span>0</span></p>
            <p>Классическая литература <span>0</span></p>
            <p>Книги по психологии <span>0</span></p>
            <p>Компьютерная литература <span>0</span></p>
            <p>Культура и искусство <span>0</span></p>
            <p>Наука и образование <span>0</span></p>
            <p>Публицистическая литература <span>0</span></p>
            <p>Справочники <span>0</span></p>
            <p>Фантастика <span>0</span></p>
            <p>Юмористическая литература <span>0</span></p>
                <h3 className={styles.extraInformation}><Link to={'/rules'}>Правила пользования</Link></h3>
                <h3 className={styles.extraInformation}><Link to={'/contract_offer'}>Договор оферты</Link></h3>
        </div>
    )
}