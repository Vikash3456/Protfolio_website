import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from './Hero';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  useEffect(() => {
    // Animate sections on scroll
    const sections = document.querySelectorAll('section');
    const headings = document.querySelectorAll('h3');
    
    sections.forEach(section => {
      gsap.fromTo(section, {
        opacity: 0,
        y: 50
      }, {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });
    });

    // Special animation for headings
    headings.forEach(heading => {
      gsap.fromTo(heading, {
        opacity: 0,
        scale: 0.8
      }, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        scrollTrigger: {
          trigger: heading,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, []);

  return (
    <div className="bg-primary transition-colors duration-300">
      <Hero />
    </div>
  );
};

export default Home;