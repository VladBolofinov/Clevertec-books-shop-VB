import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IApiRequest from "../stateTypes/IApiRequest";

const initialState: IApiRequest = {
    data: [],
    jwt: '',
    isLoading: false,
    error: ''
}

export const apiRequestSlice = createSlice({
    name: 'apiRequest',
    initialState,
    reducers: {
        dataFetching(state) {
            state.isLoading = true;
        },
        dataFetchingSuccess(state, action: PayloadAction<IApiRequest>) {
            state.isLoading = false;
            state.error = '';
            state.data = action.payload;
        },
        tokenFetchingSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = '';
            state.jwt = action.payload;
        },
        dataFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default apiRequestSlice.reducer;