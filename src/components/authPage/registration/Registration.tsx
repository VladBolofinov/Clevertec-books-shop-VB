import {useForm, SubmitHandler} from "react-hook-form";
import styles from "./Registration.module.scss";
import {MyButton} from "../../sharedComponents/MyButton/MyButton";
import {authorizationSlice} from "../../../store/reducers/AuthorizationSlice";
import {NavLink} from "react-router-dom";
import IconArrowRight from "../../../assets/img/icons/AuthIcons/IconChevron.svg";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {AuthInput} from "../authInput/AuthInput";
import {IRegistrationData} from "../../../store/stateTypes/IAuthorization";
type Inputs = {
    login: string;
    password: string
}

export const Registration = () => {
    const {registrationStep} = useAppSelector(state => state.authorizationReducer);
    const {setNextStepRegistration} = authorizationSlice.actions;
    const dispatch = useAppDispatch();

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid }
    } = useForm<IRegistrationData>({
        mode: 'onChange'
    })
    console.log(errors);
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
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
                               inputTypeProp={'text'}
                               register={register}
                               errors={errors}/>
                    <AuthInput placeholderValue={'Пароль'}
                               inputRegistrationData={'password'}
                               needValidate={true}
                               inputNumber={'Second'}
                               inputTypeProp={'password'}
                               register={register}
                               errors={errors}/>
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