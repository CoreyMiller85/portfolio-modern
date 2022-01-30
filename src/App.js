import React, { useState } from 'react';
import Header from './components/Header/Header';
import SlideMenu from './components/SlideMenu/SlideMenu';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';

import './App.scss';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='app'>
      <SlideMenu
        isMenuOpen={isMenuOpen}
        active={isMenuOpen ? 'active' : ''}
        setIsMenuOpen={toggleMenu}
      />

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={toggleMenu} />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default App;
