import React from 'react';
import { Heading, Text, Container, Picture } from '../../components/config'
import randomKeyGenerator from '../../utils/randomKeyGenerator';
import { useParams } from 'react-router-dom';

import s from './styles.module.scss';

import { BIO } from '../../constants/BIO';

const Biography = () => {
    const { id } = useParams();

    return (
        <Container>
            <div className={s.root}>
                <div className={s.BioWrap}><br />
                    {
                        BIO[id]
                            ?
                            BIO[id].map( ({type, text, src}) => {
                                switch(type) {
                                    case 'h1':
                                        return <Heading key={randomKeyGenerator()} level={1}>{text}</Heading>;
                                    case 'h2':
                                        return <Heading key={randomKeyGenerator()} level={2}>{text}</Heading>;
                                    case 'paragraph':
                                        return <Text key={randomKeyGenerator()} element='p'>{text}</Text>;
                                    case 'img':
                                        return <Picture key={randomKeyGenerator()} src={src} />;
                                    default:
                                        return '';
                                }
                            })
                            :
                            <Text element='p'>Биография героя в разработке</Text>
                    }
                </div>
            </div>
        </Container>
    );
};

export default Biography;