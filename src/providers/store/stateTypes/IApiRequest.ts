export default interface IApiRequest {
    data: any;
    bookData: any;
    jwt: string;
    error: string;
    isLoading: boolean;
}