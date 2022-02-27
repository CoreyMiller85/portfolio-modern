import React, { useState } from 'react';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import About from '../components/About/About';
import Skills from '../components/Skills/Skills';
import Contact from '../components/Contact/Contact';

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
