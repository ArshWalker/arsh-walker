import React from 'react';
import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          'Developer',
          'ReactJS Developer',
          'Open Source Contributor',
          'MERN Stack Developer',
          'Football Entusiast',
          'Student',
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
