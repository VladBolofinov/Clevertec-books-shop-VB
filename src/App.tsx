

import React, {Suspense} from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
//import {routeConfig} from "../../shared/config/routeConfig/routeConfig";
import RulesPage from "./components/pages/rulesPage/RulesPage";
import ContractOfferPage from "./components/pages/contractOfferPage/ContractOfferPage";
import BookPage from "./components/pages/bookPage/BookPage";
import {BooksListAsync} from "./components/booksList/BooksList.async";
import {MyLoader} from "./components/sharedComponents/MyLoader/MyLoader";
import AppRouter from "./components/router/AppRouter";

const App = () => {
    console.log(useLocation().pathname);
    return (
        <>
            <Suspense fallback={<MyLoader/>}>
                <Routes>
                    <Route path={'/main'} element={<AppRouter/>}>
                        <Route key={1} index element={<BooksListAsync/>}/>
                        <Route key={2} path={'rules'} element={<RulesPage/>}/>
                        <Route key={3} path={'contract_offer'} element={<ContractOfferPage/>}/>
                        <Route key={4} path={'book/:id'} element={<BookPage/>}/>
                        <Route key={4} path={':category'} element={<BooksListAsync/>}/>
                    </Route>
                    {/*{Object.values(routeConfig).map(({element,path}) => (<Route key={path} path={path} element={element}/>))}*/}
                </Routes>
            </Suspense>
        </>
    );
};
//сделай route на страничку 404
export default App;