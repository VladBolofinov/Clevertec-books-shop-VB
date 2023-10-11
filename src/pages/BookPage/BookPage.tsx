import React from 'react';
import styles from './BookPage.module.scss';
import bookPhotoBig from '../../assets/img/pictures/BookPhotoBig.png';
import MyStarReview from "../../shared/MyStarReview/MyStarReview";
import ReviewersAvatar from '../../assets/img/icons/reviewsAvatar.svg';
import {Menu} from "../../components/menu/Menu";
import ArrowMenuTop from "../../assets/img/icons/ArrowMenuTop.svg";
import ArrowMenuBottom from "../../assets/img/icons/ArrowMenuBottom.svg";
import {useAppDispatch, useAppSelector} from "../../components/hooks/redux";
import {userSlice} from "../../providers/store/reducers/UserSlice";

const BookPage = () => {
    const {isActiveDropDown} = useAppSelector(state => state.userReducer);
    const {openDropDownList} = userSlice.actions;
    const dispatch = useAppDispatch();
    return (
        <div className={styles.globalWrapper}>
            <div className={styles.wrapper}>
                {(window.innerWidth < 1110) ? <Menu/> : null}
                <div className={styles.bookLocation}>
                    Бизнес-книги / Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих
                </div>
                <img className={styles.bookImg} src={bookPhotoBig} alt="book image"/>
                <div className={styles.wrapperBookDescr}>
                    <h1 className={styles.bookHeader}>Грокаем алгоритмы. Иллюстрированное пособие для программистов и любопытствующих</h1>
                    <span className={styles.textAuthor}>Адитья Бхаргава, 2019</span>
                    <button className={styles.btnStyles}>ЗАБРОНИРОВАТЬ</button>
                    <h3>О книге</h3>
                    <p className={styles.aboutBook}>Алгоритмы — это всего лишь пошаговые алгоритмы решения задач, и большинство таких задач уже были кем-то решены,
                        протестированы и проверены. Можно, конечно, погрузится в глубокую философию гениального Кнута, изучить многостраничные
                        фолианты с доказательствами и обоснованиями, но хотите ли вы тратить на это свое время?
                        <br/>
                        <br/>Откройте великолепно иллюстрированную книгу и вы сразу поймете, что алгоритмы — это просто. А грокать
                        алгоритмы — это веселое и увлекательное занятие.</p>
                </div>
                <h3 className={styles.rank}>Рейтинг</h3>
                <span className={styles.grayLine}></span>
                <div className={styles.starWrapper}>
                    <MyStarReview width={'168px'}/>
                    <span>4.3</span>
                </div>
                <h3 className={styles.extraDescrHeader}>Подробная информация</h3>
                <span className={styles.grayLine}></span>
                <div className={styles.extraDescrWrapper}>
                    <div className={styles.extraDescrWrapperFirstBlock}>
                        <div className={styles.paragraphBlock}>
                            <p>Издательство </p>
                            <p>Год издания </p>
                            <p>Страниц </p>
                            <p>Переплёт </p>
                            <p>Формат </p>
                        </div>
                        <div className={styles.spanBlock}>
                            <span>Питер</span>
                            <span>2019</span>
                            <span>288</span>
                            <span>Мягкая обложка</span>
                            <span>70х100</span>
                        </div>
                    </div>
                    <div className={styles.extraDescrWrapperSecondBlock}>
                        <div className={styles.paragraphBlock}>
                            <p>Жанр</p>
                            <p>Вес</p>
                            <p>ISBN</p>
                            <p>Изготовитель</p>
                        </div>
                        <div className={styles.spanBlock}>
                            <span>Компьютерная литература</span>
                            <span>370 г</span>
                            <span>978-5-4461-0923-4</span>
                            <span>ООО «Питер Мейл». РФ, 198 206, г. Санкт-Петербург,<br/> П. А29</span> {/*напиши логику добавления br*/}
                        </div>
                    </div>
                </div>
                    <h3 className={styles.extraDescrHeader}>Отзывы</h3>
                    <div className={styles.arrowMenu}
                         onClick={() => dispatch(openDropDownList(!isActiveDropDown))}>
                        {(isActiveDropDown) ? <ArrowMenuTop/> : <ArrowMenuBottom/>}
                    </div>
                <span className={styles.grayLine}></span>
                <div className={(!isActiveDropDown) ? styles.reviewersWrapperHide : null}>
                    <div className={styles.reviewersWrapper}>
                        <ReviewersAvatar/>
                        <p className={styles.reviewersPadding}>Иван Иванов</p>
                        <p className={styles.reviewersPadding}>5 января 2019</p>
                    </div>
                    <MyStarReview width={'168px'}/>
                    <p className={styles.reviewersDescr}>adasdasd</p>
                    <div className={styles.reviewersWrapper}>
                        <ReviewersAvatar/>
                        <p className={styles.reviewersPadding}>Николай Качков</p>
                        <p className={styles.reviewersPadding}>20 июня 2020</p>
                    </div>
                    <MyStarReview width={'168px'}/>
                    <p className={styles.reviewersDescr}>Учитывая ключевые сценарии поведения, курс на социально-ориентированный
                        национальный проект не оставляет шанса для анализа существующих паттернов поведения. Для современного
                        мира внедрение современных методик предоставляет широкие возможности для позиций, занимаемых участниками
                        в отношении поставленных задач. Как уже неоднократно упомянуто, сделанные на базе интернет-аналитики
                        выводы будут в равной степени предоставлены сами себе. Вот вам яркий пример современных тенденций —
                        глубокий уровень погружения создаёт предпосылки для своевременного выполнения сверхзадачи. И нет сомнений,
                        что акционеры крупнейших компаний, инициированные исключительно синтетически, превращены в посмешище,
                        хотя само их существование приносит несомненную пользу обществу.</p>
                    <div className={styles.reviewersWrapper}>
                        <ReviewersAvatar/>
                        <p className={styles.reviewersPadding}>Екатерина Беляева</p>
                        <p className={styles.reviewersPadding}>18 февраля 2018</p>
                    </div>
                    <MyStarReview width={'168px'}/>
                    <p className={styles.reviewersDescr}></p>
                </div>
                <button style={{margin:'42px 0 0 0 '}} className={styles.btnStyles}>ОЦЕНИТЬ КНИГУ</button>
            </div>
        </div>
    );
};
export default BookPage;