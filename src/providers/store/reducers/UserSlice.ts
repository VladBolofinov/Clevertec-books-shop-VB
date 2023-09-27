import {IUser} from "../stateTypes/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
    isOpen: boolean;
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: '',
    isOpen: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        openModal(state, action: PayloadAction<boolean>) {
            state.isOpen = action.payload;
        }
    }
})

export default userSlice.reducer;