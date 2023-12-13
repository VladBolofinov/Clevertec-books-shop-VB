import React, {Suspense, useEffect} from 'react';
import { Route, Routes } from "react-router-dom";
//import {routeConfig} from "../../shared/config/routeConfig/routeConfig";
import RulesPage from "./components/pages/rulesPage/RulesPage";
import ContractOfferPage from "./components/pages/contractOfferPage/ContractOfferPage";
import BookPage from "./components/pages/bookPage/BookPage";
import {BooksListAsync} from "./components/booksList/BooksList.async";
import {MyLoader} from "./components/sharedComponents/MyLoader/MyLoader";
import AppRouter from "./components/router/AppRouter";
import {fetchCategories, fetchToken} from "./store/reducers/ApiRequestSlice";
import {useAppDispatch, useAppSelector} from "./components/hooks/redux";
import Authorization from "./components/authPage/authorization/Authorization";
import AuthPage from "./components/authPage/AuthPage";

const App = () => {
    const {categories,jwt} = useAppSelector(state => state.apiRequestReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
            if (jwt && !categories.length) {
                dispatch(fetchCategories(jwt));
            } else {
                dispatch(fetchToken())
            }
    },[jwt])
    return (
        <>
            <Suspense fallback={<MyLoader/>}>
                <Routes>
                    <Route path={'/main'} element={<AppRouter/>}>
                        <Route key={1} index element={<BooksListAsync/>}/>
                        <Route key={2} path={'rules'} element={<RulesPage/>}/>
                        <Route key={3} path={'contract_offer'} element={<ContractOfferPage/>}/>
                        <Route key={4} path={'book/:id'} element={<BookPage/>}/>
                        <Route key={5} path={':category'} element={<BooksListAsync/>}/>
                    </Route>
                    <Route path={'/authorization'} element={<AuthPage/>}>
                        <Route key={1} index element={<Authorization/>}/>
                    </Route>
                    {/*{Object.values(routeConfig).map(({element,path}) => (<Route key={path} path={path} element={element}/>))}*/}
                </Routes>
            </Suspense>
        </>
    );
};
//сделай route на страничку 404
export default App;