import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IAuthorization, IRegistrationData} from "../stateTypes/IAuthorization";
import {useHttp} from "../../components/hooks/http.hook";

const initialState: IAuthorization = {
    isOnFocusFirstPlaceholder: false,
    isOnFocusSecondPlaceholder: false,
    inputLoginValue: '',
    inputPasswordValue: '',
    inputType: 'password',
    isLoadingRegReq: false,
    error: '',
    registrationSuccess: false,
    authSuccess: false,
    requestStatus: 0,
    registrationData: {
        login: '',
        password: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        email: ''
    },
    registrationStep: 1,
}

export const registerNewUser = createAsyncThunk(
    'apiRequest/fetchBooksData',
    ({username, password}:{username:string, password: string}) => {
        const {registerNewUser} = useHttp();
        return registerNewUser(username,password);
    }
)

export const fetchLogIn = createAsyncThunk(
    'apiRequest/fetchLogIn',
    ({username, password}:{username:string, password: string}) => {
        const {fetchLogIn} = useHttp();
        return fetchLogIn(username, password);
    }
)

export const authorizationSlice = createSlice({
    name: 'authorization',
    initialState,
    reducers: {
        setOnFocusPlaceholder(state, action: PayloadAction<string>) {
            if (action.payload === 'First') {
                state.isOnFocusFirstPlaceholder = !state.isOnFocusFirstPlaceholder;
            } else if (action.payload === 'Second') {
                state.isOnFocusSecondPlaceholder = !state.isOnFocusSecondPlaceholder;
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
        },
        repeatLogIn(state) {
            state.error = '';
            state.inputLoginValue = '';
            state.inputPasswordValue = '';
        },
        setRegistrationData(state, action: PayloadAction<{type: keyof IRegistrationData, value: string}>) {
            state.registrationData[action.payload.type] = action.payload.value;
        },
        setNextStepRegistration(state) {
            state.registrationStep = state.registrationStep + 1;
        }
    },
    extraReducers:
        (builder) => {
            builder.addCase(registerNewUser.pending, (state) => {state.isLoadingRegReq = true;})
                .addCase(registerNewUser.fulfilled, (state) => {
                    state.isLoadingRegReq = false;
                    state.registrationSuccess = true;
                    state.error = '';
                })
                .addCase(registerNewUser.rejected, (state) => {
                    state.isLoadingRegReq = false;
                    state.error = 'something was wrong!';
                })
                .addCase(fetchLogIn.pending, (state) => {state.isLoadingRegReq = true;})
                .addCase(fetchLogIn.fulfilled, (state, action: PayloadAction<number>) => {
                    state.isLoadingRegReq = false;
                    state.error = '';
                    if (action.payload > 199 && action.payload < 300) {
                        state.authSuccess = true;
                    } else {
                        state.authSuccess = false;
                    }
                    state.requestStatus = action.payload;
                })
                .addCase(fetchLogIn.rejected, (state) => {
                    state.isLoadingRegReq = false;
                    state.error = 'something was wrong!';
                })
                .addDefaultCase(() => {})
}})

export default authorizationSlice.reducer;