import "./NotificationButton.css";
import React from "react";

const NotificationButton = () => {
    return (
        <a href="#cart" className="notification__button">
            <span className="badge">3</span>
        </a>
    );
};

export default NotificationButton;
