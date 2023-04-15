import React from "react";
import { ReactComponent as ArrowIcon } from "./arrow.svg";
import "./ArrowButton.css";

const ArrowButton = ({ className, children }) => {
    return (
        <button className={`arrow__button ${className}`}>
            <a className="arrow__link" href="#catalog">
                {children}
                <ArrowIcon className="arrow__icon" />
            </a>
        </button>
    );
};

export default ArrowButton;
