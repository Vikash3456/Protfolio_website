import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Analytics Intern",
      company: "Accenture North America",
      type: "Virtual Job Simulation",
      period: "Apr 2023 - May 2023",
      description: [
        "Completed a simulation focused on advising a hypothetical social media client as a Data Analyst at Accenture",
        "Cleaned, modelled and analyzed 7 datasets to uncover insights into content trends to inform strategic decisions",
        "Prepared a PowerPoint deck and video presentation to communicate key insights for the client and internal stakeholders"
      ],
      skills: ["Data Analysis", "Data Visualization", "Business Analytics", "PowerPoint", "Video Presentation"],
      presentationLink: "https://docs.google.com/presentation/d/1CgTbRsil1H9Zf9Qpauhb77I0VkgRRGmB/edit?usp=sharing&ouid=106268868521889053153&rtpof=true&sd=true", // Add your actual presentation link here
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">Work </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="mt-4 text-gray-400">My professional journey and contributions</div>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative pl-8 sm:pl-12 pb-8 last:pb-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 sm:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

              {/* Timeline Dot */}
              <div className="absolute left-[-4px] sm:left-0 top-0 w-2 h-2 rounded-full bg-blue-500"></div>

              {/* Experience Card */}
              <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm border border-gray-800">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div className="flex items-center space-x-3 mb-4 sm:mb-0">
                    <div className="p-2 bg-blue-500/10 rounded-lg text-blue-500">
                      {exp.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:items-end">
                    <span className="text-blue-400 font-medium">{exp.type}</span>
                    <span className="text-gray-500 text-sm">{exp.period}</span>
                  </div>
                </div>

                {/* Description Points */}
                <ul className="space-y-2 mb-4">
                  {exp.description.map((point, i) => (
                    <li key={i} className="flex items-start text-gray-400">
                      <span className="text-blue-500 mr-2">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Skills and Presentation Button Container */}
                <div className="flex flex-wrap items-center justify-between mt-4">
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {exp.presentationLink && (
                    <a
                      href={exp.presentationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-lg hover:bg-blue-500/20 transition-colors duration-200 ml-auto mt-4 sm:mt-0"
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" />
                      </svg>
                      View Presentation
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;