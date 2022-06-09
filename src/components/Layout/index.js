import {useEffect, createContext, useState} from 'react';
import {Header, Footer, Container} from '../config';
import {Outlet, useLocation, useMatch} from 'react-router-dom';
import {CHARACTERS} from '../../constants/characters';

export const CharactersContext = createContext(null);

const CharactersProvider = ({children}) => {
    const lsCharacters = JSON.parse(localStorage.getItem('characters'));
    const [characters, setCharacters] = useState(lsCharacters || CHARACTERS);

    return (
        <CharactersContext.Provider value={{
            characters,
            handleLikeClick: (id) => {
                const newCharacters = characters.map(
                    item => (item.id === id) ?
                        { ...item, isLike: !item.isLike } :
                        item );
                setCharacters(newCharacters);
                localStorage.setItem('characters', JSON.stringify(newCharacters));
            }
        }}>
            {children}
        </CharactersContext.Provider>
    );
}

const Layout = () => {
    const match = useMatch({path: '/'});
    const login = useMatch({path: '/login'})
    const location = useLocation();

    useEffect(() => {
        const hash = location.hash;
        const elem = hash && document.getElementById(hash.substr(1))
        if (elem) {
            elem.scrollIntoView({
                block: 'center',
                behavior: 'smooth'
            })
        } else {
            window.scrollTo(0,0);
        }
    }, [location.pathname, location.hash]);

    return (
        <>
            {
                !login && <Header />
            }
            <CharactersProvider>
                {
                    match !== null
                        ? <Outlet />
                        : (
                            <Container>
                                <Outlet />
                            </Container>
                        )
                }
            </CharactersProvider>
            <Footer />
        </>
    );
}

export default Layout;