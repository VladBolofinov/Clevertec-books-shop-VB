import axios from "axios";
export const useHttp = () => {
    const getToken = async (username : string = 'admin', password: string = '123') => {
        try {
            const response = await axios({
                method: 'post',
                url: 'https://bookdatabasevb.onrender.com/login',
                data: {
                    "username": username,
                    "password": password
                }
            })
            //напиши проверку на успех запроса
            //console.log(response.status);
            return response.data.token;
        } catch (e) {
            //console.log(e.response);
            return e.response.status;
        }
    }


    const registerNewUser = async (username : string, password: string) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'https://bookdatabasevb.onrender.com/register',
                data: {
                    username,
                    password
                }
            })
            console.log(response);
            return response.status;
        } catch (e) {
            throw e;
        }
    }
    const fetchBooksData = async (token:string) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://bookdatabasevb.onrender.com/books',
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
                url: `https://bookdatabasevb.onrender.com/books/${idNum}`,
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

    const fetchLogIn = async (username : string = 'admin', password: string = '123') => {
        try {
            const response = await axios({
                method: 'post',
                url: 'https://bookdatabasevb.onrender.com/login',
                data: {
                    "username": username,
                    "password": password
                }
            })
            return response.status;
        } catch (e) {
            return e.response.status;
        }
    }

    return {
        getToken,
        fetchBooksData,
        fetchBookByID,
        fetchCategories,
        registerNewUser,
        fetchLogIn
    }
}