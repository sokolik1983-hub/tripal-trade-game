import {createElement} from 'react';
import propTypes from 'prop-types';
import cn from 'classnames';

import s from './Text.module.css';

const Text = ({
                  element,
                  className,
                  strong,
                  italic,
                  disabled,
                  children ,
}) => {
    return createElement(element, {
        className: cn(
            s.root,
            className,
            {
                [s.strong]: strong,
                [s.italic]: italic,
                [s.disabled]: disabled
            },
        )
    }, children);
};

Text.defaultProps = {
    strong: false,
    italic: false,
    disabled: false,
}

Text.propTypes = {
    element: propTypes.oneOf(['p', 'span', 'div']),
    className: propTypes.string,
    strong: propTypes.bool,
    italic: propTypes.bool,
    disabled: propTypes.bool,
    children: propTypes.node
}

export default Text;


