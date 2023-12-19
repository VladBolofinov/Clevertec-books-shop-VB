import React from 'react';
import {Outlet} from "react-router-dom";
import styles from "./AuthPage.module.scss";
import {useAppSelector} from "../hooks/redux";

const AuthPage = () => {
    const {isLoadingRegReq} = useAppSelector(state => state.authorizationReducer);
    return (
        <div className={styles.wrapper}>
            <h1 className={(isLoadingRegReq) ? styles.headerAuthLoading : styles.headerAuth}>Cleverland</h1>
            <Outlet/>
        </div>
    );
};

export default AuthPage;