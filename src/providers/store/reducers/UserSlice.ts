import {IUser} from "../stateTypes/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    isOpenModal: boolean;
    isActiveMenu: boolean;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    isOpenModal: false,
    isActiveMenu: true,
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<boolean>) {
            state.isOpenModal = action.payload;
        },
        openMenu(state, action: PayloadAction<boolean>) {
            state.isActiveMenu = action.payload;
        }
    }
})

export default userSlice.reducer;