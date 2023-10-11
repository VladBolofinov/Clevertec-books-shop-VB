import {IUser} from "../stateTypes/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    isOpenModal: boolean;
    isActiveDropDown: boolean;
    isActiveInputBtn: boolean;
    isBookRow: boolean;
    isBookColumn: boolean;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    isOpenModal: false,
    isActiveDropDown: true,
    isActiveInputBtn: false,
    isBookRow: false,
    isBookColumn: true,
}

export const userSlice = createSlice({
    name: 'user',
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

export default userSlice.reducer;