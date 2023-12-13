import React from 'react';
import styles from './Authorization.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authorizationSlice} from "../../../store/reducers/AuthorizationSlice";
const Authorization = () => {
    const {isOnFocusLoginPlaceholder, isOnFocusPasswordPlaceholder} = useAppSelector(state => state.authorizationReducer);
    const {setOnFocusPlaceholder} = authorizationSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className={styles.wrapper}>
            <h1>Cleverland</h1>
            <div className={styles.modal}>
                <p className={styles.enterAccount}>Вход в личный кабинет</p>
                <p className={(isOnFocusLoginPlaceholder) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Логин</p>
                <input type="text" onFocus={() => dispatch(setOnFocusPlaceholder('Логин'))}
                                   onBlur={() => dispatch(setOnFocusPlaceholder('Логин'))}/>
                <p className={(isOnFocusPasswordPlaceholder) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Пароль</p>
                <input type="text" onFocus={() => dispatch(setOnFocusPlaceholder('Пароль'))}
                       onBlur={() => dispatch(setOnFocusPlaceholder('Пароль'))}/>
                <span className={styles.forgetEntryData}>Забыли логин или пароль?</span>
                <button></button>
                <span>Нет учетной записи?</span>
                <span>Регистрация</span>
            </div>
        </div>
    );
};

export default Authorization;