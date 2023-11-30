export default interface IApiRequest {
    allData: any;
    filteredData: any;
    currentBookData: any;
    slicedData: any;
    sliceValue: number;
    jwt: string;
    error: string;
    isLoadingToken: boolean;
    isLoadingCategories: boolean;
    isLoadingBook: boolean;
    categories: any;
}

// поменяй все типы any на так как должно быть