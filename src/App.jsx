import React, { useState, useEffect } from 'react';

export default function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  useEffect(() => {
    // Fetch the portfolio configuration data (avoid stale cache)
    const basePath = import.meta.env.BASE_URL || '/';
    const version = (import.meta && import.meta.env && import.meta.env.VITE_ASSET_VERSION) || Date.now();
    const configPath = `${basePath}portfolio.config.json?v=${version}`.replace('//', '/');

    fetch(configPath, { cache: 'no-store' })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        setPortfolioData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading portfolio data:', error);
        console.error('Attempted to fetch from:', configPath);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-20 w-20 border-4 border-white/30 border-t-white mx-auto"></div>
          <p className="mt-6 text-white text-xl font-semibold animate-pulse">Loading your portfolio...</p>
        </div>
      </div>
    );
  }

  if (!portfolioData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center">
        <div className="text-center">
          <p className="text-white text-xl font-semibold">Error loading portfolio data</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header */}
      <header className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 py-16 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-8">
          <h1 className="text-5xl font-bold text-white text-center mb-6">
            Sai Chandra Portfolio
          </h1>
          <div className="text-center">
            <h2 className="text-3xl text-blue-100 mb-6">Welcome to my portfolio website!</h2>
            <p className="text-xl text-blue-50 max-w-4xl mx-auto leading-relaxed">
              I’m Sai Chandra Reddy Mandadapu, a Data Analyst passionate about transforming data into actionable insights. I work across retail and marketing domains, leveraging analytics, statistical modeling, and interactive dashboards to drive smarter decisions, uncover customer behavior patterns, and accelerate business growth.
            </p>
          </div>
        </div>
      </header>

      {/* Download Resume & Contact */}
      <section className="py-16 bg-gradient-to-r from-indigo-100 to-purple-100">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-10">
            <a
              href={portfolioData.hero.ctaPrimary.href}
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {portfolioData.hero.ctaPrimary.label}
            </a>
            <a
              href={portfolioData.hero.ctaSecondary.href}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {portfolioData.hero.ctaSecondary.label}
            </a>
          </div>
          <div className="flex justify-center space-x-8">
            {portfolioData.hero.socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-125 hover:rotate-12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon type={social.type} />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">About Me</h2>
          <div className="max-w-5xl mx-auto space-y-8 text-gray-700 text-xl leading-relaxed">
            <p className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              I’m a passionate data professional with a solid foundation in computer science and a Master’s in Data Analytics Engineering from Northeastern University. My work focuses on translating complex data into business impact—developing predictive models, analyzing performance trends, and building interactive dashboards. I specialize in uncovering meaningful patterns, crafting data stories, and delivering insights and recommendations that support confident, data-driven decision-making.
            </p>
            <p className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              I’m deeply motivated to grow further in the world of data science, machine learning, and artificial intelligence. I’m always eager to upskill, explore new technologies, and take on challenging problems that make a difference. I actively seek opportunities where I can learn, innovate, and advance my career while contributing meaningfully to data-driven organizations.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {portfolioData.skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 border border-white/50"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="mb-4">
                  <SkillIcon skillName={skill.name} />
                </div>
                <span className="text-gray-800 font-semibold text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">Work Experience</h2>
          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border-l-4 border-blue-500"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{exp.role}</h3>
                    <p className="text-2xl text-blue-600 font-semibold">{exp.company}</p>
                  </div>
                  <span className="text-gray-600 font-bold text-lg bg-blue-100 px-4 py-2 rounded-full">{exp.period}</span>
                </div>
                <div className="text-gray-700 text-lg space-y-3">
                  {exp.bullets.slice(0, 4).map((bullet, bulletIndex) => (
                    <p key={bulletIndex} className="flex items-start">
                      <span className="text-blue-500 mr-3 text-xl">•</span>
                      <span>{bullet}</span>
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {portfolioData.projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-white/50"
              >
                <div className="mb-6">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{project.summary}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.slice(0, 4).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold border border-blue-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Impact:</h4>
                    <p className="text-green-700 font-semibold bg-green-50 p-3 rounded-lg border border-green-200">{project.impact}</p>
                  </div>

                  <div className="flex space-x-4">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">Education</h2>
          
          {/* Education Cards */}
          <div className="space-y-8">
            {portfolioData.education.map((edu, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-white/50 overflow-hidden transition-all duration-300 transform hover:scale-105"
              >
                <div className="flex">
                  {/* Left side - University Icon */}
                  <div className="w-28 bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <svg className="w-16 h-16 text-white animate-pulse" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                    </svg>
                  </div>
                  
                  {/* Right side - Education Details */}
                  <div className="flex-1 p-10">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-3xl font-bold text-gray-900 mb-3">{edu.degree}</h3>
                        <p className="text-2xl text-blue-600 font-bold mb-4">{edu.school}</p>
                        <p className="text-gray-600 text-xl font-semibold">{edu.period}</p>
                      </div>
                      {/* Removed Graduate/Undergraduate badge */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <p className="text-xl font-semibold">&copy; 2025 {portfolioData.site.author}. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            {portfolioData.hero.socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon type={social.type} />
              </a>
            ))}
          </div>
        </div>
      </footer>

      {/* Contact Form Modal */}
      {isContactModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            {isFormSubmitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p>Your message has been successfully sent. We will get back to you soon.</p>
                <button onClick={() => setIsContactModalOpen(false)} className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">Close</button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
                <form
                  onSubmit={(event) => {
                    event.preventDefault(); // Prevent page reload
                    const formData = new FormData(event.target);
                    fetch("https://formspree.io/f/mwpnvkkn", {
                      method: "POST",
                      body: formData,
                      headers: {
                        Accept: "application/json",
                      },
                    })
                      .then((response) => {
                        if (response.ok) {
                          setIsFormSubmitted(true); // Update the state
                        } else {
                          alert("Failed to submit the form. Please try again.");
                        }
                      })
                      .catch(() => {
                        alert("An error occurred. Please try again.");
                      });
                  }}
                >
                  <label htmlFor="first-name" className="block text-sm font-medium mb-1">First Name:</label>
                  <input type="text" id="first-name" name="first-name" className="w-full p-2 border rounded mb-4" required />

                  <label htmlFor="last-name" className="block text-sm font-medium mb-1">Last Name:</label>
                  <input type="text" id="last-name" name="last-name" className="w-full p-2 border rounded mb-4" required />

                  <label htmlFor="occupation" className="block text-sm font-medium mb-1">Occupation:</label>
                  <input type="text" id="occupation" name="occupation" className="w-full p-2 border rounded mb-4" />

                  <label htmlFor="organization" className="block text-sm font-medium mb-1">Organization:</label>
                  <input type="text" id="organization" name="organization" className="w-full p-2 border rounded mb-4" />

                  <label htmlFor="email" className="block text-sm font-medium mb-1">Email:</label>
                  <input type="email" id="email" name="email" className="w-full p-2 border rounded mb-4" required />

                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message:</label>
                  <textarea id="message" name="message" className="w-full p-2 border rounded mb-4" required></textarea>

                  <div className="flex justify-end">
                    <button type="button" onClick={() => setIsContactModalOpen(false)} className="mr-4 px-4 py-2 bg-gray-300 rounded">Cancel</button>
                    <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Send</button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// Social Icon Component
function SocialIcon({ type }) {
  const iconClass = "w-10 h-10";
  
  switch (type) {
    case 'github':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      );
    case 'email':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    default:
      return null;
  }
}

// Skill Icon Component (loads from public/Images with graceful fallback)
function SkillIcon({ skillName }) {
  const [imgError, setImgError] = useState(false);
  const iconClass = "w-12 h-12 mx-auto object-contain";

  const key = (skillName || "").toLowerCase().trim();
  const basePath = (import.meta && import.meta.env && import.meta.env.BASE_URL) || '/';

  // Map common skill names to specific files in public/Images
  const iconMap = {
    'python': `${basePath}Images/Python.jpg`,
    'r': `${basePath}Images/R.jpg`,
    'pandas': `${basePath}Images/pandas.png`,
    'numpy': `${basePath}Images/numpy.png`,
    'scikit-learn': `${basePath}Images/scikit learn.png`,
    'scikit learn': `${basePath}Images/scikit learn.png`,
    // BI / Visualization
    'power bi': `${basePath}Images/powerbi.png`,
    'powerbi': `${basePath}Images/powerbi.png`,
    'looker studio': `${basePath}Images/lookerstudio.png`,
    'lookerstudio': `${basePath}Images/lookerstudio.png`,
    // Warehouses / Analytics Engineering
    'bigquery': `${basePath}Images/bigquery.png`,
    'dbt': `${basePath}Images/dbt.png`,
    'sql': `${basePath}Images/mysql.png`,
    'mysql': `${basePath}Images/mysql.png`,
    'postgresql': `${basePath}Images/postgresql.png`,
    'sql server': `${basePath}Images/sqlserver.jpg`,
    'microsoft sql server': `${basePath}Images/sqlserver.jpg`,
    'oracle db': `${basePath}Images/oracle.png`,
    'oracle': `${basePath}Images/oracle.png`,
    'snowflake': `${basePath}Images/snowflake.png`,
    'spark': `${basePath}Images/spark.png`,
    'hadoop': `${basePath}Images/hadoop.png`,
    'hdfs': `${basePath}Images/hdfs.jpg`,
    'hive': `${basePath}Images/hive.png`,
    'kafka': `${basePath}Images/kafka.png`,
    'airflow': `${basePath}Images/airflow.png`,
    'databricks': `${basePath}Images/databricks.png`,
    'docker': `${basePath}Images/docker.png`,
    'kubernetes': `${basePath}Images/kubernetes.png`,
    'jenkins': `${basePath}Images/jenkins.png`,
    'aws': `${basePath}Images/aws.png`,
    'azure': `${basePath}Images/azure.png`,
    'excel': `${basePath}Images/excel.png`,
    'google analytics 4': `${basePath}Images/googleanalytics4.png`,
    'ga4': `${basePath}Images/googleanalytics4.png`,
    'google sheets': `${basePath}Images/googlesheets.png`,
    'sheets': `${basePath}Images/googlesheets.png`,
    'mongodb': `${basePath}Images/mongodb.png`,
    'tableau': `${basePath}Images/tableau.png`,
  };

  // Best-effort source selection: direct map, or try sensible fallbacks
  const candidateSrc = iconMap[key]
    || iconMap[key.replace(/-/g, ' ')]
    || iconMap[key.replace(/\s+/g, '-')]
    || iconMap[key.replace(/\s+/g, '')]
    || null;

  if (!imgError && candidateSrc) {
    return (
      <img
        className={iconClass}
        src={candidateSrc}
        alt={`${skillName} icon`}
        onError={() => setImgError(true)}
      />
    );
  }

  // Fallback: neutral badge with the first letter
  const initial = (skillName || '?').charAt(0).toUpperCase();
  return (
    <div className="w-12 h-12 mx-auto bg-gray-400 text-white rounded-md flex items-center justify-center font-bold">
      {initial}
    </div>
  );
}
