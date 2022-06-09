import React, {useContext} from 'react';
import {CharacterCard, Container} from '../../components/config';
import {CharactersContext} from "../../components/Layout";

import s from './styles.module.scss'

const Characters = () => {
    const {characters, handleLikeClick} = useContext(CharactersContext);

    return (
        <>
            <Container className={s.charactersWrap}>
                {
                    characters.map(({
                                        id,
                                        name,
                                        description,
                                        thumbnail,
                                        humanName,
                                        isLike
                                    }, i) => (i < 5) &&
                        <CharacterCard
                            key={id}
                            id={id}
                            name={name}
                            description={description}
                            src={thumbnail.path}
                            humanName={humanName}
                            isLike={isLike}
                            onLikeClick={handleLikeClick}
                        />)
                }
            </Container>
        </>
    );
};

export default Characters;