import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "../../shared/config/routeConfig/routeConfig";
import MainPage from "../../pages/MainPage/MainPage";
import RulesPage from "../../pages/RulesPage/RulesPage";
import ContractOfferPage from "../../pages/ContractOfferPage/ContractOfferPage";
import BookPage from "../../pages/BookPage/BookPage";

const AppRouter = () => {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {Object.values(routeConfig).map(({element,path}) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}/>
                    ))}
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouter;