import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames'

import s from './styles.module.scss'

const Button = ({
                    dark,
                    children,
                    onClick,
                    submitBtn
}) => {

    return (
            submitBtn ?
            <div className={s.buttonContainer}>
                <button>
                    <span>{children}</span>
                </button>
            </div>
            :
            <button
                className={cn({[s.dark]: dark})}
                onClick={() => onClick()}
            >
                {children}
            </button>
    );
};

Button.propTypes = {
    origin: propTypes.bool,
}

export default Button;