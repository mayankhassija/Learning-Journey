import React from 'react';

const Hero = () => {
  return (
    <section id="welcome-section" className="hero-section fade-in">
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to My <span className="gradient-text">Digital Space</span>
        </h1>
        <p className="hero-subtitle">
          Passionate software developer crafting innovative solutions with modern technologies
        </p>
        <div className="hero-cta">
          <a href="#projects" className="cta-button primary">
            View My Work
          </a>
          <a href="#contact" className="cta-button secondary">
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;