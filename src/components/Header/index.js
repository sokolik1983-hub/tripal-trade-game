<<<<<<< Updated upstream
import React from "react";
import {Container} from "../config"
=======
import {useEffect, useState, useRef} from 'react';
import {Container} from '../config';
import cn from 'classnames';
>>>>>>> Stashed changes

import s from "./Header.module.css"

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

const Header = () => {
    const [scroll, setScroll] = useState(null);

    useEffect(() => {
        window.addEventListener('scroll', () => setScroll(window.scrollY));
        return () => window.removeEventListener('scroll', () => setScroll(null));
    }, []);

    return (
        <header className={s.root}>
<<<<<<< Updated upstream
            <Container>
                <div className={s.header}>
=======
            <div className={cn(s.header,
                {[s.small]: scroll > 60}
            )}>
                <Container className={s.headerWrap}>
>>>>>>> Stashed changes
                    <div className={s.logo}>
                    </div>
                    <ul className={s.nav}>
                        {
                            MENU.map(item => <li key={item}><a href='#'>{item}</a></li>)
                        }
                    </ul>
                </div>
            </Container>
        </header>
    );
};

export default Header;