import React from 'react';
import MyNavLink from './MyNavLink';
import { MdTimer } from 'react-icons/md';
import { ImStatsDots } from 'react-icons/im';
import { FaHome } from 'react-icons/fa';

const Navmenu = () => {
    return (
        <ul className="hidden md:flex gap-6 items-center">
          <li>
            <MyNavLink to="/">
              <FaHome size={18} />
              <span className="ml-1">Home</span>
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/timeline">
              <MdTimer />
              <span className="ml-1">Timeline</span>
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to="/stats">
              <ImStatsDots />
              <span className="ml-1">Stats</span>
            </MyNavLink>
          </li>
        </ul>

    );
};

export default Navmenu;