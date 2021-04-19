import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import ParticleBackground from '../components/ParticleBackground';

import pic1 from '../assets/images/trax2.png';
import pic2 from '../assets/images/wo.png';
import pic3 from '../assets/images/seedsmockup.png';
import config from '../../config';

import { LogoNodejs, LogoReact, LogoJavascript, LogoHtml5, LogoCss3, GitBranch } from 'react-ionicons';
import reduxLogo from '../assets/images/redux-logo-black-and-white.png';
import postgreSQLLogo from '../assets/images/postgresql.png';
import sequelizeLogo from '../assets/images/sequelize.png';
import restAPILogo from '../assets/images/rest-api.png';
import profilePic from '../assets/images/profilephoto.jpg';


const IndexPage = () => {



  return (
    <Layout>
      <section id="banner" >
      <ParticleBackground />
        <div className="inner">
          <h2>{config.heading}</h2>
          <p>{config.subHeading}</p>
          <ul className="actions special bring-front">
            <li className="hover-outline" style={{ width: '300px'}}>
                <a target="_blank" href="https://www.linkedin.com/in/stellashaymartin/" rel="noreferrer" className="button primary">
                  Connect with Me
                </a>
            </li>
          </ul>
        </div>
        <Scroll type="id" element="one">
          <a href="#one" className="more">
            Learn More
          </a>
        </Scroll>
      </section>

      <section id="one" className="wrapper style1 special" style={{ backgroundColor: '#F1F1F1'}}>
        <div className="inner">
          <header className="major">
            <h2>
              About Me
            </h2>
          </header>
            <div className="profile-pic">
              <div>
                <p>
                  <strong>A Marketer turned Software Engineer</strong>. <br/>I fell in love with coding after writing my first few lines of Javascript and instantly knew a career transition into engineering was in store for me. I decided to make my new passion an everyday reality by enrolling in Fullstack Academy's full-time immersive bootcamp, which has easily been one of the best professional decisions I've made.
                  <br />
                  <br />
                  Along with my coding knowledge, I have eight years experience across most disciplines in marketing, from graphic design to event planning to branding (and everything in between). Now I'm looking to combine my design skills, project management expertise, and love for code and problem-solving as a Front-end or Full Stack Engineer.
                </p>
                <ul className="actions special ">
                  <li>
                      <a target="_blank" rel="noreferrer" href="https://drive.google.com/file/d/13FHQd95FiKBts_CNa-goJFDa7I4dkVIn/view?usp=sharing" className="button resume">
                        Resume
                      </a>
                  </li>
                </ul>
              </div>
              <img src={profilePic} alt="Stella Martin" />
            </div>
        </div>
      </section>

      <section id="two" className="wrapper alt style2">
        <section className="spotlight">
          <div className="image">
            <img src={pic1} alt="" />
          </div>
          <div className="content">
            <h2>
              Trax: Discover new music
            </h2>
            <p>
              A playlist generator web app utilizing Spotify’s API that allows users to completely customize recommended playlists based on artists and genre seeds. Developed and designed in two weeks with React, Node.js, Express, OAuth, Bootstrap, and Spotify’s API.
            </p>
            <ul className="actions special ">
            <li>
                <a target="_blank" rel="noreferrer" href="https://trax-discover-new-music.herokuapp.com/" className="button primary">
                  Explore
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/stellam777/generate-spotify-playlist" className="button primary">
                  Github
                </a>
            </li>
          </ul>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic2} alt="" />
          </div>
          <div className="content">
            <h2>
              Wandered Off
            </h2>
            <p>
              A mobile app created to keep friends together whether they are hiking, skiing, biking, running, at a festival or just bar-hopping downtown. Built in two weeks with Google Maps API, React Native, Firestore, Firebase, and Expo.
            </p>
            <ul className="actions special ">
            <li>
                <a target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=DQKUZitJnY4" className="button primary">
                  Explore
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/The-LAN-Before-Time/WanderedOff" className="button primary">
                  Github
                </a>
            </li>
          </ul>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src={pic3} alt="" />
          </div>
          <div className="content">
            <h2>
              Seeds
            </h2>
            <p>
              An ecommerce site for plants. Created in five days with React, Redux, Node.js, Bootstrap, and PostgreSQL.
            </p>
            <ul className="actions special">
            <li>
                <a target="_blank" rel="noreferrer" href="https://plantingseeds.herokuapp.com/" className="button primary">
                  Explore
                </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/Zeldas-Zappers/grace-shopper" className="button primary">
                  Github
                </a>
            </li>
          </ul>
          </div>
        </section>
      </section>

      <section id="three" className="wrapper style3 special" style={{ backgroundColor: '#F1F1F1'}}>
        <div className="inner">
          <header className="major">
            <h2>Skills</h2>
          </header>
          <ul className="features">
            <li>
              <LogoJavascript
              color={"#000000"}
              width="80px"
              height="80px"
              />
              <p>JavaScript ES6</p>
            </li>
            <li>
              <LogoReact
              color={"#000000"}
              width="80px"
              height="80px"
              />
              <p>React</p>
            </li>
            <li>
              <LogoHtml5
              color={"#000000"}
              width="80px"
              height="80px"
              />
              <p>HTML5</p>
            </li>
            <li>
              <LogoCss3
              color={"#000000"}
              width="80px"
              height="80px"
              />
              <p>CSS3</p>
            </li>
            <li>
              <LogoNodejs
              color={"#000000"}
              width="80px"
              height="80px"
              />
              <p>Node.js/Express.js</p>
            </li>
            <li>
              <img src={postgreSQLLogo} alt="PostgreSQL Logo" style={{width: "75px", height: "75px"}}/>
              <p>PostgreSQL</p>
            </li>
            <li>
              <img src={reduxLogo} alt="Redux Logo" style={{width: "75px", height: "75px"}}/>
              <p>Redux</p>
            </li>
            <li>
              <img src={sequelizeLogo} alt="Sequelize Logo" style={{width: "75px", height: "75px"}}/>
              <p>Sequelize</p>
            </li>
            <li>
              <GitBranch
              color={"#000000"}
              width="80px"
              height="80px"
              />
              <p>Git</p>
            </li>
            <li>
              <img src={restAPILogo} alt="Rest APIs Logo" style={{width: "75px", height: "75px"}}/>
              <p>Rest APIs</p>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}

export default IndexPage;
