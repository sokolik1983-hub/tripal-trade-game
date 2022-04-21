import {useEffect, useState} from 'react';
import {Container} from '../config';
import cn from 'classnames';

import s from "./Header.module.scss"

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', () => setScroll(window.scrollY));
        return () => window.removeEventListener('scroll', () => setScroll(null));
    }, []);

    return (
        <header className={s.root}>
            <div className={cn(s.header,
                {[s.small]: scroll > 60}
            )}>
                <Container className='headerWrap'>
                    <div className={s.logo}>
                    </div>
                    <ul className={s.nav}>
                        {
                            MENU.map(item => <li key={item}><a href='#'>{item}</a></li>)
                        }
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header;