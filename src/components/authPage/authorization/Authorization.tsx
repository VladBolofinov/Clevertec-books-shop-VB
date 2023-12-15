import React from 'react';
import styles from './Authorization.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authorizationSlice} from "../../../store/reducers/AuthorizationSlice";
import {MyButton} from "../../sharedComponents/MyButton/MyButton";
import IconEye from '../../../assets/img/icons/AuthIcons/Eye.svg';
import IconEyeClosed from '../../../assets/img/icons/AuthIcons/EyeClosed.svg';
import IconArrowRight from '../../../assets/img/icons/AuthIcons/IconChevron.svg';
import {registerNewUser} from "./../../../store/reducers/AuthorizationSlice";
const Authorization = () => {
    const {isOnFocusLoginPlaceholder, isOnFocusPasswordPlaceholder, inputLoginValue, inputPasswordValue, inputType} = useAppSelector(state => state.authorizationReducer);
    const {setOnFocusPlaceholder, setInputLoginValue, setInputPasswordValue, setInputType} = authorizationSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className={styles.wrapper}>
            {/*<button onClick={() => dispatch(registerNewUser({username:'aq]sdawq', password: 'asdwqqd'}))}>Register</button>*/}
            <h1>Cleverland</h1>
            <div className={styles.modal}>
                <p className={styles.enterAccount}>Вход в личный кабинет</p>
                <p className={(isOnFocusLoginPlaceholder || inputLoginValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Логин</p>
                <input className={styles.loginInput} type="text"
                       onFocus={() => dispatch(setOnFocusPlaceholder('Логин'))}
                       onBlur={() => dispatch(setOnFocusPlaceholder('Логин'))}
                       onChange={(e) => dispatch(setInputLoginValue(e.target.value))}/>
                <div className={styles.wrapperInput}>
                    <p className={(isOnFocusPasswordPlaceholder || inputPasswordValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Пароль</p>
                    <input className={styles.passwordInput} type={inputType}
                           onFocus={() => dispatch(setOnFocusPlaceholder('Пароль'))}
                           onBlur={() => dispatch(setOnFocusPlaceholder('Пароль'))}
                           onChange={(e) => dispatch(setInputPasswordValue(e.target.value))}/>
                    {(inputPasswordValue) ? <div className={styles.wrapperIcon}>
                        {(inputType === 'password') ? <IconEye onClick={() => dispatch(setInputType('text'))}/>
                            : <IconEyeClosed onClick={() => dispatch(setInputType('password'))}/>}
                    </div> : null}
                </div>
                <span className={styles.forgetEntryData}>Забыли логин или пароль?</span>
                <MyButton content={'Вход'} size={'btnLg'}/>
                <div className={styles.registrationLink}>
                    <span>Нет учетной записи?</span>
                    <div className={styles.registrationLinkWrapper}>
                        <p>Регистрация</p>
                        <IconArrowRight/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authorization;