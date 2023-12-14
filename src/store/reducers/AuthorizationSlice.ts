import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IAuthorization from "../stateTypes/IAuthorization";

const initialState: IAuthorization = {
    isOnFocusLoginPlaceholder: false,
    isOnFocusPasswordPlaceholder: false,
    inputLoginValue: '',
    inputPasswordValue: '',
    inputType: 'password'
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
        },
        setInputLoginValue(state, action: PayloadAction<string>) {
            state.inputLoginValue = action.payload;
        },
        setInputPasswordValue(state, action: PayloadAction<string>) {
            state.inputPasswordValue = action.payload;
        },
        setInputType(state, action: PayloadAction<'text' | 'password'>) {
            state.inputType = action.payload;
        }
    }
})

export default authorizationSlice.reducer;