import React from 'react';
import { NavLink } from 'react-router';

const MyNavLink = ({to,children}) => {
    return (
         <NavLink 
            to={to} 
            className={({isActive}) => `font-semibold flex gap-2 items-center ${isActive ? 
            'bg-[#244D3F] text-white py-1 px-2' : ''}`}>
            {children}
            </NavLink>
    );
};

export default MyNavLink;