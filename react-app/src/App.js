import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TVShowcase from './components/TVShowcase';
import About from './components/About';
import Projects from './components/Projects';
import Education from './components/Education';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './App.css';

function App() {
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
          {/* You can keep sidebar if you want, or remove it */}
          {/* <Sidebar /> */}
          
          <main className="main-panel">
            <About />
            <Projects />
            <Education />
            <Skills />
          </main>
        </div>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;