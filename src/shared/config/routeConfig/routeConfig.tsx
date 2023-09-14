import {RouteProps} from "react-router-dom";
import MainPage from "../../../pages/MainPage/MainPage";
import RulesPage from "../../../pages/RulesPage/RulesPage";
import ContractOfferPage from "../../../pages/ContractOfferPage/ContractOfferPage";

export enum AppRoutes {
    MAIN ='main',
    RULES = 'rules',
    CONTRACT = 'contractOffer'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.RULES]: '/rules',
    [AppRoutes.CONTRACT]: '/contract_offer'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.RULES]: {
        path: RoutePath.rules,
        element: <RulesPage/>
    },
    [AppRoutes.CONTRACT]: {
        path: RoutePath.contractOffer,
        element: <ContractOfferPage/>
    }
}