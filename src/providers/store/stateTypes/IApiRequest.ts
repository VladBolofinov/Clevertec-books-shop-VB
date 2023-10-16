export default interface IApiRequest {
    data: any; //поменяй потом на тип
    jwt: string;
    isLoading: boolean;
    error: string;
}