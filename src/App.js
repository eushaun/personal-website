import React, { useState } from 'react';

// Custom icon components
const HomeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const CodeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

const MailIcon = ({ size = 18 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="M22 7l-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const GitHubIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const ExternalLinkIcon = ({ size = 16 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"></circle>
    <line x1="12" y1="1" x2="12" y2="3"></line>
    <line x1="12" y1="21" x2="12" y2="23"></line>
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
    <line x1="1" y1="12" x2="3" y2="12"></line>
    <line x1="21" y1="12" x2="23" y2="12"></line>
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
  </svg>
);

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Dynamic class names based on dark mode state
  const bgColor = darkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-gray-100";
  const textColor = darkMode ? "text-gray-100" : "text-gray-800";
  const headerBg = darkMode ? "bg-gray-800" : "bg-white";
  const cardBg = darkMode ? "bg-gray-800" : "bg-white";
  const cardHover = darkMode ? "hover:bg-gray-700" : "hover:bg-gray-50";
  const footerBg = darkMode ? "bg-black" : "bg-gray-800";
  const borderColor = darkMode ? "border-gray-700" : "border-gray-200";
  const linkColor = darkMode ? "text-indigo-400" : "text-indigo-600";
  const linkHoverColor = darkMode ? "hover:text-indigo-300" : "hover:text-indigo-800";
  const buttonBg = darkMode ? "bg-indigo-700" : "bg-indigo-600";
  const buttonHoverBg = darkMode ? "hover:bg-indigo-600" : "hover:bg-indigo-700";
  const secondaryBg = darkMode ? "bg-gray-700" : "bg-white";
  const secondaryText = darkMode ? "text-indigo-400" : "text-indigo-600";
  const tagBg = darkMode ? "bg-indigo-900" : "bg-indigo-100";
  const tagText = darkMode ? "text-indigo-300" : "text-indigo-800";
  const navItemActive = darkMode ? "bg-gray-700 text-indigo-400" : "bg-indigo-100 text-indigo-700";
  const navItemHover = darkMode ? "hover:bg-gray-700" : "hover:bg-gray-100";

  return (
    <div className={`min-h-screen flex flex-col ${bgColor} ${textColor} transition-colors duration-300`}>
      {/* Navigation */}
      <header className={`${headerBg} shadow-md transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex justify-between items-center">
            <div className={`text-xl font-bold ${linkColor}`}>Portfolio</div>
            <div className="flex items-center space-x-6">
              <button 
                onClick={() => setActiveSection('home')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  activeSection === 'home' ? navItemActive : navItemHover
                }`}
              >
                <HomeIcon />
                <span>Home</span>
              </button>
              <button 
                onClick={() => setActiveSection('projects')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  activeSection === 'projects' ? navItemActive : navItemHover
                }`}
              >
                <CodeIcon />
                <span>Projects</span>
              </button>
              <a 
                href="https://github.com/eushaun/personal-website" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  activeSection === 'source' ? navItemActive : navItemHover
                }`}
              >
                <GitHubIcon />
                <span>Source</span>
              </a>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${
                  activeSection === 'contact' ? navItemActive : navItemHover
                }`}
              >
                <MailIcon />
                <span>Contact</span>
              </button>
              <button 
                onClick={toggleDarkMode}
                className={`p-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} transition`}
                aria-label="Toggle dark mode"
              >
                {darkMode ? <SunIcon /> : <MoonIcon />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-12">
        {activeSection === 'home' && (
          <section className="max-w-3xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto bg-indigo-600 rounded-full mb-6 flex items-center justify-center text-white text-3xl font-bold">
                <img src="/logo192.png" alt="Logo" className="object-contain w-full h-full" />
              </div>
              <h1 className={`text-4xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Eu Shaun Lim</h1>
              <p className={`text-xl ${linkColor} mb-6`}>Data Engineer</p>
            </div>
            <p className={`text-lg mb-8 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              This website is built by AI. The initial template is generated by Claude 3.7 Sonnet, and polished by Qwen2.5-coder:14b using the Continue extension in VS Code.
              I asked Claude to make it aesthetically pleasing (with dark mode), and this is what it came up with.
            </p>
            <p className={`text-lg mb-8 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My role in this project is code editing through AI prompting, adding content, dockerizing and web deployment.
            </p>
            <p className={`text-lg mb-8 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My goal here is to see how well AI is able to create a website for someone with zero web development experience. 
              Also using this opportunity to learn web development tools (JavaScript, HTML, CSS) by going through and editing the AI-generated codebase (and asking AI for explanations in the process), 
              as well using reverse proxy tools like nginx for web deployments.          
            </p>
            <p className={`text-lg mb-8 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              My intention for this website is to showcase some hobby projects that I've been working on in my spare time.     
            </p>
            <p className={`text-lg mb-8 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Source code for this entire website is on Github! Also this website is hosted on a Raspberry Pi from my home.
            </p>
            <div className="flex justify-center gap-4">
              <button 
                onClick={() => setActiveSection('projects')}
                className={`${buttonBg} ${buttonHoverBg} text-white px-6 py-3 rounded-lg shadow-md transition`}
              >
                View My Work
              </button>
              <button 
                onClick={() => setActiveSection('contact')}
                className={`${secondaryBg} ${cardHover} ${secondaryText} border ${borderColor} px-6 py-3 rounded-lg shadow-sm transition`}
              >
                Contact Me
              </button>
            </div>
          </section>
        )}

        {activeSection === 'projects' && (
          <section>
            <h1 className={`text-3xl font-bold mb-12 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>My Projects</h1>
            <div className="grid md:grid-cols-2 gap-8">
              <div className={`${cardBg} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition`}>
                <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                  Project Preview
                </div>
                <div className="p-6">
                  <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>E-Commerce Platform</h2>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    A full-featured online store with product management, cart functionality, and payment processing.
                  </p>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-sm`}>React</span>
                    <span className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-sm`}>Node.js</span>
                    <span className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-sm`}>MongoDB</span>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="https://github.com/yourusername/project1" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 ${linkColor} ${linkHoverColor}`}>
                      <GitHubIcon />
                      <span>Code</span>
                    </a>
                    <a href="https://project1-demo.com" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 ${linkColor} ${linkHoverColor}`}>
                      <ExternalLinkIcon />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${cardBg} rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition`}>
                <div className="h-48 bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white text-xl font-bold">
                  Project Preview
                </div>
                <div className="p-6">
                  <h2 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Task Management App</h2>
                  <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
                    A productivity application with drag-and-drop interface, notifications, and collaborative features.
                  </p>
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-sm`}>React</span>
                    <span className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-sm`}>Firebase</span>
                    <span className={`px-3 py-1 ${tagBg} ${tagText} rounded-full text-sm`}>Tailwind</span>
                  </div>
                  <div className="mt-6 flex gap-3">
                    <a href="https://github.com/yourusername/project2" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 ${linkColor} ${linkHoverColor}`}>
                      <GitHubIcon />
                      <span>Code</span>
                    </a>
                    <a href="https://project2-demo.com" target="_blank" rel="noopener noreferrer" className={`flex items-center gap-1 ${linkColor} ${linkHoverColor}`}>
                      <ExternalLinkIcon />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {activeSection === 'contact' && (
          <section className="max-w-3xl mx-auto text-center">
            <h1 className={`text-3xl font-bold mb-8 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Get In Touch</h1>
            <p className={`text-lg mb-10 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Feel free to connect if you have any questions or want to work together!
            </p>
            <div className="flex justify-center gap-8 mb-12">
              <a 
                href="https://github.com/eushaun" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 p-4 ${cardBg} rounded-lg shadow-md hover:shadow-lg transition`}
              >
                <GitHubIcon size={32} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/eushaun" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`flex flex-col items-center gap-2 p-4 ${cardBg} rounded-lg shadow-md hover:shadow-lg transition`}
              >
                <LinkedinIcon size={32} className="text-blue-600" />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>LinkedIn</span>
              </a>
              <a 
                href="mailto:limeushaun99@gmail.com"
                className={`flex flex-col items-center gap-2 p-4 ${cardBg} rounded-lg shadow-md hover:shadow-lg transition`}
              >
                <MailIcon size={32} className={darkMode ? 'text-red-400' : 'text-red-500'} />
                <span className={darkMode ? 'text-gray-300' : 'text-gray-600'}>Email</span>
              </a>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className={`${footerBg} ${darkMode ? 'text-gray-400' : 'text-gray-300'} py-6 transition-colors duration-300`}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Eu Shaun Lim. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;