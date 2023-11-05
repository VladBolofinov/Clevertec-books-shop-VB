import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
//import {routeConfig} from "../../shared/config/routeConfig/routeConfig";
import RulesPage from "../../pages/RulesPage/RulesPage";
import ContractOfferPage from "../../pages/ContractOfferPage/ContractOfferPage";
import BookPage from "../../pages/BookPage/BookPage";
import {BooksListAsync} from "../../components/booksList/BooksList.async";

const AppRouter = () => {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
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