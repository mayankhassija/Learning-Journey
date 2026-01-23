import React from 'react';
import { FaRocket } from 'react-icons/fa';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "NCERT Textbook Downloader",
      description: "A full-stack web application enabling bulk downloading of NCERT textbooks for students and educators across India. Features automated updates, smart search, and responsive design.",
      image: "https://github.com/mayankhassija/NCERT-Textbook-Downloader/blob/main/public/preview.png?raw=true",
      features: ["Full-Stack", "Bulk Download", "Automated Updates", "Smart Search", "Responsive Design"],
      link: "https://github.com/mayankhassija/NCERT-Textbook-Downloader"
    }
  ];

  return (
    <section id="projects" className="card fade-in">
      <div className="card-header">
        <h2 className="card-title">Featured Project</h2>
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