import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import linkedIn from './logo-linkedin.svg';
import github from './logo-github.svg';
import email from './mail-outline.svg';
import downArrow from './down-arrow.svg';
import './App.css';
import './navBar.css';
import './buttonAnimations.css';
import './cardGrid.css';
import { type, erase } from './typingEffect'; // import the functions from typingEffect.js



function App() {
  useEffect(() => {
    type();
  }, []);


  return (


    <div className="App">

      <header className="App-header">

        <p className="flashy-text">
          Hello there, <br /> my name is Hadi.
        </p>

      </header>

      <nav className="navbar">
        <div>
          <a href="https://www.linkedin.com/in/hadi-ramlaoui-a25196214" target="_blank">
            <img src={linkedIn} alt="LinkedIn" width="52" height="32" />
          </a>
          <a href="https://github.com/HadiRam" target="_blank">
            <img src={github} alt="GitHub" width="52" height="32" />
          </a>
          <a href="mailto:hadiramlaoui@gmail.com" target="_blank">
            <img src={email} alt="Email" width="52" height="32" />
          </a>
        </div>
      </nav>

      <div className="main-content">
        <h1>I am a passionate: </h1> <p id="typing-text"></p>
        <h2 style={{ marginTop: 100 }}>View My Projects </h2>

        <img src={downArrow} style={{ cursor: 'pointer', marginTop: 70 }} alt="scroll down" width="80" height="80" onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }} className='down-arrow' />

        <div class="card-grid">
          <div class="card">
            <img src="path/to/image.jpg" alt="Card Image" />
            <h3>Card Title</h3>

          </div>
          <div class="card">
            <img src="path/to/image.jpg" alt="Card Image" />
            <h3>Card Title</h3>

          </div>

        </div>

      </div>














    </div>


  );
}

export default App;