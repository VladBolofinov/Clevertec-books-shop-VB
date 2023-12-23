export interface IRegistrationData {
    login: string;
    password: string;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    email: string;
};
export interface IAuthorization {
    isOnFocusFirstPlaceholder: boolean;
    isOnFocusSecondPlaceholder: boolean;
    inputLoginValue: string;
    inputPasswordValue: string;
    inputType: 'text' | 'password';
    isLoadingRegReq: boolean;
    error: string;
    registrationSuccess: boolean;
    authSuccess: boolean;
    requestStatus: number;
    registrationData: IRegistrationData;
    registrationStep: number;
}