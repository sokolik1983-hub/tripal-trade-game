import React from 'react';
import cn from 'classnames';

import s from './styles.module.scss';

const Input = ({
                   type,
                   id,
                   children,
                   regInput,
                   onChange,
                   value
}) => {
    return (
        <div
            className={cn(s.inputContainer,
                { [s.regInput]: regInput})}
        >
            <input
                type={type}
                name={id}
                id={`#${id}`}
                required="required"
                onChange={onChange}
                value={value}
            />
            <label
                htmlFor={`#${id}`}
            >
                {children}
            </label>
            <div className={s.bar} />
        </div>
    );
};

export default Input;