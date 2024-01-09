import styles from './AuthInput.module.scss';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {authorizationSlice} from "../../../store/reducers/AuthorizationSlice";
import {IRegistrationData} from "../../../store/stateTypes/IAuthorization";
import {DeepMap, FieldError, FieldValues, useForm, UseFormRegister} from "react-hook-form";
import {highlightedText} from "../registration/highlightedTextFunc";
import {checkLogin, checkPassword, ErrorMessageTooltip} from "../validationLogic";
import IconCheck from "../../../assets/img/icons/AuthIcons/IconCheck.svg";
import IconEye from "../../../assets/img/icons/AuthIcons/Eye.svg";
import IconEyeClosed from "../../../assets/img/icons/AuthIcons/EyeClosed.svg";
interface IAuthInputProps {
    needValidate?: boolean;
    inputRegistrationData?: keyof IRegistrationData;
    inputNumber?: 'First' | 'Second';
    inputTypeProp?: string;
    placeholderValue?: string;
    register?: UseFormRegister<IRegistrationData>;
    errors?: DeepMap<FieldValues, FieldError>;
}


export const AuthInput = ({needValidate, inputNumber, inputRegistrationData, inputTypeProp, placeholderValue, register, errors}:IAuthInputProps) => {
    const {isOnFocusFirstPlaceholder, isOnFocusSecondPlaceholder, inputType, registrationData} = useAppSelector(state => state.authorizationReducer);
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

    return (
            <div  className={styles.wrapperInput}>
            <p className={(((inputNumber === 'First') ? isOnFocusFirstPlaceholder : isOnFocusSecondPlaceholder) || registrationData[inputRegistrationData]) ? styles.onFocusPlaceholder : styles.notFocusPlaceholder}>{placeholderValue}</p>
            <input className={(needValidate) ? (errors.login?.message) ? styles.inputWrong  : styles.inputValid : styles.loginInput} type={inputTypeProp && inputType}
                   onFocus={() => dispatch(setOnFocusPlaceholder(inputNumber))}
                   {...register(inputRegistrationData, {
                       ...validationRules,
                       onBlur: () => dispatch(setOnFocusPlaceholder(inputNumber)),
                       onChange: (e) => {
                           //console.log(isValid);
                           dispatch(setRegistrationData({ type: inputRegistrationData, value: e.target.value }));
                       }
                   })}/>
                {(registrationData.password && inputRegistrationData === 'password')
                    ? <div className={styles.wrapperIcon}>
                        {(errors.hasOwnProperty('password'))
                            ? null
                            : <IconCheck/>}
                        {(inputType === 'password')
                            ? <IconEye onClick={() => dispatch(setInputType('text'))}/>
                            : <IconEyeClosed onClick={() => dispatch(setInputType('password'))}/>}
                        </div>
                    : null}
                <p className={styles.inputTooltip}>{(errors[inputRegistrationData]?.message)
                    ? highlightedText(inputRegistrationData,errors[inputRegistrationData].message)
                    : ErrorMessageTooltip[inputRegistrationData]}</p>
            </div>
    );
};