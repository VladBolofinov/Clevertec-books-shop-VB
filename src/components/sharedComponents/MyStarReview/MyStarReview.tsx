import IconStar from "../../../assets/img/icons/IconStar.svg";
import styles from './MyStarReview.module.scss';
import {memo} from "react";

interface IStarsProps {
    score?: number,
    width?: string,
}
const MyStarReview = memo(({ score, width }: IStarsProps) => {
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <IconStar key={i} fill={(score >= i) ? '#FFBC1F' : 'white'} />
            );
        }
        return stars;
    };

    return (
        <div style={{ width }} className={styles.myStarWrapper}>
            {renderStars()}
        </div>
    );
});

export default MyStarReview;