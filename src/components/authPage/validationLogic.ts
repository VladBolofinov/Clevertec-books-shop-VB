export enum ErrorMessageTooltip {
    login = 'Используйте для логина латинский алфавит и цифры',
    password = 'Пароль не менее 8 символов, с заглавной буквой и цифрой',
    firstName = '',
    lastName = '',
    phoneNumber = '',
    email = ''
}
export const checkLogin = (value: string) => {
    const hasSpecificSymbols = /[^a-zA-Z0-9]/g.test(value);
    const hasNumbersOnly = /\d/.test(value);
    const hasAllParams = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]+$/.test(value);
    if (hasAllParams) {
        return true;
    } else if (hasSpecificSymbols && hasNumbersOnly) {
        return 'латинский алфавит';
    } else {
        return ErrorMessageTooltip.login;
    }
}
export const checkPassword = (value: string) => {
    const hasMinLength = /^.{8,}$/.test(value);
    const hasUppercaseChar = /[A-Z]/.test(value);
    const hasAllParams = /(?=.*[A-ZА-Яa-zа-я\d])(?=.*[A-ZА-Я]).{8,}/.test(value);
    const hasNumbersOnly = /\d/.test(value);
    if (hasAllParams) {
        return true;
    } else if (hasMinLength && hasNumbersOnly && !hasUppercaseChar) {
        return 'с заглавной буквой';
    } else if (hasNumbersOnly && !hasUppercaseChar && !hasMinLength) {
        return 'не менее 8 символов';
    } else {
        return ErrorMessageTooltip.password;
    }
}