import React from "react";
import propTypes from "prop-types";

import s from './styles.module.scss'

const Picture = ({src}) => {

    return (
        <img style={{height: '300px'}}  src={src} className={s.bioPicture} alt="picture" />
    );
};

Picture.propTypes = {
    src: propTypes.string,
}
export default Picture;