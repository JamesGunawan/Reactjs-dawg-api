import React from 'react'
import '../../App.css'

function About() {
    return (
      <>
        <h1>About Us</h1>
        <p>
          Welcome to our Dog API app! 🐶 Our goal is to bring you adorable and random dog pictures
          from the <a href="https://dog.ceo/dog-api/" target="_blank" rel="noopener noreferrer">Dog API</a>.
        </p>
  
        <h2>How It Works</h2>
        <ul>
          <li>We fetch random dog images from the Dog API.</li>
          <li>You can browse through different dog breeds.</li>
          <li>If you like a picture, simply click the "Like" button to save it.</li>
        </ul>
  
        <h2>How to Like a Picture</h2>
        <p>
          When you like a picture, it gets stored in your browser's local storage so you can
          revisit your favorite dogs later!
        </p>
  
        <h2>Why We Built This</h2>
        <p>
          We love dogs and wanted to create a fun, simple way for users to see and save their
          favorite dog pictures. Whether you're a dog lover or just want a quick smile, this app
          is for you!
        </p>
      </>
    );
  }

  
export default About;
