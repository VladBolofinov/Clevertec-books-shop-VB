import React from 'react';
import styles from "../authorization/Authorization.module.scss";
import IconEye from "../../../assets/img/icons/AuthIcons/Eye.svg";
import IconEyeClosed from "../../../assets/img/icons/AuthIcons/EyeClosed.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authorizationSlice} from "../../../store/reducers/AuthorizationSlice";

interface IAuthInputProps {
    needValidate?: boolean;
    inputPlaceholder?: string;
}
export const AuthInput = ({needValidate, inputPlaceholder}:IAuthInputProps) => {
    const { inputPasswordValue, inputType,
        requestStatus,authSuccess, isOnFocusSecondPlaceholder} = useAppSelector(state => state.authorizationReducer);
    const {setOnFocusPlaceholder, setInputPasswordValue, setInputType} = authorizationSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className={styles.wrapperInput}>
            <p className={(isOnFocusSecondPlaceholder || inputPasswordValue) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>{inputPlaceholder}</p>
            <input className={(authSuccess) ? styles.passwordInput : (requestStatus === 0) ? styles.passwordInput : styles.passwordInputWrong} type={inputType}
                   onFocus={() => dispatch(setOnFocusPlaceholder('Second'))}
                   onBlur={() => dispatch(setOnFocusPlaceholder('Second'))}
                   onChange={(e) => dispatch(setInputPasswordValue(e.target.value))}/>
            {(inputPasswordValue) ? <div className={styles.wrapperIcon}>
                {(inputType === 'password') ? <IconEye onClick={() => dispatch(setInputType('text'))}/>
                    : <IconEyeClosed onClick={() => dispatch(setInputType('password'))}/>}
            </div> : null}
        </div>
    );
};