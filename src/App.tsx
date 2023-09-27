import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import AppRouter from "./providers/router/AppRouter";
import {useAppDispatch, useAppSelector} from "./components/hooks/redux";
import {userSlice} from "./providers/store/reducers/UserSlice";
const App = () => {
    const {increment} = userSlice.actions;
    const dispatch = useAppDispatch();
    const {error} = useAppSelector(state => state.userReducer);
    console.log(error);
    return (
        <div className='app'>
            <button onClick={() => dispatch(increment('okay'))}>qqqq{error}eeeee</button>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}
export default App;