import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import IBookState from "../stateTypes/IBookState";

const initialState: IBookState = {
    isLoading: false,
    error: '',
    isOpenModal: false,
    isActiveDropDown: true,
    isActiveInputBtn: false,
    isBookRow: false,
    isBookColumn: true,
}

export const bookSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<boolean>) {
            state.isOpenModal = action.payload;
        },
        openDropDownList(state, action: PayloadAction<boolean>) {
            state.isActiveDropDown = action.payload;
        },
        openInputBtn(state, action: PayloadAction<boolean>) {
            state.isActiveInputBtn = action.payload;
        },
        changeDirection(state, action: PayloadAction<boolean>) {
            if (!action.payload) {
                state.isBookRow = !state.isBookRow;
                state.isBookColumn = !state.isBookColumn
            }
        }
    }
})

export default bookSlice.reducer;
