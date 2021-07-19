import React from 'react';
import { MdDesktopMac, MdCode, MdSecurity } from 'react-icons/md';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  background-color: brown;
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle
          subheading="What skills i am good at"
          heading="Specialities"
        />
        <div className="services__allItems">
          <ServicesSectionItem
            icon={<MdDesktopMac />}
            title="Front-End Web Development"
            desc="I develop Front-End applications, websites with great performance and blazing fast speed."
          />
          <ServicesSectionItem
            icon={<MdSecurity />}
            title="Back-End Web Development"
            desc="I develop Back-End applications, which include API fetching, databases and authentication. "
          />
          <ServicesSectionItem
            icon={<MdCode />}
            title="Problem Solving & Thinking ability"
            desc="I know DS and Algo's which helps me to think about optimized solutions to the problem. I code in C++."
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
