import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-primary flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative group">
              {/* Background blur effect */}
              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl group-hover:bg-blue-600/20 transition-colors duration-300"></div>
              
              {/* Image container */}
              <div className="relative">
                {/* Decorative ring */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-800 group-hover:opacity-100 transition duration-300"></div>
                
                {/* Image */}
                <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-0 border-accent/10">
                  <img
                    src={profileImg}
                    alt="Vikash Kushwaha"
                    className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="text-center md:text-left order-1 md:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
              <span className="text-primary">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Vikash Kushwaha
              </span>
            </h1>
            
            <p className="mt-3 text-secondary text-lg sm:text-xl italic">
              Are you Java? Because without you, I feel null.🫥
            </p>
            
            <p className="mt-4 text-secondary text-lg sm:text-xl max-w-2xl">
              Problem Solver | Java & DSA Expert | SQL Wizard | Seeking Internship to Drive Data-Driven Innovation
            </p>

            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
              {/* Primary Action Buttons */}
              <div className="flex gap-4 w-full md:w-auto justify-center md:justify-start">
                <button
                  onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                  className="bg-blue-500 hover:bg-blue-600 transition-colors duration-200 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
                >
                  <span>View Work</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <a
                  href="https://drive.google.com/file/d/1uhwFb0aViBy5UgE7j-URuQxv688FzTCK/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-200 text-white font-medium px-6 py-3 rounded-lg flex items-center space-x-2 shadow-lg hover:shadow-xl"
                >
                  <span>Resume</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </a>
              </div>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 w-full md:w-auto justify-center md:justify-start mt-4 md:mt-8">
                <a
                  href="https://github.com/Vikash3456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-accent/10 transition-colors duration-200 rounded-lg px-4 py-2 text-primary flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vikashkush345/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-accent/10 transition-colors duration-200 rounded-lg px-4 py-2 text-primary flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-.88-.016-2.005-1.22-2.005-1.22 0-1.41.952-1.41 1.94v5.669h-3v-11h2.84v1.58h.04c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.866z"/>
                  </svg>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://leetcode.com/u/vikashkushwaha123/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-accent/10 transition-colors duration-200 rounded-lg px-4 py-2 text-primary flex items-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.27 1.818l4.277 4.193.039.038c2.248 2.165 5.214 3.335 8.377 3.335 3.164 0 6.13-1.17 8.377-3.335l.039-.038 4.277-4.193a5.938 5.938 0 0 0 1.27-1.818 5.83 5.83 0 0 0 .349-1.017 5.527 5.527 0 0 0 .062-2.362 5.35 5.35 0 0 0-.125-.513 5.266 5.266 0 0 0-1.209-2.104l-3.854-4.126L11.478.438a1.374 1.374 0 0 0-.96-.438zM10.116 6.593h3.768l-5.175 5.588 2.855 2.855 2.32-2.855zm6.589 3.117.025-.028-5.588-5.588h3.768l2.855 2.855z"/>
                  </svg>
                  <span>LeetCode</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 