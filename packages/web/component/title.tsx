import React from 'react';
import {tw} from 'twind';

const Title = () => {
    return (
        <h1 className={tw`w-full text(blue-500 2xl) font(medium) py-4`}>
            Todos
        </h1>
    );
};

export default Title;
