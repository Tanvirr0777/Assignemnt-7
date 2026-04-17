import React, { useState } from 'react';
import { NavLink } from 'react-router';
import MyNavLink from './MyNavLink';
import logo from '../../assets/logo.png'
import { FaBars, FaHome, FaTimes } from 'react-icons/fa';
import { FaH } from 'react-icons/fa6';
import { MdTimer } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import Navmenu from './Navmenu';

const NavBar = () => {

    const [open,setOpen] = useState(false);


    return (
         <div className="bg-white sticky top-0 z-50 shadow">
      <nav className="container mx-auto px-4 py-3 flex justify-between items-center">

        
        <img src={logo} alt="keenkepper" className="h-8" />
         <Navmenu />
       
        
        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 bg-white shadow">
          <li>
            <MyNavLink to="/" onClick={() => setOpen(false)}>
              <FaHome />
              <span className="ml-2">Home</span>
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/timeline" onClick={() => setOpen(false)}>
              <MdTimer />
              <span className="ml-2">Timeline</span>
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/stats" onClick={() => setOpen(false)}>
              <ImStatsDots />
              <span className="ml-2">Stats</span>
            </MyNavLink>
          </li>
        </ul>
      )}
    </div>
    );
};

export default NavBar;