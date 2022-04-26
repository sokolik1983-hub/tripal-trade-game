import { Container } from '../../components/config';

import s from './styles.module.scss'

const Contacts = () => {
    return (
        <Container className="contactsWrap">
            <a className={s.aboutWrap__link} href="https://hot-portal.ru/" target="_blank" rel="noreferrer">Портфолио</a>
            <div className={s.aboutImgWrap} >
                <img src="https://hot-portal.ru/img/silhoette.png" alt=""/>
            </div>

        </Container>
    );
};

export default Contacts;