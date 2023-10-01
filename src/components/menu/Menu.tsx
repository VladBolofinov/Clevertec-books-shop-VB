import styles from './Menu.module.scss';
import { NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import ArrowMenuTop from '../../assets/img/icons/ArrowMenuTop.svg';
import ArrowMenuBottom from '../../assets/img/icons/ArrowMenuBottom.svg';
import {userSlice} from "../../providers/store/reducers/UserSlice";
export const Menu = () => {
    const {isOpenModal,isActiveMenu} = useAppSelector(state => state.userReducer);
    const {openMenu} = userSlice.actions;
    const dispatch = useAppDispatch();
    return  (
        <div>
            <div className={styles.menu} style={(isOpenModal) ? {transform: 'translateX(-5%)', transition: '0.4s'} : null}>
                <div className={styles.arrowMenu}
                     onClick={() => dispatch(openMenu(!isActiveMenu))}>
                    {(isActiveMenu) ? <ArrowMenuTop/> : <ArrowMenuBottom/>}
                </div>
                <NavLink
                    to="/"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}
                >
                <h3 className={styles.booksHeader}>Витрина книг</h3>
                <h3 className={(isActiveMenu) ? styles.allBooksHeader : styles.allBooksHeaderHide}>Все книги</h3>
            </NavLink>
                <div className={(isActiveMenu) ? null : styles.allBooksHide}>
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
                </div>
                <h3 className={styles.extraInformation}><NavLink
                    to="/rules"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}
                >
                    Правила пользования
                </NavLink></h3>
                <h3 className={styles.extraInformation}><NavLink
                    to="/contract_offer"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}>Договор оферты</NavLink></h3>
            </div>
        </div>

    )
}