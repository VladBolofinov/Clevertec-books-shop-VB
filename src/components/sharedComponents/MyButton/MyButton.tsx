import React from 'react';
import styles from './MyButton.module.scss';

interface IButtonProps {
    content?: string;
    width?: string;
    height?: string;
    margin?: string;
    size?: string;
    onClick?: () => void

}
export const MyButton = ({content, width, height, margin, size, onClick}:IButtonProps) => {
    return (
        <button style={{width, height, margin}}
                className={(size) ? styles[size] : styles.btnStyles}
                onClick={onClick}>{content}</button>
    );
};