import React, {useState} from 'react';
import { CharacterCard, Container, Layout } from '../../components/config';

import s from './styles.module.scss'

import {CHARACTERS} from '../../constants/characters';

const Characters = () => {
    const [characters, setCharacters] = useState(CHARACTERS);
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
                        />)
                }
            </Container>
        </>
    );
};

export default Characters;