import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames'

import s from './styles.module.scss'

const Button = ({white, children}) => {

    return (
        <button className={cn({[s.white]: white})}>{children}</button>
    );
};

Button.propTypes = {
    origin: propTypes.bool,
}

export default Button;