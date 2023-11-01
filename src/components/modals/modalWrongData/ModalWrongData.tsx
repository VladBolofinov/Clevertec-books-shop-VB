import styles from './ModalWrongData.module.scss';
import iconAttention from '../../../assets/img/icons/iconAttention.png';
import iconClose from '../../../assets/img/icons/iconClose.png';
import {useState} from "react";
export const ModalWrongData = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
            <div className={styles.modalWrapper}>
                <img src={iconAttention} alt="no img"/>
                <p>Что-то пошло не так. Обновите страницу через некоторое время.</p>
                <img src={iconClose} alt="no img" onClick={() => setIsOpenModal(true)}/>
            </div>
    );
};