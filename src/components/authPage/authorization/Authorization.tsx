import React from 'react';
import styles from './Authorization.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authorizationSlice} from "../../../store/reducers/AuthorizationSlice";
import {MyButton} from "../../sharedComponents/MyButton/MyButton";
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
                <input className={styles.loginInput} type="text" onFocus={() => dispatch(setOnFocusPlaceholder('Логин'))}
                                   onBlur={() => dispatch(setOnFocusPlaceholder('Логин'))}/>
                <p className={(isOnFocusPasswordPlaceholder) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Пароль</p>
                <input className={styles.passwordInput} type="password" onFocus={() => dispatch(setOnFocusPlaceholder('Пароль'))}
                       onBlur={() => dispatch(setOnFocusPlaceholder('Пароль'))}/>
                <span className={styles.forgetEntryData}>Забыли логин или пароль?</span>
                <MyButton content={'Вход'} size={'btnLg'}/>
                <div className={styles.registrationLink}>
                    <span>Нет учетной записи?</span>
                    <p>Регистрация</p>
                </div>
            </div>
        </div>
    );
};

export default Authorization;