import '../../styles/index.scss';
import {Header} from "../header/Header";
import {Footer} from "../footer/Footer";
import {useAppSelector} from "../hooks/redux";
import React, {useEffect} from "react";
import {ModalWrongData} from "../modals/modalWrongData/ModalWrongData";
import {Menu} from "../menu/Menu";
import {Outlet, useLocation} from "react-router-dom";
const AppRouter = () => {
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
                <Outlet/>
            </div>
            <Footer/>
        </div>
    )
}
export default AppRouter;