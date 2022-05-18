import {useEffect, useRef} from "react";
import {Header, Footer, Container} from '../config';
import {Outlet, useLocation, useMatch} from 'react-router-dom';

import s from './styles.module.scss';

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
            {
                match !== null
                    ? <Outlet />
                    : (
                        <Container>
                            <Outlet />
                        </Container>
                    )
            }
            <Footer />
        </>
    );
}

export default Layout;