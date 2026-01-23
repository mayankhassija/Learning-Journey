import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="card fade-in">
      <div className="card-header">
        <h2 className="card-title">Education & Certification</h2>
        <div className="card-icon">
          <FaGraduationCap />
        </div>
      </div>
      
      <div className="edu-item">
        <h3 className="edu-title">Bachelor of Computer Applications</h3>
        <div className="edu-subtitle">Sushant University</div>
        <div className="edu-duration">2022 – 2025</div>
      </div>
      
      <div className="cert-item">
        <h3 className="cert-title">CS50x (Harvard)</h3>
        <div className="cert-issuer">Harvard University</div>
        <div className="cert-date">Completed 2025</div>
        <p>Harvard's introduction to computer science and programming, covering algorithms, data structures, and software development.</p>
        <a 
          href="https://certificates.cs50.io/aef0eca2-c889-4e13-bccc-411d960a3356" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cert-link"
        >
          View Certificate
        </a>
      </div>
    </section>
  );
};

export default Education;