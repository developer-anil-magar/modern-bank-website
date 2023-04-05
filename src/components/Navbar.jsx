/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';

import { logo, close, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />

      {/* menu for larger devices */}

      <ul className=" sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* hamburger menu div for mobile devices */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggleMobileMenu ? close : menu}
          alt="menu"
          className="w-7 h-7 object-contain"
          onClick={() => setToggleMobileMenu((prev) => !prev)}
        />

        {/* div for mobile menu to show when the menu button is toggled. */}
        <div className={`${toggleMobileMenu ? 'flex' : 'hidden'} absolute top-20 right-4 p-6 bg-black-gradient mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
          <ul className=" flex flex-col  justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li key={nav.id} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ? 'mr-0' : 'mb-4'}`}>
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
