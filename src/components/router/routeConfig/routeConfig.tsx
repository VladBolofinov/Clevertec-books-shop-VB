import {RouteProps} from "react-router-dom";
//import MainPage from "../../../pages/MainPage/MainPage";
import RulesPage from "../../pages/rulesPage/RulesPage";
import ContractOfferPage from "../../pages/contractOfferPage/ContractOfferPage";
import BookPage from "../../pages/bookPage/BookPage";

export enum AppRoutes {
    //MAIN ='main',
    RULES = 'rules',
    CONTRACT = 'contractOffer',
    BOOKID = 'bookPage',
}

export const RoutePath: Record<AppRoutes, string> = {
    //[AppRoutes.MAIN]: '/',
    [AppRoutes.RULES]: '/rules',
    [AppRoutes.CONTRACT]: '/contract_offer',
    [AppRoutes.BOOKID]: '/bookPage/'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    /*[AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },*/
    [AppRoutes.RULES]: {
        path: RoutePath.rules,
        element: <RulesPage/>
    },
    [AppRoutes.CONTRACT]: {
        path: RoutePath.contractOffer,
        element: <ContractOfferPage/>
    },
    [AppRoutes.BOOKID]: {
        path: `${RoutePath.bookPage}:id`,
        element: <BookPage/>
    }
}