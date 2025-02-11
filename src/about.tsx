import React from 'react';
import './App.css';

const About = () => {
  return (
    <div className="about-container">
      {/* Navigation */}
      <nav className="nav-bar3">
        <span className="nav-item2">
          <a href="/" className="nav-item">HOME</a>
        </span>
        <span className="divider">//</span>
        <span className="nav-item1">ABOUT ME</span>
        <div className="nav-line"></div>
      </nav>

      {/* About Me Section */}
      <div className="about-content">
        <img src="pfp.JPG" alt="Your Image" className="about-image" />
        <div className="about-text">
          <h1 className="heading">about me</h1>
          <p className="text-block">
            I am a product designer and data scientist passionate about creating intuitive, data-driven solutions that enhance user experiences. 
            Previously, I worked at <a href="https://www.stamfordhealth.org/care-treatment/research/" className="underline">Stamford Health</a> where I analyzed cancer patient data using machine learning classification models for chemotherapy drug treatments. 
            Currently, I am a UX Researcher & Designer at <a href="https://www.sandboxnu.com/" className="underline">Sandbox</a>  where I'm exploring how specific product design decisions impact user behavior and response.
          </p>
          <p className="text-block">
            Have fun snooping around my portfolio!
          </p>
        </div>
      </div>

      {/* 3 Squares Section */}
      <div className="squares-container">
        <div className="square">
          <h3 className="square-title">WHAT IM UP TO</h3>
          <p className="square-content">enjoying my freshman year in boston and spending hours in chinatown</p>
        </div>
        <div className="square">
          <h3 className="square-title">MY HOBBIES</h3>
          <p className="square-content">playing legend of zelda: tears of the kingdom and mario kart, personal vlogging</p>
        </div>
        <div className="square">
          <h3 className="square-title">CURRENTLY BINGING</h3>
          <p className="square-content">suits - a show about lawyers in nyc; its on Netflix!</p>
        </div>
      </div>

      <div className="project-list">
        <h1 className="heading"> <a href="#" className="staricon">✶</a> photography</h1>
      </div>

      {/* Original Photo Library Section */}
      <div className="photo-library">
        <div className="photo-item">
          <img src="daves.jpg" alt="Enjoying a meal at Dave's Hot Chicken!" className="photo" />
          <div className="caption">Enjoying a meal at Dave's Hot Chicken!</div>
        </div>
        <div className="photo-item">
          <img src="paws.jpg" alt="At the Northeastern Paws event with puppies." className="photo" />
          <div className="caption">At the Northeastern Paws event with puppies.</div>
        </div>
        <div className="photo-item">
          <img src="hmart.jpg" alt="Grocery run at H-Mart, my go-to for Asian snacks." className="photo" />
          <div className="caption">Grocery run at H-Mart, my go-to for Asian snacks.</div>
        </div>
        <div className="photo-item">
          <img src="ghostie.JPG" alt="Spotted this ghost decoration during Halloween!" className="photo" />
          <div className="caption">Spotted this ghost decoration during Halloween!</div>
        </div>
        <div className="photo-item">
          <img src="harvard1.JPG" alt="A sunny day visiting Harvard." className="photo" />
          <div className="caption">A sunny day visiting Harvard.</div>
        </div>
        <div className="photo-item">
          <img src="the fg.JPG" alt="Late-night adventures in Boston." className="photo" />
          <div className="caption">Late-night adventures in Boston.</div>
        </div>
        <div className="photo-item">
          <img src="nitishbl.jpg" alt="Exploring the city with friends." className="photo" />
          <div className="caption">Exploring the city with friends.</div>
        </div>
        <div className="photo-item">
          <img src="harvard2.jpg" alt="More Harvard aesthetics!" className="photo" />
          <div className="caption">More Harvard aesthetics!</div>
        </div>
        <div className="photo-item">
          <img src="harvard3.jpg" alt="Checking out Harvard Yard." className="photo" />
          <div className="caption">Checking out Harvard Yard.</div>
        </div>
        <div className="photo-item">
          <img src="venice1.jpg" alt="Views from my Venice trip." className="photo" />
          <div className="caption">Views from my Venice trip.</div>
        </div>
        <div className="photo-item">
          <img src="cousin.JPG" alt="Spending time with family." className="photo" />
          <div className="caption">Spending time with family.</div>
        </div>
        <div className="photo-item">
          <img src="bestie.jpg" alt="A cute moment with my bestie." className="photo" />
          <div className="caption">A cute moment with my bestie.</div>
        </div>
        <div className="photo-item">
          <img src="christianscience.jpg" alt="Exploring Boston's iconic Christian Science Plaza." className="photo" />
          <div className="caption">Exploring Boston's iconic Christian Science Plaza.</div>
        </div>
        <div className="photo-item">
          <img src="venice2.jpg" alt="Another shot from Venice, the city of canals." className="photo" />
          <div className="caption">Another shot from Venice, the city of canals.</div>
        </div>
        <div className="photo-item">
          <img src="canes.jpg" alt="Cane’s chicken – an unbeatable classic." className="photo" />
          <div className="caption">Cane’s chicken – an unbeatable classic.</div>
        </div>
      </div>


    </div>
  );
};

export default About;
