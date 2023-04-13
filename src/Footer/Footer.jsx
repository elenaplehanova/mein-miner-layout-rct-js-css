import WhiteButton from "../WhiteButton/WhiteButton";
import "./Footer.css";
import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__cols">
                <h2 className="footer__cols-logo">Mein Miner</h2>
                <p className="footer__cols-copyright">© Mein Miner, 2022</p>

                <h3 className="footer__cols-title">Покупателям</h3>
                <ul className="footer_cols-list">
                    <li>
                        <a href="#about">О компании</a>
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
                    <li>
                        <a href="#contact">Контакты</a>
                    </li>
                </ul>

                <h3 className="footer__cols-title">Каталог Товаров</h3>
                <ul className="footer_cols-list">
                    <li>
                        <a href="#asic_miners">Asic miners</a>
                    </li>
                    <li>
                        <a href="#gpu_farm">GPU фермы</a>
                    </li>
                    <li>
                        <a href="#video_card">Видеокарты</a>
                    </li>
                    <li>
                        <a href="#accessories">Аксессуары</a>
                    </li>
                    <li>
                        <a href="#computer_components">Компьютерные комплектующие</a>
                    </li>
                    <li>
                        <a href="#mining_accessories">Комплектующие для майнинга</a>
                    </li>
                </ul>

                <WhiteButton className="footer__cols-button">Заказать звонок</WhiteButton>
                <ul className="footer_cols-list footer_cols-list__bottom">
                    <li>
                        <a href="#public_offer">Публичная оферта</a>
                    </li>
                    <li>
                        <a href="#privacy_policy">Политика конфиденциальности</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
