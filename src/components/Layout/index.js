import { Header, Footer } from '../config';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Header />
                <Outlet />
            <Footer />
        </>
    );
}

export default Layout;