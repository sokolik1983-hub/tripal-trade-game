import React from 'react';
import {Container, Heading, Button} from '../config';

import s from './Slider.module.scss';

const Slider = () => {
    return (
        <section className={s.section}>
            <div className={s.slider}>
                <Container className="sliderContent">
                    <Heading level={1}>
                        Это заголовок!
                    </Heading>
                    <Heading
                        level={2}
                        className={s.subheader}
                        black
                    >
                        Wow.Wow.Wow
                    </Heading>
                    <div className={s.call}>
                        <Button origin />
                    </div>
                </Container>
            </div>
        </section>
    );
};

export default Slider;