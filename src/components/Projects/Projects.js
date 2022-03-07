import React from 'react';
import { projectsList } from '../../projects.js';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
  console.log(projectsList[0].images);
  return (
    <div className='projects' id='projects'>
      <div className='projects__title flex-left'>
        <h2>PROJECTS</h2>
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
