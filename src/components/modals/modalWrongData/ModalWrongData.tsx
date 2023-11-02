import styles from './ModalWrongData.module.scss';
import iconAttention from '../../../assets/img/icons/iconAttention.png';
import iconClose from '../../../assets/img/icons/iconClose.png';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {modalSlice} from "../../../providers/store/reducers/ModalSlice";
export const ModalWrongData = () => {
    const {isOpenModalWrongData} = useAppSelector(state => state.modalReducer);
    const {openModalWrongData} = modalSlice.actions;
    const dispatch = useAppDispatch();

    return (
            <div className={(isOpenModalWrongData) ? styles.modalWrapper : styles.modalHide}>
                <img src={iconAttention} alt="no img"/>
                <p>Что-то пошло не так. Обновите страницу через некоторое время.</p>
                <img className={styles.iconClose} src={iconClose} alt="no img" onClick={() => dispatch(openModalWrongData(!isOpenModalWrongData))}/>
            </div>
    );
};