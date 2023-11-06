import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import AppRouter from "./components/router/AppRouter";
import {useAppSelector} from "./components/hooks/redux";
import React, {useEffect} from "react";
import {ModalWrongData} from "./components/modals/modalWrongData/ModalWrongData";
import {Menu} from "./components/menu/Menu";
import {useLocation} from "react-router-dom";
const App = () => {
    const {isOpenModal} = useAppSelector(state => state.userReducer);
    const {error} = useAppSelector(state => state.apiRequestReducer);
    const routes = ['/', '/rules', '/contract_offer'];
    useEffect(() => {
        (isOpenModal) ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
    }, [isOpenModal]);

    return (
        <div className='app'>
                {(error) ? <ModalWrongData/> : null}
                <Header/>
                <div className='wrapperMiddleSection'>
                    {(routes.includes(useLocation().pathname)) ? <Menu/> : null}
                    <AppRouter/>
                </div>
                <Footer/>
        </div>
    )
}
export default App;