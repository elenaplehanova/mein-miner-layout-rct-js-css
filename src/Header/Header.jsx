import Button from "../Button/Button";
import NotificationButton from "../NotificationButton/NotificationButton";
import RoundButton from "../RoundButton/RoundButton";
import "./Header.css";
import React from "react";

const Header = () => {
    return (
        <>
            <header className="header_first">
                <div className="header__first_elements">
                    <div className="header__contacts">
                        <img src="/assets/icons/email.svg" alt="email" />
                        <p>mein@miner.com</p>
                        <img className="img__phone" src="/assets/icons/phone.svg" alt="phone" />
                        <p>+7 (999) 999-99-99</p>
                    </div>
                    <div className="header__socialmedia">
                        <img src="/assets/icons/telegram.svg" alt="telegram" />
                        <img src="/assets/icons/whatsapp.svg" alt="whatsapp" />
                    </div>
                </div>
            </header>
            <header className="header__second">
                <div className="header__second_elements">
                    <p className="text__logo">Mein Miner</p>
                    <nav>
                        <ul className="nav_list">
                            <li>
                                <a href="#catalog" className="button__dropdown" role="button">
                                    Каталог товаров
                                </a>
                            </li>
                            <li>
                                <a href="#price">Цены</a>
                            </li>
                            <li>
                                <a href="#calculator">Калькулятор</a>
                            </li>
                            <li>
                                <a href="#delivery">Доставка</a>
                            </li>
                            <li>
                                <a href="#feedback">Отзывы</a>
                            </li>
                        </ul>
                    </nav>
                    <Button>Заказать звонок</Button>
                    <nav className="header__second__navbar">
                        <RoundButton></RoundButton>
                        <NotificationButton></NotificationButton>
                        <NotificationButton></NotificationButton>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
