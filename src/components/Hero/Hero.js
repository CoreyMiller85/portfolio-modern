import React from 'react';
import typing from '../../Videos/close-pavel-danilyuk.mp4';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__container'>
        <video autoPlay playsInline loop muted id='hero-video'>
          <source src={typing} type='video/mp4' />
        </video>
      </div>
      <div className='hero__content'>
        <h1 className='hero__content__headline'>
          Creator of powerful & well engineered user focused web applications
        </h1>
        <span className='hero__content__subtitle'>
          Let's work together to make something awesome!
        </span>
        <a href='#projects'>
          <button className='btn clear'>Projects</button>
        </a>
        <a href='#contact'>
          <button className='btn secondary'>Contact</button>
        </a>
      </div>
    </div>
  );
};

export default Hero;

// <div id="videoDiv">
// <video id="video1" preload="" autoplay="" muted="" playsinline="" loop="">
// <source src="video/t13.mp4" type="video/mp4">
// </video>
// </div>
