import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import ProjectImg from '../assets/images/CovidTracker.PNG';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    background-color: white;

    transition: transform 0.2s;
    img {
      height: 100%;
      position: relative;

      &:hover {
        opacity: 0.3;
      }
    }
  }

  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
    /* transition: transform 0.2s;
    &:hover {
      opacity: 0.3;
    } */
  }
  .projectItem__info:hover {
    transform: scale(1.05) !important;
    overflow: hidden !important;
    border: 2.2px solid rgba(197, 115, 230, 0.883) !important;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
    position: relative;
    width: 300px;
  }

  .github,
  .ext {
    margin-top: 2rem;
    display: inline;
    margin-left: 8rem;
    text-align: center;
    width: 4rem;
    /* width: 100%; */

    /* text-align: center; */
    /* align-items: center;
    justify-content: center; */
  }
  .ext {
    margin-left: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = 'Project Name',
  desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  url = 'https://github.com/ArshWalker',
  link = 'https://github.com/ArshWalker',
}) {
  return (
    <ProjectItemStyles>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" className="boxy" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
        <p className="projectItem__desc">{desc}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <FaGithub className="github " />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FaExternalLinkAlt className="ext" />
        </a>
      </div>
    </ProjectItemStyles>
  );
}
