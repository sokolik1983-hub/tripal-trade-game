import React from 'react';
import {Heading} from "../../components/config";

import s from './'

const NotFound = () => {
    return (
        <>
            <div className={s.root}>
                <Heading>Not Found 404</Heading>
            </div>
        </>
    );
};

export default NotFound;