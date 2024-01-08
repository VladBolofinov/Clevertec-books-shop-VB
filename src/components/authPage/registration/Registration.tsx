import React, {useRef} from 'react';
import {useForm, SubmitHandler} from "react-hook-form";
import styles from "./Registration.module.scss";
import IconEye from "../../../assets/img/icons/AuthIcons/Eye.svg";
import IconEyeClosed from "../../../assets/img/icons/AuthIcons/EyeClosed.svg";
import IconCheck from "../../../assets/img/icons/AuthIcons/IconCheck.svg";
import {MyButton} from "../../sharedComponents/MyButton/MyButton";
import {authorizationSlice} from "../../../store/reducers/AuthorizationSlice";
import {NavLink} from "react-router-dom";
import IconArrowRight from "../../../assets/img/icons/AuthIcons/IconChevron.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {highlightedText} from "./highlightedTextFunc";
import {AuthInput} from "../authInput/AuthInput";
type Inputs = {
    login: string;
    password: string
}

export const Registration = () => {
    const {isOnFocusFirstPlaceholder, isOnFocusSecondPlaceholder, inputType, registrationData, registrationStep} = useAppSelector(state => state.authorizationReducer);
    const {setOnFocusPlaceholder, setInputType, setRegistrationData, setNextStepRegistration} = authorizationSlice.actions;
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
        getValues,
    } = useForm<Inputs>({
        mode: 'onChange'
    })

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        console.log(getValues('password'));
        console.log(getValues('login'));
        reset();
        dispatch(setNextStepRegistration());
    }

    return (
            <>
            <div className={styles.modal}>
                <p className={styles.enterAccount}>Регистрация</p>
                <p className={styles.stepText}>{registrationStep} шаг из 3</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <AuthInput placeholderValue={'Придумайте логин для входа'}
                               inputRegistrationData={'login'}
                               needValidate={true}
                               inputNumber={'First'}
                               inputTypeProp={'text'}/>
                <div className={styles.wrapperInput}>
                    <p className={(isOnFocusSecondPlaceholder || registrationData.password) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>Пароль</p>
                    <input className={(errors.password?.message) ? styles.inputWrong  : styles.inputValid} type={inputType}
                           onFocus={() => dispatch(setOnFocusPlaceholder('Second'))}
                           {...register("password",
                               {
                                   onBlur: () => dispatch(setOnFocusPlaceholder('Second')),
                                   onChange:(e) => dispatch(setRegistrationData({type: 'password', value: e.target.value})),
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
                    {(registrationData.password) ? <div className={styles.wrapperIcon}>
                            {(errors.hasOwnProperty('password')) ? null : <IconCheck/>}
                        {(inputType === 'password') ? <IconEye onClick={() => dispatch(setInputType('text'))}/>
                            : <IconEyeClosed onClick={() => dispatch(setInputType('password'))}/>}
                    </div> : null}
                </div>
                <p className={styles.inputTooltip}>{(errors.password?.message)
                    ? highlightedText('password',errors.password.message)
                    : 'Пароль не менее 8 символов, с заглавной буквой и цифрой'}</p>
                    <MyButton content={'Следующий шаг'}
                              size={'btnLg'}
                              margin={'25px 0 0 0'}
                              active={!isValid}/>
            </form>

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