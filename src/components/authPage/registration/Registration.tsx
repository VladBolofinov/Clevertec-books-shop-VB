import React from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import styles from "./Registration.module.scss";
import IconEye from "../../../assets/img/icons/AuthIcons/Eye.svg";
import IconEyeClosed from "../../../assets/img/icons/AuthIcons/EyeClosed.svg";
import {MyButton} from "../../sharedComponents/MyButton/MyButton";
import {authorizationSlice, fetchLogIn} from "../../../store/reducers/AuthorizationSlice";
import {NavLink} from "react-router-dom";
import IconArrowRight from "../../../assets/img/icons/AuthIcons/IconChevron.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";


type Inputs = {
    login: string;
    password: string
}

export const Registration = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<Inputs>({
        mode: 'onChange'
    })
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        reset();
    }

    const highlightedText = (inputType: string, validateResult: string) => {
        const redText = {color: "red"};
        if (!validateResult) {
            return null;
        }
        if (inputType === 'login') {
            if (validateResult === 'латинский алфавит') {
                return <p>Используйте для логина <span style={redText}>латинский алфавит</span> и цифры</p>
            } else {
                return <p style={redText}>Используйте для логина латинский алфавит и цифры</p>
            }
        } else if (inputType === 'password') {
            if (validateResult === 'с заглавной буквой') {
                return <p>Пароль не менее 8 символов, <span style={redText}>с заглавной буквой</span> и цифрой</p>
            } else if (validateResult === 'не менее 8 символов') {
                return <p><span style={redText}>Пароль не менее 8 символов,</span> с заглавной буквой и цифрой</p>
            } else {
                return <p style={redText}>Пароль не менее 8 символов, с заглавной буквой и цифрой</p>
            }
        }
    }
    const {isOnFocusLoginPlaceholder, isOnFocusPasswordPlaceholder, inputLoginValue, inputPasswordValue, inputType,
        requestStatus, authSuccess} = useAppSelector(state => state.authorizationReducer);
    const {setOnFocusPlaceholder, setInputLoginValue, setInputPasswordValue, setInputType, repeatLogIn} = authorizationSlice.actions;
    const dispatch = useAppDispatch();
    return (
            <>
            <div className={styles.modal}>
                <p className={styles.enterAccount}>Регистрация</p>
                <p className={(isOnFocusLoginPlaceholder || inputLoginValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Придумайте логин для входа</p>
                <input className={(authSuccess) ? styles.loginInput : (requestStatus === 0) ? styles.loginInput : styles.loginInputWrong} type="text"
                       onFocus={() => dispatch(setOnFocusPlaceholder('Логин'))}
                       onBlur={() => dispatch(setOnFocusPlaceholder('Логин'))}
                       onChange={(e) => dispatch(setInputLoginValue(e.target.value))}/>
                <div className={styles.wrapperInput}>
                    <p className={(isOnFocusPasswordPlaceholder || inputPasswordValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Пароль</p>
                    <input className={(authSuccess) ? styles.passwordInput : (requestStatus === 0) ? styles.passwordInput : styles.passwordInputWrong} type={inputType}
                           onFocus={() => dispatch(setOnFocusPlaceholder('Пароль'))}
                           onBlur={() => dispatch(setOnFocusPlaceholder('Пароль'))}
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
            ////

            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("login",
                    {
                        required: true,
                        validate: {
                            checkLogin: (value) => {
                                const hasSpecificSymbols = /[^a-zA-Z0-9]/g.test(value);
                                const hasNumbersOnly = /\d/.test(value);
                                const hasAllParams = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(value);
                                if (hasAllParams) {
                                    return true;
                                } else if (hasSpecificSymbols && hasNumbersOnly) {
                                    return 'латинский алфавит';
                                } else {
                                   return 'Используйте для логина латинский алфавит и цифры';
                                }
                            },
                        },
                    })} />
                {(errors.login) && highlightedText('login',errors.login.message)}
                <input {...register("password",
                    {
                        required: true,
                        validate: {
                            checkPassword: (value) => {
                                const hasMinLength = /^.{8,}$/.test(value);
                                const hasUppercaseChar = /[A-Z]/.test(value);
                                const hasAllParams = /(?=.*[A-ZА-Яa-zа-я\d])(?=.*[A-ZА-Я]).{8,}/.test(value);
                                const hasNumbersOnly = /\d/.test(value);
                                if (hasAllParams) {
                                    return true;
                                } else if (hasMinLength && hasNumbersOnly && !hasUppercaseChar) {
                                    return 'с заглавной буквой';
                                } else if (hasNumbersOnly && !hasUppercaseChar && !hasMinLength) {
                                    return 'не менее 8 символов';
                                } else {
                                   return 'Пароль не менее 8 символов, с заглавной буквой и цифрой';
                                }
                            },
                        },
                    })} />
                {errors.password && highlightedText('password',errors.password.message)}
                <input type="submit" />
            </form>
        </>
    );
};