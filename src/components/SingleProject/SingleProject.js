import React from 'react';
import { Link } from 'react-router-dom';
const SingleProject = ({
  title,
  tags,
  description,
  gitLink,
  liveLink,
  img_src,
  mainImg,
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
          <img src={mainImg} alt='' />
        </Link>
      </div>
      <Link to={`/${link}`}>
        <h3 className='single-project__title'>{title}</h3>
      </Link>
      <div className='single-project__tags'>{tagList}</div>
      <p className='single-project__description'>{description}</p>
      <div className='single-project__buttons'>
        <a href={gitLink} target='_blank' rel='noreferrer'>
          <button className='btn white sm'>Github</button>
        </a>
        {liveLink ? (
          <a href={liveLink} target='_blank' rel='noreferrer'>
            <button className='btn green sm'>Live Demo</button>
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default SingleProject;
