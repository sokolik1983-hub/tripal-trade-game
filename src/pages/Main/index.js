import { useState } from 'react';
import { CharacterCard, Container, Heading, Slider } from '../../components/config';

import s from './styles.module.scss'

import { CHARACTERS } from '../../constants/characters';

const Main = () => {
    const [characters, setCharacters] = useState(CHARACTERS);

    const handleLikeClick = (id) => {
        const newArrCharacters = characters.map(
            item => (item.id === id) ?
                { ...item, isLike: !item.isLike } :
                item );
        setCharacters(newArrCharacters);
    };

    return (
        <>
            <Slider/>
            <div className={s.cardTitle}>
                <Heading backLine>
                    Marvel Cards!
                </Heading>
                <Heading level={2}>
                    Collect Your best five!
                </Heading>
            </div>
            <Container className="charactersWrap">
                {
                    characters.map(({
                                        id,
                                        name,
                                        description,
                                        thumbnail,
                                        humanName,
                                        isLike
                                    }) =>
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

export default Main;