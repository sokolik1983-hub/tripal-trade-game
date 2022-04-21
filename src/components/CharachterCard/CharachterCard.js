import {useState} from 'react';
import {ReactComponent as Heart} from '../../assets/heart.svg';
import Heading from '../Heading';
import cn from 'classnames';
import propTypes from 'prop-types';

import s from './CharachterCard.module.scss';

export const CharachterCard = ({id, name, description, src, humanName, isLike, onLikeClick}) => {

    const handleClick = () => {
        onLikeClick(id);
    };

    return (
        <div className={s.root}>
            <img
                src={src}
                alt={name} className={s.cardImage}/>
            <div className={s.cardDetails}>
                <Heading className={s.cardName} level={2}>
                    {name}
                </Heading>
                <Heading className={s.cardHumanName} level={3}>
                    {humanName}
                </Heading>
                <p className={s.cardDescription}>
                    {description}
                </p>
                <div className={s.cardMeta} >
                    <div
                        onClick={handleClick}
                        className={cn(s.like,
                        {[s.active]: isLike}
                        )}
                    >
                        <Heart />
                    </div>
                    <div className={s.readBio}>
                        <a href="#">Read bio</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

CharachterCard.defaultProps = {
    isLike: false,
}
CharachterCard.propTypes = {
    id:  propTypes.number,
    name: propTypes.string,
    description: propTypes.string,
    thumbnail: propTypes.object,
    humanName: propTypes.string,
    isLike: propTypes.bool,
    onLikeClick: propTypes.func,
}

export default CharachterCard;