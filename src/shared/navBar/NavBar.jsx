import React from 'react';
import { NavLink } from 'react-router';
import MyNavLink from './MyNavLink';
import logo from '../../assets/logo.png'

const NavBar = () => {
    return (
        <div>
            <nav className='flex justify-between gap-4 items-center 
         shadow py-4 container mx-auto px-4 py-2'>

            <img src={logo} alt="my picture" className='' />
            <ul className='flex justify-between gap-4 items-center'>
                <li>
                    <MyNavLink to={"/"} >Home</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/timeline"}>Timeline</MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/stats"} >Stats</MyNavLink>
                </li>
               
            </ul>
        </nav>
            
        </div>
    );
};

export default NavBar;