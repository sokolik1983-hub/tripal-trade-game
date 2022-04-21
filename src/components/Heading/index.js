import { createElement } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

import s from './Heading.module.scss';

const Heading = ({children, level, className}) => {
        const el = `h${level}`;

        return createElement(el, {
            className: cn(s.root, className, s[`level${level}`])
        }, children);
};

Heading.defaultProps = {
    level: 1,
}
Heading.propTypes = {
    level: propTypes.number,
    className: propTypes.string,
    children: propTypes.node
}

export default Heading;