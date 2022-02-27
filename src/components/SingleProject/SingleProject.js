import React from 'react';
import { Link } from 'react-router-dom';
import castrImg from '../../img/castr-screen.png';

const SingleProject = ({
  title,
  tags,
  desciption,
  gitLink,
  liveLink,
  img_src,
  link,
}) => {
  const insertTags = (tags) => {
    if (tags.length > 0) {
      const list = tags.map((tag) => <span>{tag}</span>);
      return list;
    }
    return null;
  };

  const tagList = insertTags(tags);

  return (
    <div className='single-project'>
      <div className='single-project__image'>
        <Link to={`/${link}`}>
          <img src={castrImg} alt='' />
        </Link>
      </div>
      <Link to={`/${link}`}>
        <h3 className='single-project__title'>{title}</h3>
      </Link>
      <div className='single-project__tags'>{tagList}</div>
      <p className='single-project__description'>{desciption}</p>
      <div className='single-project__buttons'>
        <a href={gitLink} target='_blank' rel='noreferrer'>
          <button className='btn white sm'>Github</button>
        </a>
        {liveLink ? (
          <a href={liveLink} target='_blank' rel='noreferrer'>
            <button className='btn green sm'>Live Demo</button>
          </a>
        ) : (
          <button className='btn green sm' disabled>
            Live Demo
          </button>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
