import { useEffect, useState } from 'react';
import cn from 'classnames';
import { Container } from '../config';
import { NavLink, useNavigate} from 'react-router-dom';

import s from './Header.module.scss';

const MENU = [
    {
        title: 'Main',
        href: '/',
    },
    {
        title: 'Characters',
        href: '/characters',
    },
    {
        title: 'About',
        href: '/about',
    },
    {
        title: 'Contacts',
        href: '/contacts',
    },
];

const Header = () => {
    const [scroll, setScroll] = useState(null);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    }

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
                    <div className={s.logo} onClick={handleClick}>
                    </div>
                    <ul className={s.nav}>
                        {
                            MENU.map((item, index) =>
                                <li key={index}>
                                    <NavLink
                                        to={item.href}
                                        className={(props) => props.isActive ? s.active : ''}
                                    >
                                        {item.title}
                                    </NavLink>
                                </li>)
                        }
                    </ul>
                </Container>
            </div>
        </header>
    );
};

export default Header;