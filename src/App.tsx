import './styles/index.scss';
import {Header} from "./components/header/Header";
import {Footer} from "./components/footer/Footer";
import {Menu} from "./components/menu/Menu";
import {BooksList} from "./components/booksList/BooksList";
const App = () => {
    return (
        <div className='app'>
            <Header/>
            <div className='wrapper-middle-section'>
                <Menu/>
                <BooksList/>
            </div>
            <Footer/>
        </div>
    )
}
export default App;