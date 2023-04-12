import "./Button.css";
import React from "react";

const Button = ({ children }) => {
    return <button className="button__base">{children}</button>;
};

export default Button;
