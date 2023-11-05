import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import AppRouter from "./providers/router/AppRouter";
import {useAppSelector} from "./components/hooks/redux";
import React, {Suspense, useEffect} from "react";
import {ModalWrongData} from "./components/modals/modalWrongData/ModalWrongData";
import {NavLink, Outlet, Route, Routes} from "react-router-dom";
import {Menu} from "./components/menu/Menu";
import MainPage from "./pages/MainPage/MainPage";
import RulesPage from "./pages/RulesPage/RulesPage";
import ContractOfferPage from "./pages/ContractOfferPage/ContractOfferPage";
import BookPage from "./pages/BookPage/BookPage";

const App = () => {
    const {isOpenModal} = useAppSelector(state => state.userReducer);
    const {error} = useAppSelector(state => state.apiRequestReducer);

    useEffect(() => {
        (isOpenModal) ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
    }, [isOpenModal]);

    return (
        <div className='app'>
            <>
                {(error) ? <ModalWrongData/> : null}
                <Header/>
                <AppRouter/>
                <Footer/>
            </>
        </div>
    )
}
export default App;

