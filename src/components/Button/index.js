import React from "react";
import propTypes from "prop-types";

import s from './styles.module.scss'

const Button = ({origin}) => {

    return (
        <button className={origin ? s.button : s.darkStyle}>{origin ? "Wow" : "Go back"}</button>
    );
};

Button.propTypes = {
    origin: propTypes.bool,
}

export default Button;