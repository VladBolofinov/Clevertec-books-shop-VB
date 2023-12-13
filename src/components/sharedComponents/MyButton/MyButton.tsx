import React from 'react';
import styles from './MyButton.module.scss';

interface IButtonProps {
    content?: string;
    width?: string;
    height?: string;
    margin?: string;
    size?: string;
    onClickFn?: () => void

}
export const MyButton = ({content, width, height, margin, size, onClickFn}:IButtonProps) => {
    return (
        <button style={{width, height, margin}}
                className={(size) ? styles[size] : styles.btnStyles}
                onClick={onClickFn}>{content}</button>
    );
};