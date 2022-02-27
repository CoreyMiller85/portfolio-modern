import React from 'react';
import Header from '../Header/Header';
const ProjectPage = (props) => {
  return (
    <div class='project-page'>
      <div class='project-page__main-container'>
        <div class='project-page__title pink-neon'>
          <h1>{props.title || null}</h1>
        </div>
        <div class='project-page__tech'>
          <h3 className='project-page__subtitle'>Technologies Used</h3>
          <ul>
            {props.tech &&
              props.tech.map((item, i) => {
                return <li key={i}>{item}</li>;
              })}
          </ul>
        </div>

        <div className='project-page__description'>
          <h3 className='project-page__subtitle'>Description</h3>
          <p>{props.description}</p>
          <h4 className='project-page__subtitle'>Purpose:</h4>
          <p>{props.purpose}</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectPage;
