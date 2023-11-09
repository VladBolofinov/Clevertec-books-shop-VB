import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import IApiRequest from "../stateTypes/IApiRequest";
import {useHttp} from "../../components/hooks/http.hook";

const initialState: IApiRequest = {
    allData: [],
    filteredData: [],
    currentBookData: [],
    jwt: '',
    error: '',
    isLoading: false,
    categories: []
}

export const fetchToken = createAsyncThunk(
    'apiRequest/fetchToken',
    () => {
        const {getToken} = useHttp();
        return getToken();
    }
)
export const fetchBooksData = createAsyncThunk(
    'apiRequest/fetchBooksData',
    (token: string) => {
        const {fetchBooksData} = useHttp();
        return fetchBooksData(token);
    }
)
export const fetchBookByID = createAsyncThunk(
    'apiRequest/fetchBookByID',
    ({ idNum, token }: { idNum: number; token: string }) => {
        const {fetchBookByID} = useHttp();
        return fetchBookByID(idNum, token);
    }
)

export const fetchCategories = createAsyncThunk(
    'apiRequest/fetchCategories',
    (token:string) => {
        const {fetchCategories} = useHttp();
        return fetchCategories(token);
    }
)

export const apiRequestSlice = createSlice({
    name: 'apiRequest',
    initialState,
    reducers: {
        filterByCategory(state, action: PayloadAction<string>) {
            state.filteredData = state.allData.filter((book:any) => {
                    return book.categories[0] === action.payload;
                });
        }
    },
    extraReducers:
        (builder) => {
        builder.addCase(fetchToken.pending, (state) => {state.isLoading = true;})
               .addCase(fetchToken.fulfilled, (state,action:PayloadAction<string>) => {
                   state.isLoading = false;
                   state.error = '';
                   state.jwt = action.payload;
               })
               .addCase(fetchToken.rejected, (state) => {
                   state.isLoading = false;
                   state.error = 'something was wrong!';
               })
               .addCase(fetchBooksData.pending, (state) => {state.isLoading = true;})
               .addCase(fetchBooksData.fulfilled, (state,action: PayloadAction<any>) => {//поменяй тип(типизировать приходящие объекты с апишки)
                   state.isLoading = false;
                   state.error = '';
                   state.allData = action.payload;
               })
               .addCase(fetchBooksData.rejected, (state) => {
                   state.isLoading = false;
                   state.error = 'something was wrong!';
               })
               .addCase(fetchBookByID.pending, (state) => {state.isLoading = true;})
               .addCase(fetchBookByID.fulfilled, (state,action: PayloadAction<object>) => {
                   state.isLoading = false;
                   state.error = '';
                   state.currentBookData = action.payload;
               })
               .addCase(fetchBookByID.rejected, (state) => {
                   state.isLoading = false;
                   state.error = 'something was wrong!';
               })
                .addCase(fetchCategories.pending, (state) => {state.isLoading = true;})
                .addCase(fetchCategories.fulfilled, (state,action: PayloadAction<object>) => {
                    state.isLoading = false;
                    state.error = '';
                    state.categories = action.payload;
                })
                .addCase(fetchCategories.rejected, (state) => {
                    state.isLoading = false;
                    state.error = 'something was wrong!';
                })
               .addDefaultCase(() => {})
    }
})

const {reducer} = apiRequestSlice;
export default reducer;

