import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import AppRouter from "./providers/router/AppRouter";
import {useAppSelector} from "./components/hooks/redux";
import {useEffect} from "react";
const App = () => {
    const {isOpenModal} = useAppSelector(state => state.userReducer);

    useEffect(() => {
        (isOpenModal) ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
    }, [isOpenModal]);

    return (
        <div className='app'>
                <Header/>
                <AppRouter/>
                <Footer/>
        </div>
    )
}
export default App;