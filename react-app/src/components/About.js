import React from 'react';
import { FaUserAstronaut } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="card fade-in">
      <div className="card-header">
        <h2 className="card-title">About</h2>
        <div className="card-icon">
          <FaUserAstronaut />
        </div>
      </div>
      <p>Passionate software developer with a focus on creating impactful, user-centric applications. Completed Bachelor of Computer Applications while building practical projects that solve real-world problems.</p>
      <p>My work combines technical expertise with creative problem-solving, resulting in applications that are both functional and engaging. I'm particularly interested in educational technology and tools that make knowledge more accessible.</p>
    </section>
  );
};

export default About;