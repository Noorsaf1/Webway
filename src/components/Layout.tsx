import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Moon, Sun } from 'lucide-react';
import { Toaster } from 'react-hot-toast';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Toaster position="top-right" />
      
      <nav className={`fixed w-full backdrop-blur-md z-50 transition-all duration-500 ${isScrolled ? 'bg-dark-900/90 shadow-lg shadow-primary-500/10' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white flex items-center gap-2 group">
                <Globe className="h-8 w-8 text-primary-400 transition-all duration-700 animate-float group-hover:text-primary-300 group-hover:rotate-180" />
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text transition-all duration-700 group-hover:tracking-wider">WEBWAY</span>
              </Link>
            </div>
            
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 rounded-full hover:bg-primary-800/20 transition-colors duration-300"
                aria-label={isDarkMode ? 'Aktivera ljust läge' : 'Aktivera mörkt läge'}
              >
                {isDarkMode ? (
                  <Sun className="h-6 w-6 text-primary-400" />
                ) : (
                  <Moon className="h-6 w-6 text-primary-400" />
                )}
              </button>
              
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  to="/tjanster"
                  className="text-primary-100 hover:text-primary-400 transition-all duration-500 hover:scale-110 relative group"
                >
                  Tjänster
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link 
                  to="/om-oss"
                  className="text-primary-100 hover:text-primary-400 transition-all duration-500 hover:scale-110 relative group"
                >
                  Om oss
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link 
                  to="/portfolio"
                  className="text-primary-100 hover:text-primary-400 transition-all duration-500 hover:scale-110 relative group"
                >
                  Portfolio
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-500 group-hover:w-full"></span>
                </Link>
                <Link 
                  to="/kontakt"
                  className="btn-primary animate-pulse-slow"
                >
                  Kontakta oss
                </Link>
              </div>
              <button 
                className="md:hidden text-white p-2 hover:bg-primary-800/20 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Stäng meny' : 'Öppna meny'}
              >
                <div className="relative w-6 h-6">
                  <span className={`absolute left-0 top-0.5 w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-3' : ''}`}></span>
                  <span className={`absolute left-0 top-3 w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                  <span className={`absolute left-0 top-5.5 w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45 top-3' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-dark-900/95 backdrop-blur-md rounded-lg mt-2 animate-fade-in">
              <Link 
                to="/tjanster"
                className="block py-3 px-4 text-primary-100 hover:bg-primary-800/50 transition-all duration-300 animate-fade-in-right"
                onClick={() => setIsMenuOpen(false)}
              >
                Tjänster
              </Link>
              <Link 
                to="/om-oss"
                className="block py-3 px-4 text-primary-100 hover:bg-primary-800/50 transition-all duration-300 animate-fade-in-right"
                style={{ animationDelay: '100ms' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Om oss
              </Link>
              <Link 
                to="/portfolio"
                className="block py-3 px-4 text-primary-100 hover:bg-primary-800/50 transition-all duration-300 animate-fade-in-right"
                style={{ animationDelay: '200ms' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/kontakt"
                className="block py-3 px-4 text-primary-100 hover:bg-primary-800/50 transition-all duration-300 animate-fade-in-right"
                style={{ animationDelay: '300ms' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakta oss
              </Link>
            </div>
          )}
        </div>
      </nav>

      {children}

      <footer className="bg-gradient-to-br from-dark-900 via-primary-900 to-dark-900 text-white py-20 border-t border-primary-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <Globe className="h-8 w-8 text-primary-400" />
                <span className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">WEBWAY</span>
              </div>
              <p className="text-primary-200">
                Vi hjälper företag att växa och lyckas i den digitala världen.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Tjänster</h3>
              <ul className="space-y-4">
                <li><Link to="/tjanster" className="text-primary-200 hover:text-primary-400 transition-colors">Webbutveckling</Link></li>
                <li><Link to="/tjanster" className="text-primary-200 hover:text-primary-400 transition-colors">SEO-optimering</Link></li>
                <li><Link to="/tjanster" className="text-primary-200 hover:text-primary-400 transition-colors">Digital strategi</Link></li>
                <li><Link to="/tjanster" className="text-primary-200 hover:text-primary-400 transition-colors">E-handel</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Företaget</h3>
              <ul className="space-y-4">
                <li><Link to="/om-oss" className="text-primary-200 hover:text-primary-400 transition-colors">Om oss</Link></li>
                <li><Link to="/portfolio" className="text-primary-200 hover:text-primary-400 transition-colors">Portfolio</Link></li>
                <li><Link to="/karriar" className="text-primary-200 hover:text-primary-400 transition-colors">Karriär</Link></li>
                <li><Link to="/kontakt" className="text-primary-200 hover:text-primary-400 transition-colors">Kontakt</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">Följ oss</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-primary-800/50 p-3 rounded-full text-primary-400 hover:text-white hover:bg-primary-700 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-primary-800/50 p-3 rounded-full text-primary-400 hover:text-white hover:bg-primary-700 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-primary-800/50 p-3 rounded-full text-primary-400 hover:text-white hover:bg-primary-700 transition-all">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-primary-800/30 mt-16 pt-8 text-center">
            <p className="text-primary-200">© 2024 WEBWAY. Alla rättigheter förbehållna.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}