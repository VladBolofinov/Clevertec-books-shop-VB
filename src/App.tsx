import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Link, Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {RulesPageAsync} from "./pages/RulesPage/RulesPage.async";
import {ContractOfferPageAsync} from "./pages/ContractOfferPage/ContractOfferPage.async";
import AppRouter from "./providers/router/AppRouter";
const App = () => {
    return (
        <div className='app'>
            <Link to={'/'}>На главную</Link>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}
export default App;