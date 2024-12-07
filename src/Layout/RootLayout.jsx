import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';

const RootLayout = () => {
    return (
        <div className='font-sora'>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <Outlet/>
            </main>
            <footer></footer>
        </div>
    );
};

export default RootLayout;