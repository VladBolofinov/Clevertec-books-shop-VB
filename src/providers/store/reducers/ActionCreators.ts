import {AppDispatch} from "../store";
import axios from "axios";
import {apiRequestSlice} from "./ApiRequestSlice";

    export const fetchToken = () => async (dispatch: AppDispatch) => {
        try {
            dispatch(apiRequestSlice.actions.dataFetching());
            const response = await axios({
                method: 'post',
                url: 'https://library-cleverland-2jfze.ondigitalocean.app/api/auth/local',
                data: {
                    'identifier': 'vladbolofinov',
                    'password': 'qwerty123'
                }
            })
            dispatch(apiRequestSlice.actions.tokenFetchingSuccess(response.data.jwt));
            return response.data.jwt;
        } catch (e) {
            dispatch(apiRequestSlice.actions.dataFetchingError(e.message));
        }
    }

    export const fetchBooksData = (token:string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(apiRequestSlice.actions.dataFetching());
            const response = await axios({
                method: 'get',
                url: 'https://library-cleverland-2jfze.ondigitalocean.app/api/books',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            dispatch(apiRequestSlice.actions.dataFetchingSuccess(response.data));
            console.log(response.data);
        } catch (e) {
            dispatch(apiRequestSlice.actions.dataFetchingError(e.message));
        }
    }


