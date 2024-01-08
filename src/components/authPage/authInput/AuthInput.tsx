import styles from './AuthInput.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authorizationSlice} from "../../../store/reducers/AuthorizationSlice";
import {IRegistrationData} from "../../../store/stateTypes/IAuthorization";
import {useForm} from "react-hook-form";
import {highlightedText} from "../registration/highlightedTextFunc";
import {checkLogin, checkPassword, ErrorMessageTooltip} from "../validationLogic";
import IconCheck from "../../../assets/img/icons/AuthIcons/IconCheck.svg";
import IconEye from "../../../assets/img/icons/AuthIcons/Eye.svg";
import IconEyeClosed from "../../../assets/img/icons/AuthIcons/EyeClosed.svg";
import React, {useRef} from "react";
interface IAuthInputProps {
    needValidate?: boolean;
    inputRegistrationData?: keyof IRegistrationData;
    inputNumber?: 'First' | 'Second';
    inputTypeProp?: string;
    placeholderValue?: string;
}


export const AuthInput = ({needValidate, inputNumber, inputRegistrationData, inputTypeProp, placeholderValue}:IAuthInputProps) => {
    const {isOnFocusFirstPlaceholder, isOnFocusSecondPlaceholder, inputType, registrationData, registrationStep} = useAppSelector(state => state.authorizationReducer);
    const {setOnFocusPlaceholder, setInputType, setRegistrationData} = authorizationSlice.actions;
    const dispatch = useAppDispatch();

    const validationRules = {
        ...(needValidate && {
            required: true,
            validate: {
                ...(inputRegistrationData === 'login' && { checkLogin }),
                ...(inputRegistrationData === 'password' && { checkPassword }),
                // Добавьте другие условия, если необходимо
            },
        }),
    };

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid },
        getValues,
    } = useForm<IRegistrationData>({
        mode: 'onChange'
    })

    return (
        <>
            <div className={styles.wrapperInput}>
            <p className={(isOnFocusFirstPlaceholder || registrationData[inputRegistrationData]) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>{placeholderValue}</p>
            <input className={(needValidate) ? (errors.login?.message) ? styles.inputWrong  : styles.inputValid : styles.loginInput} type={inputType && inputTypeProp}
                   onFocus={() => dispatch(setOnFocusPlaceholder(inputNumber))}
                   {...register(inputRegistrationData, {
                       ...validationRules,
                       onBlur: () => dispatch(setOnFocusPlaceholder(inputNumber)),
                       onChange: (e) => {
                           dispatch(setRegistrationData({ type: inputRegistrationData, value: e.target.value }));
                       },
                   })}/>

                {(registrationData.password) ? <div className={styles.wrapperIcon}>
                    {(errors.hasOwnProperty('password')) ? null : <IconCheck/>}
                    {(inputType === 'password') ? <IconEye onClick={() => dispatch(setInputType('text'))}/>
                        : <IconEyeClosed onClick={() => dispatch(setInputType('password'))}/>}
                </div> : null}

                <p className={styles.inputTooltip}>{(errors.login?.message)
                    ? highlightedText(inputRegistrationData,errors.login.message)
                    : ErrorMessageTooltip[inputRegistrationData]}</p>
            </div>
        </>
    );
};