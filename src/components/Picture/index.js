import React from "react";
import propTypes from "prop-types";

const Picture = ({src}) => {
    return (
        <img src={src} alt="picture" />
    );
};

Picture.propTypes = {
    src: propTypes.string,
}
export default Picture;