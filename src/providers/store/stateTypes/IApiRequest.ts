export default interface IApiRequest {
    data: any;
    jwt: string;
    error: string;
    isLoading: boolean;
}