import {useContext} from 'react';
import {CharacterCard, Container, Heading, Slider} from '../../components/config';
import {CharactersContext} from "../../components/Layout";

import s from './styles.module.scss';

const Main = () => {
    const {characters, handleLikeClick} = useContext(CharactersContext);

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
            <Container className={s.charactersWrap}>
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