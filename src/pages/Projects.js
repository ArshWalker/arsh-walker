import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const ProjectsStyles = styled.div`
  --section-background-color: linear-gradient(
    to bottom left,
    rgba(17, 16, 16, 0.582),
    rgba(12, 8, 24, 0.904)
  );
  background-image: var(--section-background-color) !important;
  padding: 10rem 0;
  .projects__allItems {
    display: grid;

    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 1rem;
    color: var(--black);
    border-radius: 6px;
    outline: none;
  }
  .projects__searchBar .searchIcon {
    position: absolute;
    width: 2rem;
    right: 1rem;
  }
  .projects__searchBar .searchIcon path {
    color: var(--deep-dark);
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(ProjectInfo);

  function handleChange(e) {
    e.preventDefault(); // default no
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(ProjectInfo);
    }
  }

  useEffect(() => {
    if (searchText === '') return;
    setProjectData(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  return (
    <ProjectsStyles>
      <div className="container">
        <SectionTitle
          heading="Projects"
          subheading="some of my major projects"
        />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              value={searchText}
              onChange={handleChange}
              placeholder="Enter Project Name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((item) => (
            <ProjectItem
              key={item.id}
              title={item.name}
              img={item.img}
              desc={item.desc}
              url={item.url}
              link={item.link}
              // new
            />
          ))}
        </div>
      </div>
    </ProjectsStyles>
  );
}

export default Projects;
