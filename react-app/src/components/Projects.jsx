import React from 'react';
import { FaRocket } from 'react-icons/fa';
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  const projects = [
    {
      title: "NCERT Textbook Downloader",
      description: "A full-stack web application enabling bulk downloading of NCERT textbooks for students and educators across India. Features automated updates, smart search, and responsive design.",
      image: "https://github.com/mayankhassija/NCERT-Textbook-Downloader/blob/main/public/preview.png?raw=true",
      features: ["Full-Stack", "Bulk Download", "Automated Updates", "Smart Search", "Responsive Design"],
      link: "https://mayankhassija.github.io/NCERT-Textbook-Downloader/"
    },
    {
      title: "Pong Game",
      description: "A classic Pong arcade game built with HTML5 Canvas and JavaScript. Features smooth animations, collision detection, and responsive controls for an engaging gaming experience.",
      image: "https://via.placeholder.com/400x200/1a1a2a/64ffda?text=Pong+Game",
      features: ["HTML5 Canvas", "JavaScript", "Game Physics", "Collision Detection", "Responsive Design"],
      link: "https://mayankhassija.github.io/pongame/"
    }
  ];

  return (
    <section id="projects" className="card fade-in">
      <div className="card-header">
        <h2 className="card-title">Featured Projects</h2>
        <div className="card-icon">
          <FaRocket />
        </div>
      </div>
      
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </section>
  );
};

export default Projects;