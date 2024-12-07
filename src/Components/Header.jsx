import React from 'react';
import Navbar from "../Components/Navbar";

const Header = () => {
    return (
        <div className='container bg-transparent backdrop:blur-sm mx-auto'>
            <Navbar></Navbar>   
        </div>
    );
};

export default Header;