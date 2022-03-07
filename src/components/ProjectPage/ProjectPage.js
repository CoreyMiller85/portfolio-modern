import React from 'react';
import styled from 'styled-components';

const StyledImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-flow: row wrap;

  & img {
    width: 45%;
    margin: 1rem auto;
  }
`;
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
            {props.tags &&
              props.tags.map((item, i) => {
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
      <StyledImageContainer>
        {props.images
          ? props.images.map((image) => {
              return <img src={image} alt='image' />;
            })
          : null}
      </StyledImageContainer>
    </div>
  );
};

export default ProjectPage;
