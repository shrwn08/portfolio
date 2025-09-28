import React from 'react';
import { FaSun, FaMoon } from "react-icons/fa";

function Header({isDark, navLinks, toggleTheme}) {
  return (
    <header className={`fixed top-0 w-full ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-md shadow-lg z-50`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-yellow-600 bg-clip-text text-transparent">
          Shrawan Kumar Singh
        
        </h2>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-purple-500 transition-colors font-medium">
              {link}
            </a>
          ))}
        </nav>

        <button
          onClick={toggleTheme}
          className={`p-2 rounded-full ${isDark ? 'bg-gray-800' : 'bg-gray-200'}`}
        >
          {isDark ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
}

export default Header