import Button from "../Button/Button";
import "./WhiteButton.css";

import React from "react";

const WhiteButton = ({ className, children }) => {
    return <Button className={`${className} button__white `}>{children}</Button>;
};

export default WhiteButton;
