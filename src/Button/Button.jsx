import "./Button.css";
import React from "react";

const Button = ({ className, children }) => {
    return <button className={`button__base ${className}`}>{children}</button>;
};

export default Button;
