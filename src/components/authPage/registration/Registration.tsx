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
        getValues,
    } = useForm<Inputs>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        console.log(getValues('password'));
        console.log(getValues('login'));
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
    const {isOnFocusLoginPlaceholder, isOnFocusPasswordPlaceholder, inputLoginValue, inputPasswordValue, inputType,} = useAppSelector(state => state.authorizationReducer);
    const {setOnFocusPlaceholder, setInputLoginValue, setInputPasswordValue, setInputType} = authorizationSlice.actions;
    const dispatch = useAppDispatch();
    return (
            <>
            <div className={styles.modal}>
                <p className={styles.enterAccount}>Регистрация</p>
                <p className={styles.stepText}>1 шаг из 3</p>
                <p className={(isOnFocusLoginPlaceholder || inputLoginValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Придумайте логин для входа</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input className={(errors.login?.message) ? styles.loginInputWrong  : styles.loginInput} type="text"
                       onFocus={() => dispatch(setOnFocusPlaceholder('Логин'))}
                       {...register("login",
                           {
                               onBlur: () => dispatch(setOnFocusPlaceholder('Логин')),
                               onChange:(e) => dispatch(setInputLoginValue(e.target.value)),
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
                           })}/>
                <p className={styles.inputTooltip}>{(errors.login?.message)
                    ? highlightedText('login',errors.login.message)
                    : 'Используйте для логина латинский алфавит и цифры'}</p>
                <div className={styles.wrapperInput}>
                    <p className={(isOnFocusPasswordPlaceholder || inputPasswordValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Пароль</p>
                    <input className={(errors.password?.message) ? styles.passwordInputWrong  : styles.passwordInput} type={inputType}
                           onFocus={() => dispatch(setOnFocusPlaceholder('Пароль'))}
                           {...register("password",
                               {
                                   onBlur: () => dispatch(setOnFocusPlaceholder('Пароль')),
                                   onChange:(e) => dispatch(setInputPasswordValue(e.target.value)),
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
                               })}/>
                    {(inputPasswordValue) ? <div className={styles.wrapperIcon}>
                        {(inputType === 'password') ? <IconEye onClick={() => dispatch(setInputType('text'))}/>
                            : <IconEyeClosed onClick={() => dispatch(setInputType('password'))}/>}
                    </div> : null}
                </div>
                <p className={styles.inputTooltip}>{(errors.password?.message)
                    ? highlightedText('password',errors.password.message)
                    : 'Пароль не менее 8 символов, с заглавной буквой и цифрой'}</p>
            </form>
                <MyButton content={'Следующий шаг'}
                          size={'btnLg'}
                          margin={'25px 0 0 0'}
                          onClick={() => {
                              console.log(getValues('password'));
                              console.log(getValues('login'));
                              console.log(errors);
                              // погугли в документации функцию/метод который дает
                              // значение прошла ли валидация и нужно добавить в пасворд инпут иконку проверки
                          }}/>
                <div className={styles.registrationLink}>
                    <span>Есть учетная запись?</span>
                    <div className={styles.registrationLinkWrapper}>
                        <NavLink to={`/authorization`} style={() => ({
                            color: "black",
                            textDecoration: "red"
                        })}><p>Войти</p></NavLink>
                        <IconArrowRight/>
                    </div>
                </div>
            </div>
        </>
    );
};