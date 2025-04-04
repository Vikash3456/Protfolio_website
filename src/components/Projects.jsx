import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Ride-Booking App",
      status: "Work in Progress",
      description: "A modern ride-booking application that allows users to book rides, track their location, and manage their trips efficiently.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      features: [
        "Real-time ride tracking",
        "User authentication",
        "Payment integration",
        "Responsive design"
      ],
      github: "https://github.com/Vikash3456/Ride-Booking-App.git",
      demo: "https://github.com/Vikash3456/Ride-Booking-App.git",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Workforce Management System",
      status: "Completed",
      description: "A comprehensive system for managing employee data, attendance, and HR processes efficiently.",
      tech: ["React JS", "Tailwind CSS", "LocalStroage", "Express"],
      features: [
        "Employee management",
        "Attendance tracking",
        "Leave management",
        "Performance analytics"
      ],
      github: "https://github.com/Vikash3456/workforce-management-app",
      demo: "https://github.com/Vikash3456/workforce-management-app",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "AnimaCanvas - Dynamic Web Animations",
      status: "Completed",
      description: "A creative web animation library that provides smooth, customizable animations for web applications.",
      tech: ["JavaScript", "CSS3", "HTML5"],
      features: [
        "Custom animation library",
        "Interactive animations",
        "Performance optimized",
        "Cross-browser support"
      ],
      github: "https://github.com/Vikash3456/-AnimaCanvas-Dynamic-Web-Animations",
      demo: "https://drive.google.com/file/d/1zDsaqzOzDwpPfEE-7iTYklF6t-y02fbJ/view?usp=sharing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="projects" className="py-24 bg-primary min-h-screen flex items-center">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-primary">My </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="mt-4 text-secondary">A collection of my work showcasing my skills and experience</div>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-secondary/5 rounded-2xl p-6 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors duration-300 transform hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-accent/10 rounded-lg text-accent">
                      {project.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{project.title}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === "Completed"
                      ? "bg-green-500/10 text-green-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-secondary mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-secondary">
                      <svg className="w-4 h-4 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary hover:text-accent transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-secondary hover:text-accent transition-colors duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 