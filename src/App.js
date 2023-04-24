import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import linkedIn from './logo-linkedin.svg';
import github from './logo-github.svg';
import email from './mail-outline.svg';
import downArrow from './down-arrow.svg';
import CardModal from './CardModal';
import './App.css';
import './navBar.css';
import './buttonAnimations.css';
import './cardGrid.css';
import './CardModalStyle.css'
import { type, erase } from './typingEffect'; // import the functions from typingEffect.js
import { wait } from '@testing-library/user-event/dist/utils';



function App() {

  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);
  const [isModal3Open, setIsModal3Open] = useState(false);
  const [isModal4Open, setIsModal4Open] = useState(false);


  const handleCard1Click = () => {
    setIsModal1Open(true);
  };

  const handleCard2Click = () => {
    setIsModal2Open(true);
  };

  const handleCard3Click = () => {
    setIsModal3Open(true);
  };

  const handleCard4Click = () => {
    setIsModal4Open(true);
  };

  const handleCloseModal = () => {
    setIsModal1Open(false);
    setIsModal2Open(false);
    setIsModal3Open(false);
    setIsModal4Open(false);
  };

  useEffect(() => {
    type();
  }, []);


  return (


    <div className="App">

      <header className="App-header">

        <p>
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

        <h1>I am a passionate: </h1> <p2 id="typing-text"></p2>
        <h2 style={{ marginTop: 100 }}>View My Projects </h2>

        <img src={downArrow} style={{ cursor: 'pointer', marginTop: 70, marginBottom: 250 }} alt="scroll down" width="80" height="90" onClick={() => {
          window.scrollTo({ top: 1200, behavior: 'smooth' });
        }} className='down-arrow' />



  

        <div class="card-grid" style={{ marginTop: 200 }}>

          <div class="card 1" onClick={handleCard1Click}>
            <img src="/nodefit.JPG" alt="Card Image" />
            <h3>NodeFit - Full Stack Web Application</h3>
          </div>


          <div class="card 2" onClick={handleCard2Click} >
            <img src="linux.jpg" alt="Card Image" />
            <h3>Linux File System</h3>

          </div>

          <div class="card 3" onClick={handleCard3Click}>
            <img src="python.jpg" alt="Card Image" />
            <h3>Data Visualization and Analysis - Python Program</h3>

          </div>

          <div class="card" onClick={handleCard4Click}>
            <img src="music.png" alt="Card Image" />
            <h3>Instruments and Visualizers - React Application</h3>
          </div>

          {isModal1Open && (
            <CardModal
              onClose={handleCloseModal}
              cardTitle="NodeFit - Full Stack Web Application"
              cardText={<div class="field-items">
                - Successfully lead 6-person team for full-stack web app development.<br></br> <br></br>
                - NodeFit allows users to create workout plans, calculate data, and store info in a database.<br></br> <br></br>
                - Implemented a dynamic and interactive user interface using React to provide a seamless experience for creating and executing workout plans.<br></br><br></br>
                - Implemented a robust and scalable back-end infrastructure using Node.js and Express.js to manage user data, process requests and handle server-side logic.<br></br> <br></br>
                - Technologies Used: JavaScript, React, HTML, CSS, AWS EC2, Nginx Web Server, Git. <br></br> <br></br>
                <a href="https://docs.google.com/document/d/1Q_at0HnZfNOq3IssGkMxii56bL5OTIoDfD5Eu7bdmjw/edit?usp=sharing" target="_blank"><h3>View Documentation</h3></a>
              </div>
              } />
          )}

          {isModal2Open && (
            <CardModal
              onClose={handleCloseModal}
              cardTitle="Linux File System"
              cardText={<div class="field-items">
                - Within a team of 4, contributed to the development of a Linux file system using C, including crucial elements such as volume control block, bitmap freespace structure, directory entries, and functional commands.
                <br></br> <br></br>
                - Collaborated with a team using Git to integrate code changes and streamlined project execution using Oracle VM VirtualBox in a Linux environment.<br></br> <br></br>
                - Provided comprehensive project documentation and successfully completed the project within strict requirements and deadlines, earning an A grade.<br></br><br></br>

                <a href="https://docs.google.com/document/d/1--rGSqRF5b-5FBm92v_J4erJRGehV6c2SR07gXdllHY/edit?usp=sharing" target="_blank"><h3>View Documentation</h3></a>
              </div>
              } />
          )}

          {isModal3Open && (
            <CardModal
              onClose={handleCloseModal}
              cardTitle="Data Visualization and Analysis - Python Program"
              cardText={<div class="field-items">
                - Within a team of 2, developed a Python program for analyzing large data sets using data visualization techniques such as PCA and LLE.
                <br></br> <br></br>
                - Implemented k-means clustering for further data analysis and combined it with PCA for improved results.<br></br> <br></br>
                - Created a user-friendly GUI for data upload, algorithm selection, and simultaneous visualization display.<br></br><br></br>

                <a href="https://docs.google.com/document/d/1dMxhrs2wJS0M2tdtobjAeNU6wBgpZ7-6uzEQsDX9tIQ/edit?usp=sharing" target="_blank"><h3>View Documentation</h3></a>
              </div>
              } />
          )}

          {isModal4Open && (
            <CardModal
              onClose={handleCloseModal}
              cardTitle="Instruments and Visualizers - React Application"
              cardText={<div class="field-items">
                - Within a team of 4, developed and implemented a unique musical instrument component and its accompanying music visualizer using React, CSS, and TypeScript.
                <br></br> <br></br>
                - Contributed to the server-side playlist database by adding meta-data for songs, albums, and artists, ensuring songs were playable with any instrument or visualizer.<br></br><br></br>
              </div>
              } />
          )}


          
        </div>
        <h2>Contact Me: <a href="mailto:hadiramlaoui@gmail.com" target="_blank">hadiramlaoui@gmail.com</a></h2>

      </div>



    </div>


  );
}

export default App;