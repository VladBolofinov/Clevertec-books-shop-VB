import styles from './FilterPanel.module.scss';
import IconSearch from '../../assets/img/icons/IconSearch.svg';
import IconFilter from '../../assets/img/icons/filterIcon.svg';
import IconMenu from '../../assets/img/icons/IconMenu.svg';
import IconView from '../../assets/img/icons/IconView.svg';
import React, {FC} from "react";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {userSlice} from "../../providers/store/reducers/UserSlice";

interface IFilterPanel {
    btnBookRow: boolean;
    btnBookColumn: boolean;
    onChangeDirection: (arg?:boolean) => void;
}
export const  FilterPanel:FC<IFilterPanel> = ({btnBookRow,btnBookColumn,onChangeDirection}) => {
    const onActiveBtnStyles = (activeBtn: boolean) => {
        return (activeBtn) ? {background: 'linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%)'} : {background: 'white'}
    }
    const {isActiveInputBtn} = useAppSelector(state => state.userReducer);
    const {openInputBtn} = userSlice.actions;
    const dispatch = useAppDispatch();
    return (
        (isActiveInputBtn)
            ?
            (
                <div className={styles.panelWrapperSmVisible}>
                    <div className={styles.inputWrapperSmVisible}>
                        <div className={styles.wrapperInputIconSmVisible}><IconSearch/></div>
                        <span onClick={() => dispatch(openInputBtn(!isActiveInputBtn))}>X</span>
                        <input type="text" placeholder="Поиск книги или автора..."/>
                    </div>
                </div>
            ) : (
                <div className={styles.panelWrapper}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.wrapperInputIcon}><IconSearch/></div>
                        <input type="text" placeholder="Поиск книги или автора..."/>
                    </div>
                    <button className={styles.btnFilter}><IconFilter/>По рейтингу</button>
                    <button className={styles.btnInput}
                        onClick={()=>dispatch(openInputBtn(!isActiveInputBtn))}><IconSearch/></button>
                    <button className={styles.btnFilterSm} ><IconFilter fill={'orange'}/></button>
                    <div className={styles.btnWrapper}>
                        <button style={onActiveBtnStyles(btnBookRow)}
                            className={styles.btnIcon}
                            onClick={() => onChangeDirection(btnBookRow)}>
                            <IconMenu fill={(btnBookRow) ? 'white' : '#A7A7A7'}/>
                        </button>
                        <button style={onActiveBtnStyles(btnBookColumn)}
                            className={styles.btnIcon}
                            onClick={() => onChangeDirection(btnBookColumn)}>
                            <IconView fill={(btnBookColumn) ? 'white' : '#A7A7A7'}/>
                        </button>
                    </div>
                </div>)
    )
}