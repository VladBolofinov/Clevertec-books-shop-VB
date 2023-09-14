import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {ContractOfferPageAsync} from "../../pages/ContractOfferPage/ContractOfferPage.async";
import {RulesPageAsync} from "../../pages/RulesPage/RulesPage.async";
import {MainPageAsync} from "../../pages/MainPage/MainPage.async";
import {routeConfig} from "../../shared/config/routeConfig/routeConfig";

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