import React from 'react';
import Lottie from 'lottie-react';
import error from '../../NotFound.json';

const Error = () => {
    return (
        <div className='container flex justify-center items-center'>
            <Lottie className='w-screen h-screen' animationData={error}/>
        </div>
    );
};

export default Error;