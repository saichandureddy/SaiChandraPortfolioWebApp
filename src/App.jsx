import React, { useState, useEffect } from 'react';

export default function App() {
  const [portfolioData, setPortfolioData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the portfolio configuration data
    const basePath = import.meta.env.BASE_URL || '/';
    const configPath = `${basePath}portfolio.config.json`.replace('//', '/');
    
    fetch(configPath)
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
          <h1 className="text-5xl font-bold text-white text-center mb-6 animate-bounce">
            Sai Chandra Portfolio
          </h1>
          <div className="text-center">
            <h2 className="text-3xl text-blue-100 mb-6 animate-fade-in-up delay-200">Hi, Welcome to my portfolio website!</h2>
            <p className="text-xl text-blue-50 max-w-4xl mx-auto leading-relaxed animate-fade-in-up delay-400">
              I am {portfolioData.site.author}, working as a Data Analyst → Data Scientist. 
              I build analytics and ML solutions that drive revenue, optimize inventory, and improve marketing efficiency 
              in the automotive retail industry.
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
              I am a passionate data professional with expertise in analytics, machine learning, and business intelligence. 
              My journey began in computer science and evolved into specializing in data-driven solutions for the automotive industry. 
              I have hands-on experience in building predictive models, optimizing inventory systems, and creating actionable insights from complex datasets.
            </p>
            <p className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              I hold a Master's degree in Data Analytics Engineering from Northeastern University and a Bachelor's in Computer Science. 
              My goal is to leverage data to solve real-world problems and create value for businesses and their customers. 
              I enjoy collaborating with cross-functional teams and mentoring others in their data science journey.
            </p>
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center animate-fade-in-up">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {portfolioData.skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg text-center hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-3 border border-white/50"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="mb-4 animate-bounce">
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
                      <div className="text-right">
                        <div className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-6 py-3 rounded-full font-bold text-lg border border-blue-200">
                          {edu.degree.includes('MS') || edu.degree.includes('Master') ? 'Graduate' : 'Undergraduate'}
                        </div>
                      </div>
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

// Skill Icon Component
function SkillIcon({ skillName }) {
  const iconClass = "w-12 h-12 mx-auto";
  const skill = skillName.toLowerCase();
  
  switch (skill) {
    case 'python':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="none">
          <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09-.33.22zM21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" fill="#306998"/>
          <path d="M21.1 6.11l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08-.33.23z" fill="#FFD43B"/>
        </svg>
      );
    case 'sql':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#336791">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.568 16.568C16.327 17.81 14.39 18.5 12 18.5s-4.327-.69-5.568-1.932C5.19 15.327 4.5 13.39 4.5 11s.69-4.327 1.932-5.568C7.673 4.19 9.61 3.5 12 3.5s4.327.69 5.568 1.932C18.81 6.673 19.5 8.61 19.5 11s-.69 4.327-1.932 5.568z"/>
          <path d="M12 5c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" fill="#fff"/>
          <text x="12" y="15" textAnchor="middle" fontSize="6" fill="#336791" fontFamily="Arial, sans-serif" fontWeight="bold">SQL</text>
        </svg>
      );
    case 'power bi':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#F2C811">
          <rect x="2" y="8" width="4" height="12" fill="#F2C811"/>
          <rect x="7" y="5" width="4" height="15" fill="#F2C811"/>
          <rect x="12" y="2" width="4" height="18" fill="#F2C811"/>
          <rect x="17" y="6" width="4" height="14" fill="#F2C811"/>
        </svg>
      );
    case 'looker studio':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#4285F4">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      );
    case 'scikit-learn':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#F7931E">
          <path d="M12.1 2.1c-5.4 0-9.8 4.4-9.8 9.8s4.4 9.8 9.8 9.8 9.8-4.4 9.8-9.8-4.4-9.8-9.8-9.8zm0 17.6c-4.3 0-7.8-3.5-7.8-7.8s3.5-7.8 7.8-7.8 7.8 3.5 7.8 7.8-3.5 7.8-7.8 7.8z"/>
          <circle cx="12" cy="12" r="3" fill="#F7931E"/>
        </svg>
      );
    case 'tensorflow':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#FF6F00">
          <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.708 5.307l-.02 5.357-6.132-3.557V18.5L12.46 24V0l10.54 5.856v5.307z"/>
        </svg>
      );
    case 'xgboost':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#1f77b4">
          <rect x="2" y="2" width="20" height="20" rx="2" fill="#1f77b4"/>
          <text x="12" y="15" textAnchor="middle" fontSize="8" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">XGB</text>
        </svg>
      );
    case 'time series':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#2E8B57">
          <path d="M3 17l6-6 4 4 8-8" stroke="#2E8B57" strokeWidth="2" fill="none"/>
          <circle cx="3" cy="17" r="2" fill="#2E8B57"/>
          <circle cx="9" cy="11" r="2" fill="#2E8B57"/>
          <circle cx="13" cy="15" r="2" fill="#2E8B57"/>
          <circle cx="21" cy="7" r="2" fill="#2E8B57"/>
        </svg>
      );
    case 'bigquery':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#4285F4">
          <path d="M12 0L2 6v12l10 6 10-6V6L12 0zm0 2.5L19.5 7 12 11.5 4.5 7 12 2.5zm-8 6.9L12 13.5v7L4 16.5v-7zm16 0v7L12 20.5v-7L20 9.4z"/>
        </svg>
      );
    case 'dbt':
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#FF694B">
          <path d="M12 0L2.5 6v12L12 24l9.5-6V6L12 0zm0 2.5L19 7v10l-7 4.5L5 17V7l7-4.5z"/>
          <text x="12" y="15" textAnchor="middle" fontSize="6" fill="#FF694B" fontFamily="Arial, sans-serif" fontWeight="bold">dbt</text>
        </svg>
      );
    default:
      return (
        <svg className={iconClass} viewBox="0 0 24 24" fill="#6B7280">
          <rect x="3" y="3" width="18" height="18" rx="2" fill="#6B7280"/>
          <text x="12" y="15" textAnchor="middle" fontSize="8" fill="white" fontFamily="Arial, sans-serif" fontWeight="bold">
            {skillName.charAt(0).toUpperCase()}
          </text>
        </svg>
      );
  }
}
