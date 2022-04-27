import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Container } from '../config';
import { Link } from "react-router-dom";

import s from "./Header.module.scss"

const MENU = ['Main', 'Characters', 'About', 'Contacts'];

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
                            MENU.map(item => <li key={item}><Link to={item === 'Main' ? '/' : `/${item.toLowerCase()}`}>{item}</Link></li>)
                        }
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header;