import WhiteButton from "../WhiteButton/WhiteButton";
import "./Main.css";
import React from "react";

const Main = () => {
    return (
        <main className="main">
            <section className="banners">
                <div className="banner banner_first">
                    <h1 className="banner_title">оборудование для майнинга оптом</h1>
                    <p className="banner_text">с гарантией 12 месяцев</p>
                    <WhiteButton className="banner_button">Перейти в каталог</WhiteButton>
                    <img
                        className="banner_image"
                        src="/assets/banners/image-mining-equipment.png"
                        alt="оборудование для майнинга"
                    />

                    <ul className="dots-list">
                        <a href="#pageone">
                            <li className="dot dot-active"></li>
                        </a>
                        <a href="#pagetwo">
                            <li className="dot "></li>
                        </a>
                        <a href="#pagethree">
                            <li className="dot "></li>
                        </a>
                        <a href="#pagethree">
                            <li className="dot "></li>
                        </a>
                    </ul>
                </div>
                <div className="banner banner_second"></div>
            </section>
            <section className="categories"></section>

            <section className="advantages"></section>

            <section className="bestsellers"></section>

            <section className="about"></section>

            <section className="help"></section>

            <section className="contacts"></section>
        </main>
    );
};

export default Main;
