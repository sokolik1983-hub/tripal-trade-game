import {useState} from 'react';
import logo from '../../assets/logo.png'
import {Container} from '../../components/config';
import cn from 'classnames';
import {LoginForm, RegistrationForm} from '../../components/config';
import s from './styles.module.scss';


const LoginFormLayout = (props) => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    }

    return (
        <Container className={s.loginContent} >
            <div className={s.headerLogo}>
                <img src={logo} alt="Logo" />
            </div>
            <div className={cn(s.container, { [s.active]: active})}>
                <div className={s.card} />
                <div className={s.card}>
                    <h1 className={s.title}>Login</h1>
                    <LoginForm />
                </div>
                <div className={cn(s.card, s.alt)}>
                    <div onClick={handleClick} className={cn(s.toggle, { [s.active]: active })}>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                            <path
                                d="m455.1,137.9l-32.4,32.4-81-81.1 32.4-32.4c6.6-6.6 18.1-6.6 24.7,0l56.3,56.4c6.8,6.8 6.8,17.9 0,24.7zm-270.7,271l-81-81.1 209.4-209.7 81,81.1-209.4,209.7zm-99.7-42l60.6,60.7-84.4,23.8 23.8-84.5zm399.3-282.6l-56.3-56.4c-11-11-50.7-31.8-82.4,0l-285.3,285.5c-2.5,2.5-4.3,5.5-5.2,8.9l-43,153.1c-2,7.1 0.1,14.7 5.2,20 5.2,5.3 15.6,6.2 20,5.2l153-43.1c3.4-0.9 6.4-2.7 8.9-5.2l285.1-285.5c22.7-22.7 22.7-59.7 0-82.5z"/>
                        </svg>
                    </div>
                    <h1 className={s.title}>Register
                        <div className={s.close} onClick={handleClick} />
                    </h1>
                    <RegistrationForm />
                </div>
            </div>
        </Container>
    );
};

export default LoginFormLayout;