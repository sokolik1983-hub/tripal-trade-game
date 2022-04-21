import React from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

import s from './Container.module.scss';

const Container = ({children, className }) => {

    return (
        <div className={cn(s.root, className ? className : '')}>
            {children}
        </div>
    );
};

Container.propTypes = {
    className: propTypes.string,
    children: propTypes.node
}

export default Container;