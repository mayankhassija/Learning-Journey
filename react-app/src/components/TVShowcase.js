import React, { useState, useEffect } from 'react';

const TVShowcase = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [loadTimeout, setLoadTimeout] = useState(false);

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
    setHasError(false);
    setLoadTimeout(false);
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    setHasError(false);
    setLoadTimeout(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  // Set timeout for iframe loading
  useEffect(() => {
    const timer = setTimeout(() => {
      if (isLoading) {
        setLoadTimeout(true);
        setIsLoading(false);
      }
    }, 10000); // 10 second timeout

    return () => clearTimeout(timer);
  }, [isLoading, currentProjectIndex]);

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
            {hasError && (
              <div className="error-overlay">
                <div className="error-icon">⚠️</div>
                <p>Failed to load {projects[currentProjectIndex].name}</p>
                <button onClick={() => handleProjectSelect(currentProjectIndex)} className="retry-btn">
                  Retry
                </button>
              </div>
            )}
            {loadTimeout && !hasError && (
              <div className="timeout-overlay">
                <div className="timeout-icon">⏱️</div>
                <p>Loading is taking longer than expected</p>
                <button onClick={() => handleProjectSelect(currentProjectIndex)} className="retry-btn">
                  Retry
                </button>
              </div>
            )}
            <iframe
              id="tv-iframe"
              src={projects[currentProjectIndex].url}
              title={`${projects[currentProjectIndex].name} Preview`}
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              style={{ opacity: (isLoading || hasError || loadTimeout) ? 0 : 1 }}
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
                aria-label={`Switch to ${project.name} project`}
                aria-pressed={currentProjectIndex === index}
                tabIndex={0}
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