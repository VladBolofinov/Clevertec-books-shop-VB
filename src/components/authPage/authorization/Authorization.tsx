import React from 'react';
import styles from './Authorization.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authorizationSlice, fetchLogIn} from "../../../store/reducers/AuthorizationSlice";
import {MyButton} from "../../sharedComponents/MyButton/MyButton";
import IconEye from '../../../assets/img/icons/AuthIcons/Eye.svg';
import IconEyeClosed from '../../../assets/img/icons/AuthIcons/EyeClosed.svg';
import IconArrowRight from '../../../assets/img/icons/AuthIcons/IconChevron.svg';
import {MyLoader} from "../../sharedComponents/MyLoader/MyLoader";
import {AuthModal} from "../authModal/AuthModal";
import {NavLink} from "react-router-dom";
const Authorization = () => {
    const {isOnFocusFirstPlaceholder, isOnFocusSecondPlaceholder, inputLoginValue, inputPasswordValue, inputType,
        requestStatus, isLoadingRegReq, error, authSuccess} = useAppSelector(state => state.authorizationReducer);
    const {setOnFocusPlaceholder, setInputLoginValue, setInputPasswordValue, setInputType, repeatLogIn} = authorizationSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <>
            {
                (error)
                    ? <AuthModal onClick={() => dispatch(repeatLogIn())} headerText={"Вход не выполнен"} descrText={"Что-то пошло не так. Попробуйте ещё раз"}/>
                    : <>
                        {(isLoadingRegReq) ? <MyLoader/> : null}
                        {/*<button onClick={() => dispatch(registerNewUser({username:'admin999', password: '123'}))}>Register</button>*/}
                        <div className={(isLoadingRegReq) ? styles.modalLoading : styles.modal}>
                            <p className={styles.enterAccount}>Вход в личный кабинет</p>
                            <p className={(isOnFocusFirstPlaceholder || inputLoginValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Логин</p>
                            <input className={(authSuccess) ? styles.loginInput : (requestStatus === 0) ? styles.loginInput : styles.loginInputWrong} type="text"
                                   onFocus={() => dispatch(setOnFocusPlaceholder('First'))}
                                   onBlur={() => dispatch(setOnFocusPlaceholder('First'))}
                                   onChange={(e) => dispatch(setInputLoginValue(e.target.value))}/>
                            <div className={styles.wrapperInput}>
                                <p className={(isOnFocusSecondPlaceholder || inputPasswordValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Пароль</p>
                                <input className={(authSuccess) ? styles.passwordInput : (requestStatus === 0) ? styles.passwordInput : styles.passwordInputWrong} type={inputType}
                                       onFocus={() => dispatch(setOnFocusPlaceholder('Second'))}
                                       onBlur={() => dispatch(setOnFocusPlaceholder('Second'))}
                                       onChange={(e) => dispatch(setInputPasswordValue(e.target.value))}/>
                                {(inputPasswordValue) ? <div className={styles.wrapperIcon}>
                                    {(inputType === 'password') ? <IconEye onClick={() => dispatch(setInputType('text'))}/>
                                        : <IconEyeClosed onClick={() => dispatch(setInputType('password'))}/>}
                                </div> : null}
                            </div>
                            {(authSuccess)
                                ? <span className={styles.forgetEntryData}>Забыли логин или пароль?</span>
                                : (requestStatus === 0)
                                    ? <span className={styles.forgetEntryData}>Забыли логин или пароль?</span>
                                    : <div className={styles.wrongAuthData}>
                                        <span className={styles.recoverData}>Неверный логин или пароль!</span>
                                        <span>Восстановить?</span>
                                    </div>}
                            <MyButton content={'Вход'} size={'btnLg'} onClick={() => dispatch(fetchLogIn({username:inputLoginValue,password:inputPasswordValue}))}/>
                            <div className={styles.registrationLink}>
                                <span>Нет учетной записи?</span>
                                <div className={styles.registrationLinkWrapper}>
                                    <NavLink to={`/authorization/registration`} style={() => ({
                                        color: "black",
                                        textDecoration: "red"
                                    })}><p>Регистрация</p></NavLink>
                                    <IconArrowRight/>
                                </div>
                            </div>
                        </div>
                    </>}
        </>
    );
};

export default Authorization;