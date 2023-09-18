import React from 'react';
import IconStar from "../../assets/img/icons/IconStar.svg";
import styles from './MyStarReview.module.scss';

interface StarsProps {
    score?: number,
    width?: string,
}
//потом перепиши логику рендера заливки в звездах чтобы более кратко было
const MyStarReview = ({score,width}:StarsProps) => {
    return (
        <div style={{width}} className={styles.myStarWrapper}>
            <IconStar fill={(score >= 1) ? '#FFBC1F' : 'white'}/>
            <IconStar fill={(score >= 2) ? '#FFBC1F' : 'white'}/>
            <IconStar fill={(score >= 3) ? '#FFBC1F' : 'white'}/>
            <IconStar fill={(score >= 4) ? '#FFBC1F' : 'white'}/>
            <IconStar fill={(score >= 5) ? '#FFBC1F' : 'white'}/>
        </div>
    );
};

export default MyStarReview;