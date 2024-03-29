import React from 'react';
import { IconContext } from 'react-icons';

import { CgMenuRound } from 'react-icons/cg';

const Header = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div className='header'>
      <a href='/'>
        <h1 className='header__logo'>
          <span className='first'>Corey</span>{' '}
          <span className='last'>Miller</span>
        </h1>
      </a>
      <div className='header__hamburger' onClick={setIsMenuOpen}>
        <IconContext.Provider value={{ color: 'white', size: '3rem' }}>
          <CgMenuRound height='4rem' />
        </IconContext.Provider>
      </div>
      <ul className='header__list'>
        <li className='list__li btn sm'>
          <a href='/#about'>About</a>
        </li>
        <li className='list__li btn sm'>
          <a href='/#projects'>Projects</a>
        </li>
        <li className='list__li btn sm'>
          <a href='/#skills'>Skills</a>
        </li>
        <li className='list__li btn sm'>
          <a href='/#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
