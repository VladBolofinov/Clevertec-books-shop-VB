import styles from './FilterPanel.module.scss';
import IconSearch from '../../assets/img/icons/IconSearch.svg';
import IconFilter from '../../assets/img/icons/filterIcon.svg';
import IconMenu from '../../assets/img/icons/IconMenu.svg';
import IconView from '../../assets/img/icons/IconView.svg';
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {bookSlice} from "../../store/reducers/BookSlice";
import {apiRequestSlice} from "../../store/reducers/ApiRequestSlice";
import { memo } from 'react';

export const  FilterPanel = memo(() => {
    const onActiveBtnStyles = (activeBtn: boolean) => {
        return (activeBtn) ? {background: 'linear-gradient(233.73deg, #F83600 -16.08%, #F9D423 327.37%)'} : {background: 'white'}
    }
    const {isActiveInputBtn, isBookColumn, isBookRow} = useAppSelector(state => state.userReducer);
    const {openInputBtn, changeDirection} = bookSlice.actions;
    const {searchQuery,setSearchInputValue} = apiRequestSlice.actions;
    const dispatch = useAppDispatch();
    return (
        (isActiveInputBtn)
            ?
            (
                <div className={styles.panelWrapperSmVisible}>
                    <div className={styles.inputWrapperSmVisible}>
                        <div className={styles.wrapperInputIconSmVisible}><IconSearch/></div>
                        <span onClick={() => dispatch(openInputBtn(!isActiveInputBtn))}>X</span>
                        <input type="text" placeholder="Поиск книги или автора..."
                               onChange={(event) => {
                                   dispatch(setSearchInputValue(event.target.value));
                                   dispatch(searchQuery());
                               }
                               }/>
                    </div>
                </div>
            ) : (
                <div className={styles.panelWrapper}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.wrapperInputIcon}><IconSearch/></div>
                        <input type="text"
                               placeholder="Поиск книги или автора..."
                               onChange={(event) => {
                                   dispatch(setSearchInputValue(event.target.value));
                                   dispatch(searchQuery());
                               }
                               }/>
                    </div>
                    <button className={styles.btnFilter}><IconFilter/>По рейтингу</button>
                    <button className={styles.btnInput}
                            onClick={()=>dispatch(openInputBtn(!isActiveInputBtn))}><IconSearch/></button>
                    <button className={styles.btnFilterSm} ><IconFilter fill={'orange'}/></button>
                    <div className={styles.btnWrapper}>
                        <button style={onActiveBtnStyles(isBookRow)}
                                className={styles.btnIcon}
                                onClick={() => dispatch(changeDirection(isBookRow))}>
                            <IconMenu fill={(isBookRow) ? 'white' : '#A7A7A7'}/>
                        </button>
                        <button style={onActiveBtnStyles(isBookColumn)}
                                className={styles.btnIcon}
                                onClick={() => dispatch(changeDirection(isBookColumn))}>
                            <IconView fill={(isBookColumn) ? 'white' : '#A7A7A7'}/>
                        </button>
                    </div>
                </div>)
    )
})