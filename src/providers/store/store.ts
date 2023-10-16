import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from './reducers/BookSlice';
import apiRequestReducer from './reducers/ApiRequestSlice';
const rootReducer = combineReducers({
    userReducer,
    apiRequestReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];