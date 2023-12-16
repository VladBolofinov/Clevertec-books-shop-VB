export default interface IAuthorization {
    isOnFocusLoginPlaceholder: boolean;
    isOnFocusPasswordPlaceholder: boolean;
    inputLoginValue: string;
    inputPasswordValue: string;
    inputType: 'text' | 'password';
    isLoadingRegReq: boolean;
    error: string;
    registrationSuccess: boolean;
    authSuccess: boolean;
    requestStatus: number;
}