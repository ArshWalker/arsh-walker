import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1__title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  .copyright {
    background-color: var(--dark-bg);
    padding: 1rem 0;
    margin-top: 5rem;
  }

  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

function Footer() {
  const currentyear = new Date().getFullYear();
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1__title">Arsh Walker</h1>
          <PText>
            A Web Developer and CSE Student based in New Delhi, India.
            Self-motivated and Quick learner always loves to learn new things
            and work on real life projects.
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                type: 'Link',
                title: 'Home',
                path: '/home',
              },
              {
                type: 'Link',
                title: 'About',
                path: '/about',
              },
              {
                type: 'Link',
                title: 'Projects',
                path: '/project',
              },
              {
                type: 'Link',
                title: 'Contact',
                path: '/contact',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: '+91-9717407361',
                path: 'tel: +91-9717407361',
              },
              {
                title: 'arshwalker7@gmail.com',
                path: 'mailto:arshwalker7@gmail.com',
              },
              {
                title: 'New Delhi, India',
                path: 'https://google.com/maps',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Contact Info"
            links={[
              {
                title: 'facebook',
                path: 'https://www.facebook.com/arshdeepsingh.saini.355',
              },
              {
                title: 'LinkendIn',
                path:
                  'https://www.linkedin.com/in/arshdeep-singh-saini-1b35571b7/',
              },
              {
                title: 'Github',
                path: 'https://github.com/ArshWalker',
              },
              {
                title: 'Instagram',
                path: 'https://www.instagram.com/arsh_walker7/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>
            Copyright © {currentyear} - Made with ❤️ by{' '}
            <a href="/">Arshdeep.</a>
          </PText>
        </div>
      </div>
    </FooterStyles>
  );
}

export default Footer;
