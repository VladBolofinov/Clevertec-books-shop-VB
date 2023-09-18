import styles from './FilterPanel.module.scss';
import IconSearch from '../../assets/img/icons/IconSearch.svg';
import IconFilter from '../../assets/img/icons/filterIcon.svg';
import IconMenu from '../../assets/img/icons/IconMenu.svg';
import IconView from '../../assets/img/icons/IconView.svg';
import {MyButton} from "../../shared/MyButton/MyButton";
import {FC} from "react";

interface IFilterPanel {
    changeDirection: () => void;
}
export const  FilterPanel:FC<IFilterPanel> = ({changeDirection}) => {
    //button props tips
    const buttonProps = {
        width: '148px',
        svgIcon: <IconFilter/>,
        text: 'По рейтингу',
        margin: '0 0 0 367px',
        height: '38px',
        background: 'white',
        fontWeight: '400',
        fontSize: '14px',
        color: '#A7A7A7',
    }
    return (
        <div className={styles.panelWrapper}>
            <div className={styles.inputWrapper}>
                <IconSearch style={{position:'absolute', zIndex:'2', margin: '10px 0 0 10px'}}/>
                <input type="text" placeholder="Поиск книги или автора..."/>
            </div>
                <MyButton width={'55px'} height={'45px'} margin={'0 0 0 490px'} {...buttonProps}></MyButton>
            <div className={styles.btnWrapper}>
                <MyButton width={'38px'} height={'38px'} svgIcon={<IconMenu/>} background={'white'}/>
                <MyButton onClick={()=>changeDirection()} width={'38px'} height={'38px'} svgIcon={<IconView/>} background={'white'}/>
            </div>
        </div>
    )
}