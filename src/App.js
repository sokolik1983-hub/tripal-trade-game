<<<<<<< Updated upstream
import {Header, Slider, Footer, Text} from "./components/config";
=======
import React, {useState} from 'react';
import {Header, Slider, Footer, Text, Heading, Container, CharacterCard} from './components/config';
import Biography from "./pages/Biography";
>>>>>>> Stashed changes

import './App.css';

function App() {
<<<<<<< Updated upstream
  return (
    <>
      <Header />
      <Slider />
        <Text
            element="p"
            className="first"
            strong
        >
            <span>1111111111111111</span>
        </Text>
        <Text
            element="div"
            className="second"
            italic
        >
            <p>Тестовый текст</p>
        </Text>
        <Text
            element="span"
            className="third"
            disabled
        >
            <p>333333333333333</p>
        </Text>
=======
    const [characters, setCharacters] = useState(CHARACTERS);
    const [showBiographyID, setShowBiographyID] = useState(null);

    const handleLikeClick = (id) => {
        const newArrCharacters = characters.map(
            item => (item.id === id) ?
                { ...item, isLike: !item.isLike } :
                { ...item });
        setCharacters(newArrCharacters);
    };

  return (
    <>
      <Header />
        {
            showBiographyID ?
                <Biography
                    setShowBiography={setShowBiographyID}
                    showBiographyID={showBiographyID}
                /> :
                <>
                    <Slider />
                    <div className={s.cardTitle}>
                        <Heading backLine>
                            Marvel Cards!
                        </Heading>
                        <Heading level={2}>
                            Collect Your best five!
                        </Heading>
                    </div>
                    <Container>
                        <div className={s.cardWrap}>
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
                                        setShowBiographyID={setShowBiographyID}
                                    />)
                            }
                        </div>
                    </Container>
                </>
        }

>>>>>>> Stashed changes
      <Footer />
    </>
  );
}

export default App;
