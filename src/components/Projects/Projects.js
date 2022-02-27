import React from 'react';
import SingleProject from '../SingleProject/SingleProject';

const Projects = () => {
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
        <SingleProject
          title={'CASTr: Magic: The Gathering Visual Database'}
          tags={['React', 'Redux', 'node', 'axios', 'MongoDb']}
          desciption='This is a server for my Caster App, this server controls the API end points for searching my extensive MongoDB database of all printed Magic: The Gathering cards. It also controls the user database that is used for authentication and creating a repo of each users collected cards if they so choose. Created as a personal project for myself and friends to use to create and store card collections, and deck lists for playing MTG. Uses JSON Web Tokens for autheti'
          gitLink='https://github.com/CoreyMiller85/mtg-api-server'
          liveLink=''
          img_src='https://imgur.com/a/SyzN4Dc'
          link='castr'
        />
        <SingleProject
          title={'Placeholder Project'}
          tags={['React', 'Router', 'Redux']}
          desciption='Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, placeat delectus odit consequuntur dolores fugit enim reiciendis adipisci accusamus corporis expedita quaerat consectetur nemo vel. Facilis natus iste cumque veniam officia quas maiores voluptates quibusdam omnis! Recusandae numquam nulla commodi consequuntur fuga magni culpa odio. Aspernatur inventore officia iusto beatae.'
          gitLink='https://github.com/CoreyMiller85/mtg-api-server'
          liveLink=''
          link='brain'
        />
      </div>
    </div>
  );
};

export default Projects;
