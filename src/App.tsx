import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import AppRouter from "./providers/router/AppRouter";
import {useAppSelector} from "./components/hooks/redux";
import {useAppDispatch} from "./components/hooks/redux";
import {useEffect} from "react";
import {fetchBooksData, fetchToken} from "./providers/store/reducers/ActionCreators";

const App = () => {
    const {isOpenModal} = useAppSelector(state => state.userReducer);
    const {isLoading} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchToken()).then((token) => {
            dispatch(fetchBooksData(token));
        });
    }, []);

    useEffect(() => {
        (isOpenModal) ? document.body.style.overflow = 'hidden' : document.body.style.overflow = null;
    }, [isOpenModal]);

    return (
        <div className='app'>
            {(isLoading)
                ?
                (<p>Sorry the data is pending!</p>)
                :
                (<>
                    <Header/>
                    <AppRouter/>
                    <Footer/>
                </>)
            }

        </div>
    )
}
export default App;