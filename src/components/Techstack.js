import React from 'react';

import { CgCPlusPlus } from 'react-icons/cg';
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiJava,
  DiGit,
  DiHtml5,
  DiCss3,
} from 'react-icons/di';
import { SiFirebase } from 'react-icons/si';
import styled from 'styled-components';

const TechstackStyle = styled.div`
  .tech-icons {
    font-size: 4.9em !important;
    margin: 15px !important;
    padding: 20px !important;
    opacity: 0.93 !important;
    border: 1.7px solid rgba(200, 137, 230, 0.637) !important;
    vertical-align: middle !important;
    text-align: center !important;
    border-radius: 5px !important;
    display: inline-block !important;
    box-shadow: 4px 5px 4px 3px rgba(89, 4, 168, 0.137) !important;
    overflow: hidden !important;
    transition: all 0.4s ease 0s !important;
    /* float: left; */
  }

  @media (max-width: 767px) {
    .tech-icons {
      margin: 20px !important;
      display: inline-block !important;
    }
  }

  .tech-icons:hover {
    transform: scale(1.05) !important;
    overflow: hidden !important;
    border: 2.2px solid rgba(197, 115, 230, 0.883) !important;
  }
  .tech-icon-images {
    padding: 20px !important;
    line-height: 1.6 !important;
  }
`;

function Techstack() {
  return (
    <TechstackStyle>
      <div style={{ justifyContent: 'center', paddingBottom: '50px' }}>
        <div xs={4} md={2} className="tech-icons">
          <CgCPlusPlus />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <DiJavascript1 />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <DiNodejs />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <DiReact />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <DiMongodb />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <DiJava />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <DiHtml5 />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <DiCss3 />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <DiGit />
        </div>
        <div xs={4} md={2} className="tech-icons">
          <SiFirebase />
        </div>
      </div>
    </TechstackStyle>
  );
}

export default Techstack;
