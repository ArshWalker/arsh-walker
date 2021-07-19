import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/ArshSaini-removebg.png';
import Type from '../components/Type';
import Resumecontent from '../components/Resumecontent';
import pdf from '../assets/data/ArshdeepResume.pdf';
import ContactBanner from '../components/ContactBanner';
import Techstack from '../components/Techstack';

const AboutPageStyles = styled.div`
  /*  */
  .container {
    padding: 15rem 0 10rem 0;
  }
  .button {
    font-size: 2.2rem;
    background-color: #be6adf;
    padding: 0.7em 2em;
    border: 2px solid var(--section-background-color);
    border-radius: 8px;
    display: inline-block;
    color: #000;
  }

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 1.5;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    /* span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    } */
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
  .Typewriter__wrapper {
    /* font-size: 2.2em !important; */
    color: #be6adf !important;
    font-weight: 600 !important;
  }
  .wave {
    animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
    animation-duration: 2.1s; /* Change to speed up or slow down */
    animation-iteration-count: infinite; /* Never stop waving :) */
    transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
    display: inline-block;
  }

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
  .name {
    font-size: 3.5rem;
    color: #be6adf !important;
    font-family: cursive;
    font-weight: 600;
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }

  /* resume section */
  .container1 {
    padding: 5rem 10rem;
    --section-background-color: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.582),
      rgba(12, 8, 24, 0.904)
    );
    background-image: var(--section-background-color) !important;
  }
  .resume-section {
    position: relative !important;
    padding-top: 110px !important;
    padding-bottom: 30px !important;
    /* background-image: var(--section-background-color) !important; */
    color: white !important;
  }
  .resume {
    padding-top: 10px;
    padding-bottom: 50px;
    display: flex;
  }
  .resume-left {
    padding-right: 80px !important;
  }

  .resume-right {
    padding-left: 80px !important;
  }
  .resume .resume-title {
    font-size: 3rem;
    font-weight: 600;
    padding-top: 30px;
    padding-bottom: 30px;
  }

  .resume .resume-item {
    padding: 0 0 15px 25px;
    margin-top: 2px;
    border-left: 2px solid #8a49a8;
    position: relative;
  }

  .resume .resume-item .resume-title {
    line-height: 18px;
    font-size: 1.5em;
    background: #5234795d;
    padding: 14px 15px;
    display: inline-block;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .resume .resume-item ul {
    padding-left: 20px;
    text-align: justify;
    font-size: 15px;
  }

  .resume .resume-item ul li {
    padding-bottom: 10px;
    list-style: none;
    font-size: 15px;
  }

  .resume .resume-item:last-child {
    padding-bottom: 0;
  }

  .resume .resume-item::before {
    content: '';
    position: absolute;
    width: 16px;
    height: 16px;
    border-radius: 50px;
    left: -9px;
    top: 0;
    background: #fff;
    border: 2px solid #8a49a8;
  }
  /* banner */
  .banner {
    .container {
      padding: 2rem 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container1 {
      padding: 2rem 0 10rem 0;
    }
    .resume {
      display: block;
    }
    .resume-left {
      padding-right: 15px !important;
      padding-left: 15px !important;
      display: column;
    }

    .resume-right {
      padding-right: 15px !important;
      padding-left: 15px !important;
    }
  }

  /* Skills */
  .conatiner2 {
    padding: 10rem 10rem;
    --image-gradient: linear-gradient(
      to bottom left,
      rgba(17, 16, 16, 0.678),
      rgba(12, 10, 22, 0.863)
    );
    background: var(--image-gradient);
    position: relative !important;
  }
  .project-heading {
    /* color: white !important; */
    font-size: 3rem;
    font-weight: 600;
    padding-top: 30px;
    padding-bottom: 30px;
  }
  h1 .purple {
    color: #c770f0 !important;
  }
  @media only screen and (max-width: 768px) {
    .conatiner2 {
      padding: 2rem 3rem;
    }
  }
`;
function About() {
  return (
    <AboutPageStyles>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="about__subheading">
              Hola!{' '}
              <span className="wave" role="img" aria-labelledby="wave">
                👋🏻
              </span>
              , I am <span className="name">Arshdeep Singh</span>
            </p>
            <h2 className="about__heading">
              <Type />
            </h2>
            <div className="about__info">
              <PText>
                People call me Arsh. I'm passionate web developer and Tech
                enthusiast based in New Delhi, India. I'm pursuing my UG from
                Amity University, Haryana in CSE major.
                <br /> <br />
                I started coding since I was in high school. Coding for me is an
                Art. Thinking about new ideas and able to foster them into some
                good work gives me much happiness and joy. Getting bugs
                frustrates some times, but able to resolve them hits different.
                My vision is to make the world a better place.
                <br />
                <br />
                Apart from coding/studies, I like to play Football and Minecraft
                with friends. Peace❤️
              </PText>
            </div>
            <a href={pdf} target="_blank" rel="noopener noreferrer">
              <input type="button" className="button" value="Download CV" />
            </a>
          </div>
          <div className="right">
            <img src={AboutImg} alt="me" />
          </div>
        </div>
      </div>
      <div className="container1">
        <div className="resume-section">
          <div className="resume">
            <div className="resume-left">
              <h1 className="resume-title">Education</h1>

              {/* trying first */}

              <Resumecontent
                title="B.Tech in Computer Science [AMITY University, Haryana] "
                date="2019 - Present"
                content={[`CGPA: 9.32 (Till 3rd Sem)`]}
              />
              <Resumecontent
                title="Higher Secondary (Class XIIth) [Guru Harkrishan Public School, New Delhi]"
                date="2018 - 2019"
                content={['Precentage: 88%']}
              />
              <Resumecontent
                title="Secondary (Class Xth) [Guru Harkrishan Public School, New Delhi] "
                date="2016 - 2017"
                content={['CGPA: 9.2']}
              />
            </div>
            <div className="resume-right">
              <h3 className="resume-title">Extracurricular & Achievements</h3>
              <Resumecontent
                title="Participated in LGM-Summer Of Code'21 (June-Aug)"
                content={[
                  'Worked on some Open Source projects. Added some features, fixed bugs and moreover contributed in open source. ',
                ]}
              />
              <Resumecontent
                title="National Mathematics Olympaid qualified. (2019)"
                content={[
                  'A Maths Olympaid held under All India Schools Mathematics Teachers Association. ',
                ]}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="conatiner2">
        <h1 className="project-heading">
          Technical <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
      </div>
      <div className="banner">
        <ContactBanner />
      </div>
    </AboutPageStyles>
  );
}

export default About;
