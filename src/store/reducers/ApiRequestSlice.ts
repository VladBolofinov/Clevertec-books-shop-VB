import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import IApiRequest from "../stateTypes/IApiRequest";
import {useHttp} from "../../components/hooks/http.hook";

const initialState: IApiRequest = {
    allData: [],
    filteredData: [],
    currentBookData: [],
    slicedData: [],
    searchQueryData:[],
    sliceValue: 12,
    jwt: '',
    error: '',
    isLoadingToken: false,
    isLoadingCategories: false,
    isLoadingBook: false,
    categories: [],
    searchInputValue: '',
    isActiveBtnSlice: false
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
            if (action.payload === 'Все') {
                state.filteredData = state.allData;
            } else {
                state.filteredData = state.allData.filter((book:any) => {
                    return book.categories[0] === action.payload;
                });
            }
            state.sliceValue = 12;
        },
        onLoadMoreBooks(state) {
            if (state.searchInputValue) {
                let intermediaValue = (state.searchQueryData.length - state.sliceValue >= 12) ? 12 : state.searchQueryData.length - state.sliceValue;
                state.sliceValue = state.sliceValue + intermediaValue;
                state.slicedData = state.searchQueryData.slice(0, state.sliceValue);
                state.isActiveBtnSlice = ((state.searchQueryData.length - state.slicedData.length) > 0);
            } else {
                let intermediaValue = (state.filteredData.length - state.sliceValue >= 12) ? 12 : state.filteredData.length - state.sliceValue;
                state.sliceValue = state.sliceValue + intermediaValue;
                state.slicedData = state.filteredData.slice(0, state.sliceValue);
                state.isActiveBtnSlice = ((state.filteredData.length - state.slicedData.length) > 0);
            }
        },
        sliceData(state) {
            if (state.filteredData.length > 12) {
                state.slicedData = state.filteredData.slice(0, state.sliceValue);
                state.isActiveBtnSlice = ((state.filteredData.length - state.slicedData.length) > 0);
            } else {
                state.slicedData = state.filteredData;
            }
        },
        searchQuery(state) {
            state.searchQueryData = state.filteredData.filter((item:any) => item.title.toLowerCase().includes(state.searchInputValue.toLowerCase()));
            if (state.searchQueryData.length > 12) {
                state.slicedData = state.searchQueryData.slice(0, state.sliceValue);
                state.isActiveBtnSlice = ((state.searchQueryData.length - state.slicedData.length) > 0);
            } else {
                state.slicedData = state.searchQueryData;
                state.isActiveBtnSlice = false;
            }
        },
        setSearchInputValue(state, action: PayloadAction<string>) {
            state.searchInputValue = action.payload;
            if (!state.searchInputValue) {
                state.sliceValue = 12;
            }
        }
    },
    extraReducers:
        (builder) => {
        builder.addCase(fetchToken.pending, (state) => {state.isLoadingToken = true;})
               .addCase(fetchToken.fulfilled, (state,action:PayloadAction<string>) => {
                   state.isLoadingToken = false;
                   state.error = '';
                   state.jwt = action.payload;
               })
               .addCase(fetchToken.rejected, (state) => {
                   state.isLoadingToken = false;
                   state.error = 'something was wrong!';
               })
               .addCase(fetchBooksData.pending, (state) => {state.isLoadingBook = true;})
               .addCase(fetchBooksData.fulfilled, (state,action: PayloadAction<any>) => {//поменяй тип(типизировать приходящие объекты с апишки)
                   state.isLoadingBook = false;
                   state.error = '';
                   state.allData = action.payload;
               })
               .addCase(fetchBooksData.rejected, (state) => {
                   state.isLoadingBook = false;
                   state.error = 'something was wrong!';
               })
               .addCase(fetchBookByID.pending, (state) => {state.isLoadingBook = true;})
               .addCase(fetchBookByID.fulfilled, (state,action: PayloadAction<object>) => {
                   state.isLoadingBook = false;
                   state.error = '';
                   state.currentBookData = action.payload;
               })
               .addCase(fetchBookByID.rejected, (state) => {
                   state.isLoadingBook = false;
                   state.error = 'something was wrong!';
               })
                .addCase(fetchCategories.pending, (state) => {state.isLoadingCategories = true;})
                .addCase(fetchCategories.fulfilled, (state,action: PayloadAction<object>) => {
                    state.isLoadingCategories = false;
                    state.error = '';
                    state.categories = action.payload;
                })
                .addCase(fetchCategories.rejected, (state) => {
                    state.isLoadingCategories = false;
                    state.error = 'something was wrong!';
                })
               .addDefaultCase(() => {})
    }
})

const {reducer} = apiRequestSlice;
export default reducer;

