import React, {useState} from 'react';
import {Menu} from "../Menu";
import styles from './MenuModal.module.scss';
import {NavLink} from "react-router-dom";

// @ts-ignore
export const MenuModal = ({isOpen}) => {
    return (
        //(window.innerWidth < 1110) ? styles.menu : styles.menuModal
        <div className={(isOpen) ? styles.wrapperModalActive : styles.wrapperModalDisable}>
            <div className={styles.menu}><NavLink
                to="/"
                style={({ isActive }) => {
                    return {
                        color: isActive ? "#F83600" : "black",
                        textDecoration: "none"
                    };
                }}
            >
                <h3 className={styles.booksHeader}>Витрина книг</h3>
                <h3 className={styles.allBooks}>Все книги</h3>
            </NavLink>
                <p>Бизнес-книги <span>0</span></p>
                <p>Детективы <span>0</span></p>
                <p>Детские книги <span>0</span></p>
                <p>Зарубежная литература <span>0</span></p>
                <p>История <span>0</span></p>
                <p>Классическая литература <span>0</span></p>
                <p>Книги по психологии <span>0</span></p>
                <p>Компьютерная литература <span>0</span></p>
                <p>Культура и искусство <span>0</span></p>
                <p>Наука и образование <span>0</span></p>
                <p>Публицистическая литература <span>0</span></p>
                <p>Справочники <span>0</span></p>
                <p>Фантастика <span>0</span></p>
                <p>Юмористическая литература <span>0</span></p>
                <h3 className={styles.extraInformation}><NavLink
                    to="/rules"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}
                >
                    Правила пользования
                </NavLink></h3>
                <h3 className={styles.extraInformation}><NavLink
                    to="/contract_offer"
                    style={({ isActive }) => {
                        return {
                            color: isActive ? "#F83600" : "black",
                            textDecoration: "none"
                        };
                    }}>Договор оферты</NavLink></h3>
            </div>
        </div>
    );
};

