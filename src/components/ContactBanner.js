import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import Button from './Button';

const ContactBannerStyles = styled.div`
  background-color: #eca3f5;
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (max-width: 768px) {
    .contactBannet__heading {
      font-size: 2.8rem;
    }
  }
`;
function ContactBanner() {
  return (
    <ContactBannerStyles>
      <div className="container">
        <div className="contactBanner__wrapper">
          <PText>Any Queries or Suggestions?</PText>
          <h3 className="contactBanner__heading">Let Me Know</h3>
          <Button btnText="Contact Now" btnLink="/contact" />
        </div>
      </div>
    </ContactBannerStyles>
  );
}

export default ContactBanner;
