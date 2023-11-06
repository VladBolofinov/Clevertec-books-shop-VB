import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
//import {routeConfig} from "../../shared/config/routeConfig/routeConfig";
import RulesPage from "../pages/rulesPage/RulesPage";
import ContractOfferPage from "../pages/contractOfferPage/ContractOfferPage";
import BookPage from "../pages/bookPage/BookPage";
import {BooksListAsync} from "../booksList/BooksList.async";
import {MyLoader} from "../sharedComponents/MyLoader/MyLoader";

const AppRouter = () => {
    return (
        <>
            <Suspense fallback={<MyLoader/>}>
                <Routes>
                    <Route key={1} path={'/'} element={<BooksListAsync/>}/>
                    <Route key={2} path={'/rules'} element={<RulesPage/>}/>
                    <Route key={3} path={'/contract_offer'} element={<ContractOfferPage/>}/>
                    <Route key={4} path={'/bookPage/:id'} element={<BookPage/>}/>
                    {/*{Object.values(routeConfig).map(({element,path}) => (<Route key={path} path={path} element={element}/>))}*/}
                </Routes>
            </Suspense>
        </>
    );
};

export default AppRouter;