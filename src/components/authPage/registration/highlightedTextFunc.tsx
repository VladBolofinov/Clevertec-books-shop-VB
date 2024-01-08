import React from "react";

export const highlightedText = (inputType: string, validateResult?: string) => {
    const redText = {color: "red"};
    if (!validateResult) {
        return null;
    }
    if (inputType === 'login') {
        if (validateResult === 'латинский алфавит') {
            return <p>Используйте для логина <span style={redText}>латинский алфавит</span> и цифры</p>
        } else {
            return <p style={redText}>Используйте для логина латинский алфавит и цифры</p>
        }
    } else if (inputType === 'password') {
        if (validateResult === 'с заглавной буквой') {
            return <p>Пароль не менее 8 символов, <span style={redText}>с заглавной буквой</span> и цифрой</p>
        } else if (validateResult === 'не менее 8 символов') {
            return <p><span style={redText}>Пароль не менее 8 символов,</span> с заглавной буквой и цифрой</p>
        } else {
            return <p style={redText}>Пароль не менее 8 символов, с заглавной буквой и цифрой</p>
        }
    }
}