import React, { useState, useEffect } from 'react';

const TVShowcase = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  const projects = [
    { 
      name: 'Pong Game', 
      url: '../pongame/index.html',
      description: 'A classic Pong game built with HTML5 Canvas'
    },
    { 
      name: 'NCERT Downloader', 
      url: '../NCERT-Textbook-Downloader/index.html',
      description: 'Full-stack application for downloading NCERT textbooks'
    },
  ];

  const handleProjectSelect = (index) => {
    setCurrentProjectIndex(index);
    setUserInteracted(true);
    setIsLoading(true);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  // Auto-play rotation (only if user hasn't interacted)
  useEffect(() => {
    if (userInteracted) return;

    const interval = setInterval(() => {
      setCurrentProjectIndex(prev => (prev + 1) % projects.length);
    }, 5000); // Rotate every 5 seconds

    return () => clearInterval(interval);
  }, [userInteracted, projects.length]);

  return (
    <section id="project-showcase" className="tv-showcase-section">
      <h2 className="section-title">Project Showcase</h2>
      <p className="section-subtitle">Interactive TV showcasing my projects</p>
      
      <div className="tv-setup-container">
        {/* TV Frame */}
        <div className="tv-frame">
          <div className="tv-screen">
            {isLoading && (
              <div className="loading-overlay">
                <div className="loading-spinner"></div>
                <p>Loading {projects[currentProjectIndex].name}...</p>
              </div>
            )}
            <iframe
              id="tv-iframe"
              src={projects[currentProjectIndex].url}
              title={`${projects[currentProjectIndex].name} Preview`}
              onLoad={handleIframeLoad}
              style={{ opacity: isLoading ? 0 : 1 }}
              allowFullScreen
            />
          </div>
        </div>

        {/* Remote Control */}
        <div className="remote-control">
          <div className="remote-header">
            <div className="brand">DEV-REMOTE</div>
            <div className="ir-blaster"></div>
          </div>
          <div className="remote-buttons-grid">
            {projects.map((project, index) => (
              <button
                key={index}
                className={`remote-btn ${currentProjectIndex === index ? 'active' : ''}`}
                onClick={() => handleProjectSelect(index)}
              >
                {project.name}
              </button>
            ))}
          </div>
          <div className="remote-info">
            <p className="project-description">
              {projects[currentProjectIndex].description}
            </p>
            <p className="remote-hint">
              {userInteracted ? 'Manual mode' : 'Auto-rotation mode (click any button to switch)'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TVShowcase;