import React from 'react';

const SlideMenu = ({ isMenuOpen, active, setIsMenuOpen }) => {
  return (
    <div className={`slide-menu ${active}`} onClick={setIsMenuOpen}>
      <span className='close' aria-label='close menu' onClick={setIsMenuOpen}>
        X
      </span>
      <ul className='slide-menu__list'>
        <li className='slide-menu__li neon-font'>
          <a href='/#about'>About</a>
        </li>
        <li className='slide-menu__li neon-font'>
          <a href='/#projects'>Projects</a>
        </li>
        <li className='slide-menu__li neon-font'>
          <a href='/#skills'>Skills</a>
        </li>
        <li className='slide-menu__li neon-font'>
          <a href='/#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default SlideMenu;
