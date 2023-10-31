import axios from "axios";
export const useHttp = () => {
    const getToken = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://localhost:8000/login',
                data: {
                    "username": "admin",
                    "password": "123"
                }
            })
            //напиши проверку на успех запроса
            console.log(response.data.token);
            return response.data.token;
        } catch (e) {
            throw e;
        }
    }

    const fetchBooksData = async (token:string) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'http://localhost:8000/books',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            console.log(response.data);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    const fetchBookByID = async (idNum:number, token:string) => {
        try {
            const response = await axios({
                method: 'get',
                url: `http://localhost:8000/books/${idNum}`,
                headers: {
                    'Authorization': `${token}`
                }
            })
            console.log(response);
            return response.data;
        } catch (e) {
            throw e;
        }
    }

    return {
        getToken,
        fetchBooksData,
        fetchBookByID
    }
}