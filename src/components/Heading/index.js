import { createElement, useEffect } from 'react';
import cn from 'classnames';
import propTypes from 'prop-types';
import linkIcon from '../../assets/link_icon.svg'
import {Link, useLocation} from "react-router-dom";

import s from './Heading.module.scss';

const Heading = ({
                     children,
                     level,
                     className,
                     backLine,
                     anchor
}) => {
        const el = `h${level}`;

        return createElement(el, {
            className: cn(
                s.root,
                className,
                s[`level${level}`],
                {[s.backLine]: backLine}
                )
        }, children, anchor &&
            <Link
                to={`#${children.replace(/\s/g, '')}`}
            >
                <img
                    id={children.replace(/\s/g, '')}
                    src={linkIcon}
                    alt="anchor"
                />
            </Link>);
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