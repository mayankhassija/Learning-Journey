import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <aside className="sidebar fade-in">
      <div className="profile">
        <div className="avatar">
          <img src="https://avatars.githubusercontent.com/u/230149509?v=4" alt="Mayank Hassija" />
        </div>
        <h1 className="name">Mayank Hassija</h1>
        <div className="title">Software Developer</div>
        <div className="location">
          <FaMapMarkerAlt /> Gurugram, India
        </div>
      </div>
      
      <div className="contact-info">
        <h2 className="glitch" data-text="Contact">Contact</h2>
        <div className="contact-item">
          <div className="contact-icon">
            <FaEnvelope />
          </div>
          <div className="contact-text">
            <a href="mailto:mayankhassija@gmail.com">mayankhassija@gmail.com</a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <FaGithub />
          </div>
          <div className="contact-text">
            <a href="https://github.com/mayankhassija" target="_blank" rel="noopener noreferrer">
              github.com/mayankhassija
            </a>
          </div>
        </div>
        <div className="contact-item">
          <div className="contact-icon">
            <FaLinkedin />
          </div>
          <div className="contact-text">
            <a href="https://www.linkedin.com/in/mayankhassija/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/mayankhassija
            </a>
          </div>
        </div>
      </div>
      
      <div id="skills">
        <h2 className="glitch" data-text="Skills">Skills</h2>
        <div className="skills-container">
          <div className="skill-item">
            <div className="skill-name">Full-Stack Dev <span>85%</span></div>
            <div className="skill-bar">
              <div className="skill-level" style={{width: '85%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">JavaScript <span>90%</span></div>
            <div className="skill-bar">
              <div className="skill-level" style={{width: '90%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">Python <span>80%</span></div>
            <div className="skill-bar">
              <div className="skill-level" style={{width: '80%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">React <span>75%</span></div>
            <div className="skill-bar">
              <div className="skill-level" style={{width: '75%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">Node.js <span>80%</span></div>
            <div className="skill-bar">
              <div className="skill-level" style={{width: '80%'}}></div>
            </div>
          </div>
          <div className="skill-item">
            <div className="skill-name">Database Design <span>70%</span></div>
            <div className="skill-bar">
              <div className="skill-level" style={{width: '70%'}}></div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;