import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#110720]/80 backdrop-blur-md border-b border-purple-900/30 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Handwritten Signature Brand */}
        <a 
          href="#home" 
          className="text-3xl font-signature font-bold bg-gradient-to-r from-purple-200 via-purple-400 to-fuchsia-400 bg-clip-text text-transparent hover:opacity-90 transition-opacity"
        >
          {data.personal.shortName || data.personal.name}
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          <a href="#home" className="hover:text-purple-400 transition-colors">Home</a>
          <a href="#about" className="hover:text-purple-400 transition-colors">About</a>
          <a href="#experience" className="hover:text-purple-400 transition-colors">Experience</a>
          <a href="#lab" className="hover:text-purple-400 transition-colors">Lab / Projects</a>
          <a href="#contact" className="hover:text-purple-400 transition-colors">Contact</a>

          {/* Connect CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:brightness-110 shadow-lg shadow-purple-600/30 transition-all cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="p-2 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#130722]/95 backdrop-blur-xl border-b border-purple-900/40 px-6 py-6 space-y-4">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-base font-medium text-slate-200 hover:text-purple-400"
          >
            Home
          </a>
          <a 
            href="#about" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-base font-medium text-slate-200 hover:text-purple-400"
          >
            About
          </a>
          <a 
            href="#experience" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-base font-medium text-slate-200 hover:text-purple-400"
          >
            Experience
          </a>
          <a 
            href="#lab" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-base font-medium text-slate-200 hover:text-purple-400"
          >
            Lab / Projects
          </a>
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="block py-2 text-base font-medium text-slate-200 hover:text-purple-400"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
}
