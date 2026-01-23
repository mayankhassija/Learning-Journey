import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
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
        
        <div className="main-content">
          <Sidebar />
          
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