export default interface IApiRequest {
    data: any;
    bookData: any;
    jwt: string;
    error: string;
    isLoading: boolean;
    categories: any;
}

// поменяй все типы any на так как должно быть