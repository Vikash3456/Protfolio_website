import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Ride-Booking App",
      status: "Work in Progress",
      description: "Developing a ride-hailing app using MongoDB, Express.js, React Native, and Node.js. Implementing microservices architecture for scalable backend operations.",
      tech: ["MERN Stack", "Microservices", "React Native", "MongoDB", "Express.js", "Node.js", "Google Maps API", "AWS"],
      features: [
        "Real-time location tracking with Google Maps API",
        "User authentication and ride management",
        "Microservices architecture for scalability",
        "AWS S3 for image storage (Planned)",
        "EC2 for backend deployment (Planned)"
      ],
      image: "/ride-booking.png", // You'll need to add this image
      github: "#", // Add your GitHub link
      demo: "#", // Add your demo link
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Workforce Management System",
      description: "Engineered a comprehensive employee management application using React and JavaScript. Implemented secure user authentication and role-based access control.",
      tech: ["ReactJS", "Tailwind CSS", "Local Storage"],
      features: [
        "Secure user authentication",
        "Role-based access control",
        "Task management system",
        "Progress tracking",
        "Responsive UI with Tailwind CSS"
      ],
      image: "/workforce.png", // You'll need to add this image
      github: "#", // Add your GitHub link
      demo: "#", // Add your demo link
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: "AnimaCanvas",
      description: "Architected a canvas animation framework using React and GSAP. Engineered a dynamic image loading system for smooth animations.",
      tech: ["React.js", "GSAP", "Tailwind CSS", "JavaScript"],
      features: [
        "Dynamic image loading system",
        "Performance-optimized scrolling animations",
        "Complex animation sequences",
        "Synchronized transitions",
        "Responsive design"
      ],
      image: "/animacanvas.png", // You'll need to add this image
      github: "#", // Add your GitHub link
      demo: "#", // Add your demo link
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My <span className="text-blue-500">Projects</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A collection of my work showcasing my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900/50 rounded-lg border border-gray-800 overflow-hidden hover:border-blue-500/50 transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gray-800 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                    {project.icon}
                  </div>
                </div>
                {project.status && (
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-400 rounded-full text-sm">
                      {project.status}
                    </span>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="text-blue-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gray-800 text-white rounded-lg text-center hover:bg-gray-700 transition-colors duration-200"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg text-center hover:bg-blue-600 transition-colors duration-200"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects; 