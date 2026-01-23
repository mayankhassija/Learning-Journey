import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(false);
  
  const handleScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  // Typing animation for logo
  const [logoText, setLogoText] = useState('MAYANKHASSIJA');
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
  
  const handleLogoMouseEnter = () => {
    const originalText = 'MAYANKHASSIJA';
    let iteration = 0;
    
    const interval = setInterval(() => {
      setLogoText(originalText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return originalText[index];
          }
          
          return chars[Math.floor(Math.random() * chars.length)];
        })
        .join(""));
      
      if(iteration >= originalText.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 3;
    }, 30);
    
    setTimeout(() => {
      setLogoText(originalText);
    }, 1000);
  };

  return (
    <header className="header fade-in">
      <div 
        className="logo" 
        onMouseEnter={handleLogoMouseEnter}
      >
        {logoText.substring(0, 6)}
        <span>{logoText.substring(6)}</span>
      </div>
      
      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href="#about" className="nav-link" onClick={(e) => {
          e.preventDefault();
          handleScroll('about');
          setIsMenuOpen(false);
        }}>About</a>
        <a href="#projects" className="nav-link" onClick={(e) => {
          e.preventDefault();
          handleScroll('projects');
          setIsMenuOpen(false);
        }}>Projects</a>
        <a href="#education" className="nav-link" onClick={(e) => {
          e.preventDefault();
          handleScroll('education');
          setIsMenuOpen(false);
        }}>Education</a>
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
      
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        style={{ 
          display: 'none', 
          background: 'none', 
          border: 'none', 
          color: 'var(--primary)',
          fontSize: '1.5rem',
          cursor: 'pointer'
        }}
      >
        <FaBars />
      </button>
    </header>
  );
};

export default Header;