import stylesRow from './BookItemRow.module.scss';
import bookPhoto from '../../../assets/img/pictures/BookPhoto.png';
import bookNotFound from '../../../assets/img/pictures/bookNotFound.png';
import IconStar from '../../../assets/img/icons/IconStar.svg';
import {MyButton} from "../../sharedComponents/MyButton";

export const BookItemRow = () => {
    return (
        <div className={stylesRow.bookCard}>
            <img src={bookPhoto} alt="book image"/>
            <div className={stylesRow.wrapperElemsImg}>
                <p className={stylesRow.bookName}>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</p>
                <p className={stylesRow.bookAuthor}>Адитья Бхаргава, Патрик Нимейер, 2019</p>
                <div className={stylesRow.wrapperBtnStars}>
                    <div className={stylesRow.starWrapper}>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                        <IconStar/>
                    </div>
                    <MyButton width={'166px'} height={'40px'} text={'ЗАБРОНИРОВАТЬ'}
                              background={'linear-gradient(231.58deg, #F83600 -53.35%, #F9D423 297.76%'}
                              fontSize={'12px'}
                              fontWeight={'600'}
                              color={'white'}/>
                </div>
            </div>
        </div>
    )
}