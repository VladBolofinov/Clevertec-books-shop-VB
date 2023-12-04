export default interface IApiRequest {
    allData: any;
    filteredData: any;
    currentBookData: any;
    slicedData: any;
    searchQueryData: any;
    sliceValue: number;
    jwt: string;
    error: string;
    isLoadingToken: boolean;
    isLoadingCategories: boolean;
    isLoadingBook: boolean;
    categories: any;
    searchInputValue: string;
    isActiveBtnSlice: boolean;
}

// поменяй все типы any на так как должно быть