import React from 'react';
import NavBar from '../shared/navBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../shared/footer/Footer';

const RootLayout = () => {
    return (
        <div className='w-11/12 mx-auto bg-gray-100'>
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default RootLayout;