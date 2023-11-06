import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IModalState from "../stateTypes/IModalState";

const initialState: IModalState = {
    isOpenModalWrongData: true
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalWrongData(state, action: PayloadAction<boolean>) {
            state.isOpenModalWrongData = action.payload;
        }
    }
})

export default modalSlice.reducer;