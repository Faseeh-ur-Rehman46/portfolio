import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Mail, ChevronDown } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, InstagramIcon } from './SocialIcons';

export default function Hero({ data }) {
  const { personal, socials } = data;
  const roles = personal.typewriterRoles || ["Software Engineer.", "UI/UX Designer."];

  // Typewriter state
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && displayedText === fullText) {
      speed = 2200; // Pause at full text
      const timeout = setTimeout(() => setIsDeleting(true), speed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      speed = 400;
    }

    const timer = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting ? fullText.substring(0, prev.length - 1) : fullText.substring(0, prev.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section id="home" className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-20 right-10 w-[350px] h-[350px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-6">
        
        {/* Top Avatar & Greeting Banner */}
        <div className="flex flex-col items-center justify-center relative mb-10">
          
          {/* Hand-drawn arrow doodle + Greeting Pill */}
          <div className="flex items-center gap-3 mb-6 relative">
            {/* SVG Doodle Arrow */}
            <svg 
              className="w-16 h-12 text-purple-400 -rotate-12 hidden sm:block animate-pulse" 
              viewBox="0 0 100 80" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M10 65 Q 40 15, 80 40" />
              <path d="M68 32 L 82 40 L 75 52" />
            </svg>

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-950/80 border border-purple-500/40 text-purple-200 text-xs sm:text-sm font-medium shadow-[0_0_20px_rgba(168,85,247,0.25)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{personal.greeting || `Hello! I Am ${personal.name}`}</span>
            </div>
          </div>

          {/* 3D Avatar Centerpiece with glowing halo and laptop frame */}
          <div className="relative group">
            {/* Purple radial aura behind avatar */}
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 rounded-full blur-2xl opacity-60 group-hover:opacity-85 transition-opacity duration-700 animate-pulse-glow" />
            
            {/* Avatar wrapper */}
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full p-1.5 bg-gradient-to-b from-purple-400/80 via-purple-900/50 to-slate-900 border border-purple-400/30 overflow-hidden shadow-2xl shadow-purple-900/50">
              <img 
                src={personal.avatar || "/faseeh.jpg"} 
                alt={personal.name} 
                className="w-full h-full object-cover object-[center_22%] brightness-125 contrast-105 rounded-full transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Floating Laptop / Tech badge peeking at bottom */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#1A0B2E]/90 border border-purple-500/40 rounded-full text-[11px] font-semibold text-purple-300 shadow-md backdrop-blur-md flex items-center gap-1.5 whitespace-nowrap">
              <Sparkles className="w-3 h-3 text-purple-400" />
              <span>{personal.currentRole}</span>
            </div>
          </div>
        </div>

        {/* Catchphrase & Headline */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-purple-400/90 font-medium">
            A {personal.sloganRole || "Designer who"}
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
            Judges a book by its{' '}
            <span className="relative inline-block text-purple-400">
              cover...
              {/* Hand-drawn SVG loop circle */}
              <svg 
                className="absolute -inset-x-3 -inset-y-2 w-[calc(100%+24px)] h-[calc(100%+16px)] pointer-events-none text-purple-500/80" 
                viewBox="0 0 150 60" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M10 28 C 15 8, 135 4, 142 28 C 146 45, 120 54, 75 56 C 25 58, 6 48, 14 30 C 18 20, 40 14, 80 14" />
              </svg>
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-400 italic">
            Because if the cover does not impress you what else can?
          </p>
        </div>

        {/* Dynamic Typewriter Role */}
        <div className="mt-8 text-center">
          <div className="inline-block text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100 min-h-[44px]">
            <span>I'm a </span>
            <span className="text-purple-400 border-b-2 border-purple-500/50 pb-0.5">
              {displayedText}
            </span>
            <span className="inline-block w-0.5 h-6 ml-1 bg-purple-400 align-middle animate-pulse" />
          </div>
        </div>

        {/* Short Bio & Context */}
        <div className="mt-6 max-w-2xl mx-auto text-center">
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {personal.bio}
          </p>
          {personal.company && (
            <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/30 border border-purple-700/40 text-purple-300 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              <span>Currently at <strong className="text-white">{personal.company}</strong></span>
            </div>
          )}
        </div>

        {/* Actions & Social Links */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#lab"
            className="w-full sm:w-auto px-7 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Explore Projects</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto px-7 py-3 rounded-full text-sm font-semibold bg-[#1C0C30] hover:bg-[#281242] border border-purple-700/50 text-slate-200 hover:text-white transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            <Mail className="w-4 h-4 text-purple-400" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Social Icons row */}
        <div className="mt-8 flex items-center justify-center gap-4 text-slate-400">
          {socials.github && (
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-purple-950/50 border border-purple-800/40 hover:text-purple-300 hover:border-purple-500/60 transition-all hover:scale-110"
              title="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
          {socials.linkedin && (
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-purple-950/50 border border-purple-800/40 hover:text-purple-300 hover:border-purple-500/60 transition-all hover:scale-110"
              title="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
          )}
          {socials.twitter && (
            <a 
              href={socials.twitter} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-purple-950/50 border border-purple-800/40 hover:text-purple-300 hover:border-purple-500/60 transition-all hover:scale-110"
              title="Twitter / X"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          )}
          {socials.instagram && (
            <a 
              href={socials.instagram} 
              target="_blank" 
              rel="noreferrer" 
              className="p-2.5 rounded-full bg-purple-950/50 border border-purple-800/40 hover:text-purple-300 hover:border-purple-500/60 transition-all hover:scale-110"
              title="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Scroll indicator */}
        <div className="mt-14 flex justify-center">
          <a href="#experience" className="text-purple-400/60 hover:text-purple-300 transition-colors animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </a>
        </div>

      </div>
    </section>
  );
}
