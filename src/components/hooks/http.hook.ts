import axios from "axios";
export const useHttp = () => {
    const getToken = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'https://bookdatabasevb.onrender.com/login',   //http://localhost:8000
                data: {
                    "username": "admin",
                    "password": "123"
                }
            })
            //напиши проверку на успех запроса
            return response.data.token;
        } catch (e) {
            throw e;
        }
    }

    const fetchBooksData = async (token:string) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://bookdatabasevb.onrender.com/books',  //http://localhost:8000
                headers: {
                    'Authorization': `${token}`
                }
            })
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const fetchBookByID = async (idNum:number, token:string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `https://bookdatabasevb.onrender.com/books/${idNum}`,  //http://localhost:8000
                headers: {
                    'Authorization': `${token}`
                }
            })
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const fetchCategories = async (token:string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `https://bookdatabasevb.onrender.com/categories`,
                headers: {
                    'Authorization': `${token}`
                }
            })
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    return {
        getToken,
        fetchBooksData,
        fetchBookByID,
        fetchCategories
    }
}