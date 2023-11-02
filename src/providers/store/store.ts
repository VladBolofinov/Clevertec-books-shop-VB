import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/BookSlice';
import modalReducer from './reducers/ModalSlice';
import apiRequestReducer from './reducers/ApiRequestSlice';

const rootReducer = combineReducers({
    userReducer,
    apiRequestReducer,
    modalReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];