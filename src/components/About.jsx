import React from 'react';

const About = () => {
  const skills = [
    { 
      category: "Programming Languages", 
      items: [
        { name: "Java", level: "Proficient" },
        "JavaScript",
        "Python"
      ]
    },
    { 
      category: "Frontend Development", 
      items: [
        "React.js",
        "HTML5",
        "CSS3",
        "Tailwind CSS"
      ]
    },
    { 
      category: "Backend Development", 
      items: [
        "Node.js",
        { name: "Express.js", status: "Learning" },
        "MySQL",
        { name: "MongoDB", status: "Learning" },
        { name: "JWT", status: "Learning" }
      ]
    },
    { 
      category: "Developer Tools", 
      items: [
        "Git",
        "GitHub Actions",
        "VS Code",
        "Firebase",
        "PyCharm",
        { name: "AWS", level: "Basic" },
        "IntelliJ",
        "Jupyter Notebook"
      ]
    },
    { 
      category: "Core Competencies", 
      items: [
        "Data Structures",
        "Algorithms",
        "Problem Solving",
        "System Design",
        "Communication Skills",
        "Leadership",
        "Time Management"
      ]
    },
    {
      category: "API Development",
      items: [
        { name: "Microservices", status: "Learning" }
      ]
    }
  ];

  const achievements = [
    'Developed a real-time web application using JavaScript, CSS, and HTML',
    'Earned a 100-Day LeetCode Streak Badge',
    'Solved 180+ LeetCode problems across various topics',
    'Java [DSA] Certificate from Apna College',
    'Python [Basic] & SQL [Basic] Certificate from HackerRank'
  ];

  return (
    <section id="about" className="py-24 bg-primary min-h-screen flex items-center">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-primary">About </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="mt-4 text-secondary">Passionate about crafting efficient solutions and continuous learning</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* About Me Content */}
          <div className="space-y-6">
            <div className="bg-secondary/5 rounded-2xl p-6 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-primary mb-4">Background</h3>
              <div className="text-secondary leading-relaxed space-y-4">
                <p>
                  I'm a problem solver and passionate coder who loves turning ideas into real-world applications. With a strong foundation in Java, Data Structures, and Algorithms, I specialize in creating efficient and scalable solutions.
                </p>
                <p>
                  Currently exploring the fascinating world of AI and Machine Learning, I enjoy building projects that challenge my thinking and push me to learn more. When I'm not coding, I'm analyzing data, learning Japanese, or optimizing the next best solution.
                </p>
                <p className="text-accent italic">
                  For me, technology is not just about writing code—it's about creating impact.
                </p>
              </div>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-6 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors duration-300">
              <h3 className="text-xl font-semibold text-primary mb-4">What I Do</h3>
              <ul className="text-secondary space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Develop full-stack web applications with modern technologies
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Solve complex programming challenges on platforms like LeetCode
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Design and optimize database structures for efficient data management
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-accent mt-1 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Implement responsive and user-friendly interfaces
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-secondary/5 rounded-2xl p-6 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors duration-300">
            <h3 className="text-xl font-semibold text-primary mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, index) => (
                <div key={index}>
                  <h4 className="text-accent font-medium mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => {
                      if (typeof skill === 'string') {
                        return (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        );
                      } else {
                        return (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm hover:bg-secondary/20 transition-colors duration-200 flex items-center gap-1.5"
                          >
                            {skill.name}
                            {skill.level && (
                              <span className="text-xs text-accent">({skill.level})</span>
                            )}
                            {skill.status && (
                              <span className="text-xs text-accent">({skill.status})</span>
                            )}
                          </span>
                        );
                      }
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            <span className="text-primary">My </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h3>
          <div className="space-y-6">
            {/* College Education */}
            <div className="bg-secondary/5 rounded-2xl p-6 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors duration-300 transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h4 className="text-xl font-medium text-primary">Bachelor of Technology</h4>
                  <p className="text-secondary mt-1">Computer Science and Engineering</p>
                  <p className="text-accent mt-1">Rungta College of Engineering And Technology</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                    2022 - 2026
                  </span>
                </div>
              </div>
            </div>

            {/* School Education */}
            <div className="bg-secondary/5 rounded-2xl p-6 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors duration-300 transform hover:scale-[1.02]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                <div>
                  <h4 className="text-xl font-medium text-primary">Higher Secondary Education</h4>
                  <p className="text-secondary mt-1">Science Stream</p>
                  <p className="text-accent mt-1">Kendriya Vidyalaya No-1, Rewa</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                    2010 - 2022
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8">
            <span className="text-primary">My </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h3>
          <div className="bg-secondary/5 rounded-2xl p-6 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors duration-300 transform hover:scale-[1.02]">
            <ul className="text-secondary space-y-2">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-accent mr-2">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;