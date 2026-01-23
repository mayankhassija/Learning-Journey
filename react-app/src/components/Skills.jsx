import React, { useEffect } from 'react';
import { FaCode } from 'react-icons/fa';

const Skills = () => {
  const skills = [
    { name: "Full-Stack Dev", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "Python", level: 80 },
    { name: "React", level: 75 },
    { name: "Node.js", level: 80 },
    { name: "Database Design", level: 70 }
  ];

  useEffect(() => {
    // Animate skill bars on component mount
    const skillBars = document.querySelectorAll('.skill-level');
    skillBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = '0';
      
      setTimeout(() => {
        bar.style.width = width;
      }, 500);
    });
  }, []);

  return (
    <section id="skills" className="card fade-in">
      <div className="card-header">
        <h2 className="card-title">Skills</h2>
        <div className="card-icon">
          <FaCode />
        </div>
      </div>
      
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <div className="skill-name">
              {skill.name} <span>{skill.level}%</span>
            </div>
            <div className="skill-bar">
              <div className="skill-level" style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;