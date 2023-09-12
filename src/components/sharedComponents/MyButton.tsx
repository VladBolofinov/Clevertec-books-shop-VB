import React, {ReactNode} from 'react';
import styles from './MyButton.module.scss';

interface ButtonProps {
    width?: string;
    svgIcon?: React.ReactNode;
    text?: string;
    margin?: string;
    height?: string;
    backgroundColor?: string;
    fontWeight?: string;
    fontSize?: string;
    color?: string;
}

export const MyButton = ({ width, svgIcon, text, margin, height, backgroundColor, fontWeight, fontSize, color }: ButtonProps) => {
    return (
        <button style={{ width, margin, height, backgroundColor, fontWeight, fontSize, color }} className={styles.myButton}>
            {svgIcon}
            {text}
        </button>
    );
};
