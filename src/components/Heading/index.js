import { createElement } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';

import s from './Heading.module.scss';

const Heading = ({
                     children,
                     level,
                     className,
                     backLine
}) => {
        const el = `h${level}`;

        return createElement(el, {
            className: cn(
                s.root,
                className,
                s[`level${level}`],
                {[s.backLine]: backLine}
                )
        }, children);
};

Heading.defaultProps = {
    level: 1,
    backLine: false,
}
Heading.propTypes = {
    level: propTypes.number,
    className: propTypes.string,
    children: propTypes.node,
    backLine: propTypes.bool,
}

export default Heading;