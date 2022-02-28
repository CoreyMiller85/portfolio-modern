import React from 'react';
import { projectsList } from '../../projects.js';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
  console.log(projectsList[0].images);
  return (
    <div className='projects' id='projects'>
      <div className='title pink-neon '>
        <div className='separator pink-neon '></div>
        <div className='tilt-right'>
          <span className='title__letter'>P</span>
          <span className='title__letter flicker-slow'>R</span>
          <span className='title__letter'>O</span>
          <span className='title__letter flicker-fast falling-left'>J</span>
          <span className='title__letter'>E</span>
          <span className='title__letter'>C</span>
          <span className='title__letter'>T</span>
          <span className='title__letter'>S</span>
        </div>
        <div className='separator pink-neon '></div>
      </div>
      <div className='projects__container'>
        {projectsList.map((project) => {
          return (
            <SingleProject
              title={project.title}
              tags={project.tags}
              description={project.description}
              gitLink={project.gitLink}
              liveLink={project.liveLink}
              link={project.link}
              mainImg={project.mainImage}
              images={project.images}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
