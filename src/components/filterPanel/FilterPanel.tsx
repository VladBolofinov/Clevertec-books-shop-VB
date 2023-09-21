import styles from './FilterPanel.module.scss';
import IconSearch from '../../assets/img/icons/IconSearch.svg';
import IconFilter from '../../assets/img/icons/filterIcon.svg';
import IconMenu from '../../assets/img/icons/IconMenu.svg';
import IconView from '../../assets/img/icons/IconView.svg';
import {FC} from "react";

interface IFilterPanel {
    changeDirectionRow: () => void;
    changeDirectionColumn: () => void;
}
export const  FilterPanel:FC<IFilterPanel> = ({changeDirectionRow,changeDirectionColumn}) => {

    return (
        <div className={styles.panelWrapper}>
            <div className={styles.inputWrapper}>
                <div className={styles.wrapperInputIcon}><IconSearch/></div>
                <input type="text" placeholder="Поиск книги или автора..."/>
            </div>
                <button className={styles.btnFilter}><IconFilter/>По рейтингу</button>
                <button className={styles.btnInput}><IconSearch/></button>
                <button className={styles.btnFilterSm}><IconFilter/></button>
            <div className={styles.btnWrapper}>
                <button className={styles.btnIcon} onClick={changeDirectionColumn}><IconMenu/></button>
                <button className={styles.btnIcon} onClick={changeDirectionRow}><IconView/></button>
            </div>
        </div>
    )
}