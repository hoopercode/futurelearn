import React from 'react';
import './AboutUs.css';
import RobProfile from '../images/RobProfile.png';  // Import Rob's profile image
import JonoProfile from '../images/JonoProfile.png'; // Import Jonothan's profile image

function AboutUs() {
  return (
    <div id="about" className="about-page"> {/* Correct ID for linking */}
      <h1>About Us</h1>
      <div className="about-container">
        <div className="profile">
          <img src={RobProfile} alt="Rob Hooper" className="profile-img" />
          <h2>Rob Hooper</h2>
          <p>
            With over 15 years of teaching experience across various curriculum areas, I specialize in integrating digital technology into teaching practices. My focus is on empowering schools to adapt to the digital age through AI and professional development solutions.
          </p>
        </div>
        <div className="profile">
          <img src={JonoProfile} alt="Jonothan McDonald" className="profile-img" />
          <h2>Jonothan McDonald</h2>
          <p>
            Jonothan brings years of expertise in education and technology, working with schools to implement innovative solutions that improve both teaching and learning outcomes. His work focuses on personalized PD for educators and effective AI-driven assessment systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
