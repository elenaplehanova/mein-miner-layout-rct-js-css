import Button from "../Button/Button";
import "./WhiteButton.css";

import React from "react";

const WhiteButton = ({ children }) => {
    return <Button className="button__white">{children}</Button>;
};

export default WhiteButton;
