import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header fade-in">
      <div className="logo">
        <span>MH</span>
      </div>
      
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a 
          href="#welcome-section" 
          className="nav-link" 
          onClick={(e) => {
            e.preventDefault();
            handleScroll('welcome-section');
            setIsMenuOpen(false);
          }}
          aria-label="Navigate to Home section"
          tabIndex={0}
        >Home</a>
        <a 
          href="#project-showcase" 
          className="nav-link" 
          onClick={(e) => {
            e.preventDefault();
            handleScroll('project-showcase');
            setIsMenuOpen(false);
          }}
          aria-label="Navigate to Projects section"
          tabIndex={0}
        >Projects</a>
        <a 
          href="#about" 
          className="nav-link" 
          onClick={(e) => {
            e.preventDefault();
            handleScroll('about');
            setIsMenuOpen(false);
          }}
          aria-label="Navigate to About section"
          tabIndex={0}
        >About</a>
        <a 
          href="#contact" 
          className="nav-link" 
          onClick={(e) => {
            e.preventDefault();
            const footer = document.querySelector('.footer');
            footer.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false);
          }}
          aria-label="Navigate to Contact section"
          tabIndex={0}
        >Contact</a>
      </nav>
    </header>
  );
};

export default Header;