export default interface IApiRequest {
    allData: any;
    filteredData: any;
    currentBookData: any;
    jwt: string;
    error: string;
    isLoading: boolean;
    categories: any;
}

// поменяй все типы any на так как должно быть