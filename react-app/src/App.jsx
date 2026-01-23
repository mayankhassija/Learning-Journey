import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import TVShowcase from './components/TVShowcase.jsx';
import About from './components/About.jsx';
import Projects from './components/Projects.jsx';
import Education from './components/Education.jsx';
import Footer from './components/Footer.jsx';
import Sidebar from './components/Sidebar.jsx';
import useScrollAnimations from './hooks/useScrollAnimations.js';
import './App.css';

function App() {
  useScrollAnimations();

  return (
    <div className="app">
      {/* Animated background grid */}
      <div className="grid-bg"></div>
      
      <div className="container">
        <Header />
        
        {/* Hero Section */}
        <Hero />
        
        <hr className="section-divider" />
        
        {/* TV Showcase */}
        <TVShowcase />
        
        {/* Main content layout */}
        <div className="main-content">
          <Sidebar />
          
          <main className="main-panel">
            <About />
            <Projects />
            <Education />
          </main>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;