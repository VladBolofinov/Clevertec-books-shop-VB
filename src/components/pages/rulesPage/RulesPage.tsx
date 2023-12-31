import styles from "./RulesPage.module.scss";
import {MyLoader} from "../../sharedComponents/MyLoader/MyLoader";
import {useAppSelector} from "../../hooks/redux";
const RulesPage = () => {
    const {isLoadingBook, isLoadingToken} = useAppSelector(state => state.apiRequestReducer);
    return (
        <div className={styles.wrapperMiddleSection}>
            {(isLoadingToken || isLoadingBook)
                ? <MyLoader/>
                : <div className={styles.textWrapper}>
                        <h2>Правила пользования</h2>
                        <h4>1. Идейные соображения высшего порядка, а также высокое качество позиционных исследований
                            представляет собой интересный эксперимент проверки экспериментов, поражающих по своей масштабности
                            и грандиозности.</h4>
                        <p>1.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет
                            каждого участника как способного принимать собственные решения касаемо инновационных методов
                            управления процессами.</p>
                        <p>1.2. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление
                            играет важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней
                            политики лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.</p>
                        <p>1.3. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся
                            непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.</p>
                        <p>1.4. Но независимые государства, которые представляют собой яркий пример континентально-европейского
                            типа политической культуры, будут объединены в целые кластеры себе подобных.</p>
                        <h4>2. С учётом сложившейся международной обстановки,
                            консультация с широким активом предоставляет широкие возможности для приоритизации разума над эмоциями.
                        </h4>
                        <p>2.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника
                            как способного принимать собственные решения касаемо инновационных методов управления процессами.</p>
                        <p className={styles.subParagraph}>2.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет
                            важную роль в формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики
                            лишь добавляют фракционных разногласий и преданы социально-демократической анафеме.</p>
                        <p className={styles.subParagraph}>2.1.2. Приятно, граждане, наблюдать, как элементы политического процесса,
                            превозмогая сложившуюся непростую экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.</p>
                        <p>2.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической
                            культуры, будут объединены в целые кластеры себе подобных.</p>
                        <h4>3. Принимая во внимание показатели успешности, укрепление и развитие внутренней
                            структуры требует от нас анализа приоритизации разума над эмоциями.</h4>
                        <p>3.1. Задача организации, в особенности же социально-экономическое развитие однозначно определяет каждого участника как способного
                            принимать собственные решения касаемо инновационных методов управления процессами.</p>
                        <p className={styles.subParagraph}>3.1.1. Не следует, однако, забывать, что разбавленное изрядной долей эмпатии, рациональное мышление играет важную роль в
                            формировании приоритизации разума над эмоциями. Но некоторые особенности внутренней политики лишь добавляют фракционных
                            разногласий и преданы социально-демократической анафеме.</p>
                        <p className={styles.subParagraph}>3.1.2. Приятно, граждане, наблюдать, как элементы политического процесса, превозмогая сложившуюся непростую
                            экономическую ситуацию, объявлены нарушающими общечеловеческие нормы этики и морали.</p>
                        <p>3.2. Но независимые государства, которые представляют собой яркий пример континентально-европейского типа политической
                            культуры, будут объединены в целые кластеры себе подобных.</p>
                        <p>3.3. Не следует, однако, забывать, что экономическая повестка сегодняшнего дня требует анализа анализа
                            существующих паттернов поведения.</p>
                        <p className={styles.subParagraph}>3.3.1. А ещё представители современных социальных резервов набирают популярность среди определенных слоев населения,
                            а значит, должны быть функционально разнесены на независимые элементы.</p>
                        <p className={styles.subSubParagraph}>3.3.1.1. Стремящиеся вытеснить традиционное производство, нанотехнологии могут быть объявлены нарушающими
                            общечеловеческие нормы этики и морали. </p>
                        <p className={styles.subSubParagraph}>3.3.1.2. Прежде всего, разбавленное изрядной долей эмпатии, рациональное мышление однозначно фиксирует необходимость новых предложений.
                            Являясь всего лишь частью общей картины, независимые государства представлены в исключительно положительном свете.</p>
                        <p>3.4. Повседневная практика показывает, что убеждённость некоторых оппонентов требует от нас анализа распределения внутренних резервов и ресурсов.</p>
                </div>
            }
        </div>
    )
}
export default RulesPage;