import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IModalState from "../stateTypes/IModalState";

const initialState: IModalState = {
    isOpenModalWrongData: true,
    isActiveDropDownReviews: true,
    isActiveDropDownMenu: true
}

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openModalWrongData(state, action: PayloadAction<boolean>) {
            state.isOpenModalWrongData = action.payload;
        },
        setDropDownReviews(state, action: PayloadAction<boolean>) {
            state.isActiveDropDownReviews = action.payload;
        },
        setDropDownMenu(state, action: PayloadAction<boolean>) {
            state.isActiveDropDownMenu = action.payload;
        }
    }
})

export default modalSlice.reducer;