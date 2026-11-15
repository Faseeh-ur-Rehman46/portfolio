import React, { useState } from 'react';
import { ArrowUpRight, Sun, Moon, Download, Mail, Phone, MapPin, Plus } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function Design4Editorial({ data, onSelectProject, onOpenEdit }) {
  const { personal, socials, experiences, skills, projects } = data;
  const [darkStudio, setDarkStudio] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(projects[0]?.id);

  const bgMain = darkStudio ? "bg-[#0d0d0d] text-[#f5f3ef]" : "bg-[#f5f3ef] text-[#111111]";
  const borderCol = darkStudio ? "border-zinc-800" : "border-zinc-300";
  const mutedText = darkStudio ? "text-zinc-400" : "text-zinc-600";
  const cardBg = darkStudio ? "bg-zinc-900/60" : "bg-white/80";

  return (
    <div className={`min-h-screen ${bgMain} transition-colors duration-300 font-sans selection:bg-[#FF4F00] selection:text-white`}>
      
      {/* Top Architectural Grid Header */}
      <header className={`sticky top-0 z-40 backdrop-blur-md ${darkStudio ? 'bg-[#0d0d0d]/90' : 'bg-[#f5f3ef]/90'} border-b ${borderCol}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-12 items-center h-16 px-6">
          <div className="col-span-4 sm:col-span-3 flex items-center gap-2">
            <span className="w-3 h-3 bg-[#FF4F00] inline-block" />
            <a href="#ed-top" className="font-black tracking-tighter text-lg uppercase">
              HASAAN AHMAD
            </a>
          </div>

          <nav className={`hidden md:flex col-span-5 items-center gap-6 text-xs font-mono uppercase tracking-wider ${mutedText}`}>
            <a href="#ed-work" className="hover:text-[#FF4F00] transition-colors">01 / Work</a>
            <a href="#ed-career" className="hover:text-[#FF4F00] transition-colors">02 / Career</a>
            <a href="#ed-toolkit" className="hover:text-[#FF4F00] transition-colors">03 / Toolkit</a>
            <a href="#ed-contact" className="hover:text-[#FF4F00] transition-colors">04 / Contact</a>
          </nav>

          <div className="col-span-8 sm:col-span-9 md:col-span-4 flex items-center justify-end gap-2.5">
            <button
              onClick={() => setDarkStudio(!darkStudio)}
              className={`p-2 rounded-full border ${borderCol} hover:border-[#FF4F00] transition-colors cursor-pointer`}
              title="Toggle Light / Dark Editorial Mode"
            >
              {darkStudio ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5" />}
            </button>
            <button
              onClick={onOpenEdit}
              className={`px-3 py-1.5 text-[11px] font-mono uppercase border ${borderCol} hover:border-[#FF4F00] cursor-pointer`}
            >
              Edit
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3.5 py-1.5 text-xs font-bold uppercase bg-[#FF4F00] text-white hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              <span>CV</span>
              <Download className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Swiss Grid Hero Section */}
      <section id="ed-top" className={`border-b ${borderCol}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Hero Column (8 cols) */}
          <div className={`lg:col-span-8 p-6 sm:p-12 lg:p-16 lg:border-r ${borderCol} flex flex-col justify-between`}>
            <div>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono uppercase tracking-widest text-[#FF4F00] mb-6">
                <span>INDEX EDITION // 2026</span>
                <span>•</span>
                <span>{personal.university}</span>
              </div>

              <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tighter uppercase leading-[0.94]">
                FULL-STACK <br />
                <span className="text-[#FF4F00]">&amp; AI</span> SYSTEMS <br />
                ENGINEER.
              </h1>
            </div>

            <div className="mt-12 pt-8 border-t border-current/15 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {personal.bio}
              </p>
              <p className={`text-sm leading-relaxed ${mutedText}`}>
                {personal.bioSecond}
              </p>
            </div>
          </div>

          {/* Right Hero Column: Portrait & Ledger Metadata (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div className={`p-6 sm:p-10 border-b ${borderCol}`}>
              <div className="aspect-[4/4] w-full overflow-hidden bg-zinc-900 relative group">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-[#FF4F00] text-white text-[10px] font-mono uppercase">
                  FIG 01. HASAAN AHMAD
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-10 space-y-4 font-mono text-xs">
              <div className="flex justify-between py-2 border-b border-current/10">
                <span className={mutedText}>CURRENT ROLE</span>
                <span className="font-bold text-right">SWE Intern @ iCode</span>
              </div>
              <div className="flex justify-between py-2 border-b border-current/10">
                <span className={mutedText}>NPM PACKAGE</span>
                <a href={personal.npmPackageUrl} target="_blank" rel="noreferrer" className="font-bold text-[#FF4F00] hover:underline">
                  @hasaan_6/rag-chatbot
                </a>
              </div>
              <div className="flex justify-between py-2 border-b border-current/10">
                <span className={mutedText}>BASE</span>
                <span className="font-bold">Gujranwala, PK (Remote)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className={mutedText}>DIRECT</span>
                <a href={`mailto:${personal.email}`} className="font-bold hover:text-[#FF4F00]">
                  {personal.email}
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 01 / Selected Works Interactive Index Ledger */}
      <section id="ed-work" className={`border-b ${borderCol}`}>
        <div className="max-w-7xl mx-auto">
          
          {/* Section Title Row */}
          <div className={`px-6 sm:px-12 py-8 border-b ${borderCol} flex flex-wrap items-end justify-between gap-4`}>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF4F00]">01 / ARCHIVE &amp; CASE STUDIES</span>
              <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight mt-1">
                Selected Engineering Work (05)
              </h2>
            </div>
            <span className={`text-xs font-mono uppercase ${mutedText}`}>
              Click any row to open full architectural case study
            </span>
          </div>

          {/* Interactive Ledger Rows */}
          <div className="divide-y divide-current/15">
            {projects.map((proj, idx) => {
              const isActive = hoveredProject === proj.id;
              return (
                <div
                  key={proj.id || idx}
                  onMouseEnter={() => setHoveredProject(proj.id)}
                  onClick={() => onSelectProject(proj)}
                  className={`px-6 sm:px-12 py-8 transition-colors cursor-pointer group ${
                    isActive ? (darkStudio ? 'bg-zinc-900/90' : 'bg-white') : ''
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                    
                    <div className="lg:col-span-1 font-mono text-sm text-[#FF4F00] font-bold">
                      /{proj.number}
                    </div>

                    <div className="lg:col-span-4">
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight group-hover:text-[#FF4F00] transition-colors flex items-center gap-2">
                        <span>{proj.title}</span>
                        <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-[#FF4F00]" />
                      </h3>
                      <p className={`text-xs font-mono mt-1 ${mutedText}`}>
                        {proj.category} — {proj.year}
                      </p>
                    </div>

                    <div className="lg:col-span-4">
                      <p className={`text-xs sm:text-sm leading-relaxed ${mutedText}`}>
                        {proj.tagline}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {proj.tags.slice(0, 4).map((t, i) => (
                          <span key={i} className={`text-[10px] font-mono uppercase px-2 py-0.5 border ${borderCol}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="lg:col-span-3 flex items-center justify-end gap-4">
                      <div className="w-28 h-16 overflow-hidden border border-current/20 hidden sm:block shrink-0">
                        <img src={proj.image} alt={proj.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                      </div>
                      <span className="px-3.5 py-2 text-xs font-mono uppercase bg-[#FF4F00] text-white font-bold shrink-0">
                        Case Study ↗
                      </span>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 02 / Career & Education Split Architectural Grid */}
      <section id="ed-career" className={`border-b ${borderCol}`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12">
          
          <div className={`lg:col-span-4 p-6 sm:p-12 lg:border-r ${borderCol}`}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4F00]">02 / TRACK RECORD</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-2">
              Career Path &amp; Academic Foundation
            </h2>
            <p className={`text-xs font-mono mt-4 ${mutedText}`}>
              Building production React Native, Django, and ML systems at iCode Software House while completing B.S. Computer Science at UCP.
            </p>
          </div>

          <div className="lg:col-span-8 divide-y divide-current/15">
            {experiences.map((exp, idx) => (
              <div key={exp.id || idx} className="p-6 sm:p-10">
                <div className="flex flex-wrap items-baseline justify-between gap-2 mb-3">
                  <h3 className="text-xl sm:text-2xl font-black uppercase">{exp.title}</h3>
                  <span className="text-xs font-mono text-[#FF4F00] font-bold">{exp.period}</span>
                </div>
                <p className="text-xs font-mono uppercase tracking-wider mb-3">{exp.company} · {exp.role}</p>
                <p className={`text-sm leading-relaxed ${mutedText} mb-4`}>
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t, i) => (
                    <span key={i} className={`text-[11px] font-mono px-2.5 py-0.5 border ${borderCol}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 03 / Technical Matrix (7 Categories) */}
      <section id="ed-toolkit" className={`border-b ${borderCol}`}>
        <div className="max-w-7xl mx-auto">
          <div className={`px-6 sm:px-12 py-8 border-b ${borderCol}`}>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4F00]">03 / SPECIFICATIONS</span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight mt-1">
              Engineering Toolkit
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-current/15">
            {skills.categories.slice(0, 4).map((cat, idx) => (
              <div key={idx} className="p-6 sm:p-8">
                <div className="text-xs font-mono text-[#FF4F00] mb-2">/{cat.code}</div>
                <h3 className="text-lg font-black uppercase mb-4">{cat.title}</h3>
                <ul className={`space-y-1.5 text-xs font-mono ${mutedText}`}>
                  {cat.items.map((item, i) => (
                    <li key={i}>— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-3 border-t ${borderCol} divide-y sm:divide-y-0 sm:divide-x divide-current/15`}>
            {skills.categories.slice(4).map((cat, idx) => (
              <div key={idx} className="p-6 sm:p-8">
                <div className="text-xs font-mono text-[#FF4F00] mb-2">/{cat.code}</div>
                <h3 className="text-lg font-black uppercase mb-4">{cat.title}</h3>
                <ul className={`space-y-1.5 text-xs font-mono ${mutedText}`}>
                  {cat.items.map((item, i) => (
                    <li key={i}>— {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 / Editorial Footer */}
      <footer id="ed-contact" className="py-20 px-6 sm:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF4F00]">04 / INITIATE DIALOGUE</span>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-none mt-3">
              LET'S BUILD <br /> SOMETHING REAL.
            </h2>
          </div>

          <div className="lg:col-span-4 space-y-3 font-mono text-xs">
            <a
              href={`mailto:${personal.email}`}
              className="block w-full py-3.5 px-5 bg-[#FF4F00] text-white font-bold uppercase text-center hover:opacity-90 transition-opacity"
            >
              EMAIL: {personal.email}
            </a>
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              className={`block w-full py-3 px-5 border ${borderCol} font-bold uppercase text-center hover:border-[#FF4F00] transition-colors`}
            >
              WHATSAPP: {personal.phone}
            </a>
            <div className="flex gap-2 pt-1">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-2.5 border ${borderCol} text-center uppercase hover:border-[#FF4F00]`}
              >
                GitHub ↗
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className={`flex-1 py-2.5 border ${borderCol} text-center uppercase hover:border-[#FF4F00]`}
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <div className={`mt-16 pt-6 border-t ${borderCol} flex flex-wrap justify-between text-xs font-mono ${mutedText}`}>
          <span>© {new Date().getFullYear()} {personal.name} — ALL RIGHTS RESERVED</span>
          <span>GUJRANWALA, PK · UNIVERSITY OF CENTRAL PUNJAB</span>
        </div>
      </footer>

    </div>
  );
}
