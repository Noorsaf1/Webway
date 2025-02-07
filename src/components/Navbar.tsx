import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Globe, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isScrolled: boolean;
  isDarkMode: boolean;
  setIsDarkMode: (value: boolean) => void;
}

export default function Navbar({ isScrolled, isDarkMode, setIsDarkMode }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
  );
}