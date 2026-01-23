import React, { useEffect, useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import useParticles from '../hooks/useParticles';

const Hero = () => {
  useParticles();
  const [cursorVisible, setCursorVisible] = useState(true);

  // Cursor blink animation
  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="welcome-section" className="hero-section">
      <canvas id="particles"></canvas>
      
      <div className="hero-container">
        <div className="profile-area">
          <div className="profile-img-container">
            <img 
              src="https://avatars.githubusercontent.com/u/230149509?v=4" 
              alt="Mayank Hassija" 
              className="profile-img"
            />
          </div>
        </div>

        <div className="intro-area">
          <h1>Hey, I'm <span className="gradient-text">Mayank Hassija</span></h1>
          <p className="typing">
            Full-Stack Developer
            <span className="cursor" style={{ opacity: cursorVisible ? 1 : 0 }}>_</span>
          </p>
          <p className="subtitle">Building professional, scalable web applications.</p>

          <div className="hero-social-links">
            <a 
              href="https://github.com/mayankhassija" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn github"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/mayankhassija" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-btn linkedin"
            >
              <FaLinkedin />
              <span>LinkedIn</span>
            </a>
            <a 
              href="mailto:mayankhassija@gmail.com" 
              className="social-btn email"
            >
              <FaEnvelope />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;