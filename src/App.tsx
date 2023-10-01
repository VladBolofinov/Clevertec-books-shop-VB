import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import AppRouter from "./providers/router/AppRouter";
import {useAppDispatch, useAppSelector} from "./components/hooks/redux";
import {userSlice} from "./providers/store/reducers/UserSlice";
const App = () => {
    const {isOpen} = useAppSelector(state => state.userReducer);
    const {openModal} = userSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className='app' onClick={() => { if (isOpen) {
            dispatch(openModal(false));
        } }}>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}
export default App;