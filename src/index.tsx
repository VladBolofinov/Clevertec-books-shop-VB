import {render} from "react-dom";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./providers/store/store";
import {Provider} from "react-redux";

const store = setupStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
)