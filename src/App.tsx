import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import AppRouter from "./providers/router/AppRouter";
const App = () => {

    return (
        <div className='app'>
            <Header/>
            <AppRouter/>
            <Footer/>
        </div>
    )
}
export default App;