import React from 'react';
import nodeLogoSmall from '../../img/logos/node-small.png';
import reactLogoSmall from '../../img/logos/react-small.png';
import mongoLogoSmall from '../../img/logos/mongodb-icon-small.png';
import cssLogoSmall from '../../img/logos/css3.png';
import htmlLogoSmall from '../../img/logos/html5.png';
import sassLogo from '../../img/logos/sassLogo.png';
import reduxLogo from '../../img/logos/reduxLogo.png';

const Skills = () => {
  return (
    <div className='Skills' id='skills'>
      <div className='flex-left'>
        <h2>SKILLS</h2>
      </div>
      <div className='Skills__logos'>
        <div className='wrapper'>
          <img src={reactLogoSmall} className='logo' alt='react logo' />
          <p>react</p>
        </div>
        <div className='wrapper'>
          <img src={reduxLogo} className='logo' alt='redux logo' />
          <p>redux</p>
        </div>
        <div className='wrapper'>
          <img src={nodeLogoSmall} className='logo' alt='node.js logo' />
          <p>node</p>
        </div>
        <div className='wrapper'>
          <img src={mongoLogoSmall} className='logo' alt='MongoDB logo' />
          <p>mongo db</p>
        </div>
        <div className='wrapper'>
          <img src={htmlLogoSmall} className='logo' alt='HTML5 logo' />
          <p>html 5</p>
        </div>
        <div className='wrapper'>
          <img src={cssLogoSmall} className='logo' alt='CSS3 logo' />
          <p>css</p>
        </div>
        <div className='wrapper'>
          <img src={sassLogo} className='logo' alt='Sass logo' />
          <p>sass</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
