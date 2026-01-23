import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="footer fade-in">
      <div className="social-links">
        <a href="mailto:mayankhassija@gmail.com" className="social-link">
          <FaEnvelope />
        </a>
        <a href="https://github.com/mayankhassija" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/mayankhassija/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FaLinkedin />
        </a>
      </div>
      <p>© {currentYear} Mayank Hassija. All systems operational.</p>
    </footer>
  );
};

export default Footer;