import React from 'react';
import styled from 'styled-components';
import PText from './PText';
import MapImg from '../assets/images/map.png';

const MapStyle = styled.div`
  background: url(${MapImg}) no-repeat center / cover;
  opacity: 0.5;
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 20%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;
function Map() {
  return (
    <MapStyle>
      <div className="container">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>New Delhi, India.</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/d/u/0/viewer?ie=UTF8&oe=UTF8&t=m&vpsrc=0&msa=0&mid=1EKrvpydeECY7QwBRk_IUBcax79Y&ll=28.52742426035163%2C77.20898509999998&z=11"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open on Google Maps
          </a>
        </div>
      </div>
    </MapStyle>
  );
}

export default Map;
