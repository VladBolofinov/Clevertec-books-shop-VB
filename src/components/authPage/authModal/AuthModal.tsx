import React from 'react';
import styles from './AuthModal.module.scss';
import {MyButton} from "../../sharedComponents/MyButton/MyButton";
import {useAppSelector} from "../../hooks/redux";

interface IAuthModalProps {
    headerText?: string;
    descrText?: string;
    onClick?: () => void;
}
export const AuthModal = ({headerText, descrText, onClick}:  IAuthModalProps) => {
    const {isLoadingRegReq} = useAppSelector(state => state.authorizationReducer);
    return (
        <div className={(isLoadingRegReq) ? styles.modalLoading : styles.modal}>
            <p className={styles.headerText}>{headerText}</p>
            <p className={styles.descrText}>{descrText}</p>
            <MyButton content={'Повторить'} size={'btnLg'} onClick={() => onClick()}/>
        </div>
    );
};