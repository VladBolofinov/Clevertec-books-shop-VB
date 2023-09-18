import React, {ReactNode} from 'react';
import styles from './MyButton.module.scss';

interface ButtonProps {
    width?: string;
    svgIcon?: React.ReactNode;
    text?: string;
    margin?: string;
    height?: string;
    background?: string;
    fontWeight?: string;
    fontSize?: string;
    color?: string;
    onClick?: () => void;
}

export const MyButton = ({ width, svgIcon, text, margin, height, background, fontWeight, fontSize, color, onClick }: ButtonProps) => {
    return (
        <button onClick={onClick} style={{ width, margin, height, background, fontWeight, fontSize, color }} className={styles.myButton}>
            {svgIcon}
            {text}
        </button>
    );
};
