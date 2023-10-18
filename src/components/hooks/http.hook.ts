import axios from "axios";
export const useHttp = () => {
    const getToken = async () => {
        try {
            const response = await axios({
                method: 'post',
                url: 'https://library-cleverland-2jfze.ondigitalocean.app/api/auth/local',
                data: {
                    'identifier': 'vladbolofinov',
                    'password': 'qwerty123'
                }
            })
            //напиши проверку на успех запроса
            return response.data.jwt;
        } catch (e) {
            throw e;
        }
    }

    const fetchBooksData = async (token:string) => {
        try {
            const response = await axios({
                method: 'get',
                url: 'https://library-cleverland-2jfze.ondigitalocean.app/api/books',
                headers: {
                    'Authorization': `Bearer ${token}`
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
                url: `https://library-cleverland-2jfze.ondigitalocean.app/api/books/${idNum}`,
                headers: {
                    'Authorization': `Bearer ${token}`
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