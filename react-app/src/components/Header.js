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
        <a href="#welcome-section" className="nav-link" onClick={(e) => {
          e.preventDefault();
          handleScroll('welcome-section');
          setIsMenuOpen(false);
        }}>Home</a>
        <a href="#project-showcase" className="nav-link" onClick={(e) => {
          e.preventDefault();
          handleScroll('project-showcase');
          setIsMenuOpen(false);
        }}>Projects</a>
        <a href="#about" className="nav-link" onClick={(e) => {
          e.preventDefault();
          handleScroll('about');
          setIsMenuOpen(false);
        }}>About</a>
        <a href="#skills" className="nav-link" onClick={(e) => {
          e.preventDefault();
          handleScroll('skills');
          setIsMenuOpen(false);
        }}>Skills</a>
        <a href="#contact" className="nav-link" onClick={(e) => {
          e.preventDefault();
          const footer = document.querySelector('.footer');
          footer.scrollIntoView({ behavior: 'smooth' });
          setIsMenuOpen(false);
        }}>Contact</a>
      </nav>
    </header>
  );
};

export default Header;