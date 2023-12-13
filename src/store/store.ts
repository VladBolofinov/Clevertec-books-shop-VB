import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/BookSlice';
import modalReducer from './reducers/ModalSlice';
import apiRequestReducer from './reducers/ApiRequestSlice';
import authorizationReducer from './reducers/AuthorizationSlice';
// измени названия редьюсеров так как происходит экспорт
const rootReducer = combineReducers({
    userReducer,
    apiRequestReducer,
    modalReducer,
    authorizationReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];