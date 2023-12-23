import React from 'react';
import styles from './MyButton.module.scss';

interface IButtonProps {
    content?: string;
    width?: string;
    height?: string;
    margin?: string;
    size?: string;
    onClick?: () => void;
    active?: boolean;
}
export const MyButton = ({content, width, height, margin, size, onClick, active}:IButtonProps) => {
    return (
        <button style={{width, height, margin}}
                className={(size) ? styles[size] : styles.btnStyles}
                onClick={onClick} disabled={(active) ? active : false}>{content}</button>
    );
};