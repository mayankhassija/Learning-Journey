import { useEffect } from 'react';

const useScrollAnimations = () => {
  useEffect(() => {
    // Animation on scroll - converted from resume JavaScript
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
      appearOnScroll.observe(el);
    });
    
    // Smooth scrolling for navigation links - converted from resume JavaScript
    const handleSmoothScroll = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      
      e.preventDefault();
      
      const targetId = anchor.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
      }
    };
    
    // Add event listeners
    document.addEventListener('click', handleSmoothScroll);
    
    // Cleanup
    return () => {
      fadeElements.forEach(el => {
        appearOnScroll.unobserve(el);
      });
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);
};

export default useScrollAnimations;
