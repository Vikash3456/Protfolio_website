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
      presentationLink: "https://docs.google.com/presentation/d/1CgTbRsil1H9Zf9Qpauhb77I0VkgRRGmB/edit?usp=sharing&ouid=106268868521889053153&rtpof=true&sd=true",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    }
  ];

  return (
    <section id="experience" className="py-24 bg-primary min-h-screen flex items-center">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-primary">Work </span>
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="mt-4 text-secondary">My professional journey and contributions</div>
        </div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 bg-secondary/5 rounded-2xl p-6 backdrop-blur-sm border border-accent/10 hover:border-accent/30 transition-colors duration-300 transform hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary">{exp.title}</h3>
                    <p className="text-accent mt-1">{exp.company}</p>
                  </div>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm">
                    {exp.period}
                  </span>
                </div>
              </div>

              <ul className="text-secondary space-y-2 mb-4">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start">
                    <svg className="w-5 h-5 text-accent mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
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
                  className="inline-flex items-center px-4 py-2 bg-accent/10 text-accent rounded-lg hover:bg-accent/20 transition-colors duration-200 mt-4"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" />
                  </svg>
                  View Presentation
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;