import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IAuthorization from "../stateTypes/IAuthorization";

const initialState: IAuthorization = {
    isOnFocusLoginPlaceholder: false,
    isOnFocusPasswordPlaceholder: false
}

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setOnFocusPlaceholder(state, action: PayloadAction<string>) {
            if (action.payload === 'Логин') {
                state.isOnFocusLoginPlaceholder = !state.isOnFocusLoginPlaceholder;
            } else if (action.payload === 'Пароль') {
                state.isOnFocusPasswordPlaceholder = !state.isOnFocusPasswordPlaceholder;
            }
        }
    }
})

export default authorizationSlice.reducer;