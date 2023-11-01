import styles from './Menu.module.scss';
import { NavLink} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import ArrowMenuTop from '../../assets/img/icons/ArrowMenuTop.svg';
import ArrowMenuBottom from '../../assets/img/icons/ArrowMenuBottom.svg';
import {bookSlice} from "../../providers/store/reducers/BookSlice";
export const Menu = () => {
    const {isOpenModal,isActiveDropDown} = useAppSelector(state => state.userReducer);
    const {isLoading} = useAppSelector(state => state.apiRequestReducer);
    const {openDropDownList,openModal} = bookSlice.actions;
    const dispatch = useAppDispatch();

    return  (
        <div>
            <div className={(isLoading) ? styles.menuLoading : styles.menu} style={(isOpenModal) ? {transform: 'translateX(-5%)', transition: '0.4s'} : null}>
                <div className={styles.arrowMenu}
                     onClick={() => dispatch(openDropDownList(!isActiveDropDown))}>
                    {(isActiveDropDown) ? <ArrowMenuTop fill={'#F83600'}/> : <ArrowMenuBottom fill={'#F83600'}/>}
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
                <h3 className={(isActiveDropDown) ? styles.allBooksHeader : styles.allBooksHeaderHide}>Все книги</h3>
            </NavLink>
                <div className={(isActiveDropDown) ? null : styles.allBooksHide}>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Бизнес-книги <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Детективы <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Детские книги <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Зарубежная литература <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>История <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Классическая литература <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Книги по психологии <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Компьютерная литература <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Культура и искусство <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Наука и образование <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Публицистическая литература <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Справочники <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Фантастика <span>0</span></p>
                    <p onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}>Юмористическая литература <span>0</span></p>
                </div>
                <h3 className={styles.extraInformation} onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}><NavLink
                    to="/rules"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}>
                    Правила пользования
                </NavLink></h3>
                <h3 className={styles.extraInformation} onClick={() => { if (isOpenModal) {
            dispatch(openModal(false));
        }}}><NavLink
                    to="/contract_offer"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}>Договор оферты</NavLink></h3>
                <span className={styles.spanLine}></span>
                <div className={styles.wrapperBottomBlock}>
                    <h3 className={styles.extraInformation}>Профиль</h3>
                    <h3 className={styles.extraInformation}>Выход</h3>
                </div>
            </div>
        </div>
    )
}