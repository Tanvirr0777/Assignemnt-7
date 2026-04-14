import React from 'react';
import { NavLink } from 'react-router';
import MyNavLink from './MyNavLink';
import logo from '../../assets/logo.png'
import { FaHome } from 'react-icons/fa';
import { FaH } from 'react-icons/fa6';
import { MdTimer } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';

const NavBar = () => {

    return (
        <div className='bg-white'>
            <nav className='flex justify-between gap-4 items-center 
         shadow py-4 container mx-auto px-4 py-2'>

            <img src={logo} alt="keenkepper"  />

            <ul className='flex justify-between gap-4 items-center'>
                <li >      
                    <MyNavLink to={"/"} className=""> 
                       <FaHome size={18} />                                
                        <span>Home</span>
                    </MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/timeline"}>
                    <MdTimer />
                    <span>Timeline</span>
                    </MyNavLink>
                </li>
                <li>
                    <MyNavLink to={"/stats"}>
                    <ImStatsDots />
                    <span>Stats</span>
                    </MyNavLink>
                </li>
               
            </ul>
        </nav>
            
        </div>
    );
};

export default NavBar;