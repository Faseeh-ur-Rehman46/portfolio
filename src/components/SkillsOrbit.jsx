import React from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Cpu, 
  Sparkles, 
  Globe, 
  Terminal,
  FileSpreadsheet
} from 'lucide-react';

export default function SkillsOrbit({ data }) {
  const categories = data.skills?.categories || [];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-purple-900/15 blur-[160px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Mission Statement */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-3">About &amp; Philosophy</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug">
            "I'm currently looking to join a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-300">cross-functional team</span> that values improving people's lives through accessible design &amp; scalable code."
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* Cosmic Orbital Planetary System */}
        <div className="relative flex flex-col items-center justify-center py-10">
          
          <div className="relative w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[580px] md:h-[580px] flex items-center justify-center">
            
            {/* Concentric Orbital Rings */}
            {/* Ring 3 (Outer) */}
            <div className="absolute inset-0 rounded-full border border-purple-500/15 shadow-[0_0_40px_rgba(113,39,186,0.1)]" />
            
            {/* Ring 2 (Middle) */}
            <div className="absolute inset-10 sm:inset-14 md:inset-16 rounded-full border border-purple-500/20 border-dashed" />
            
            {/* Ring 1 (Inner) */}
            <div className="absolute inset-20 sm:inset-28 md:inset-32 rounded-full border border-purple-400/30 shadow-[0_0_20px_rgba(147,51,234,0.15)]" />

            {/* Central Glowing Core / Sun */}
            <div className="relative z-10 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-purple-500 via-purple-700 to-indigo-900 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(168,85,247,0.7)] border-2 border-purple-300/40 animate-pulse">
              <Sparkles className="w-8 h-8 text-white drop-shadow-md" />
              <span className="text-[10px] sm:text-xs font-bold text-purple-100 tracking-wider uppercase mt-1">Skills</span>
            </div>

            {/* Orbiting Planets / Tech Nodes */}
            
            {/* Inner Orbit Items */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-1">
              <div className="pointer-events-auto -translate-x-1/2 -translate-y-1/2 flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#180829] border border-cyan-500/50 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-900/30 hover:scale-125 transition-transform cursor-pointer">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                <span>React</span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-1" style={{ animationDelay: '-10s' }}>
              <div className="pointer-events-auto translate-x-1/2 translate-y-1/2 flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#180829] border border-emerald-500/50 text-emerald-300 text-xs font-semibold shadow-lg shadow-emerald-900/30 hover:scale-125 transition-transform cursor-pointer">
                <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
                <span>Data Entry & Excel</span>
              </div>
            </div>

            {/* Middle Orbit Items */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-2">
              <div className="pointer-events-auto -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A0A2E] border border-blue-500/50 text-blue-300 text-xs font-semibold shadow-lg shadow-blue-900/30 hover:scale-125 transition-transform cursor-pointer">
                <Terminal className="w-3.5 h-3.5 text-blue-400" />
                <span>TypeScript</span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-2" style={{ animationDelay: '-14s' }}>
              <div className="pointer-events-auto translate-x-1/2 translate-y-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1A0A2E] border border-fuchsia-500/50 text-fuchsia-300 text-xs font-semibold shadow-lg shadow-fuchsia-900/30 hover:scale-125 transition-transform cursor-pointer">
                <Database className="w-3.5 h-3.5 text-fuchsia-400" />
                <span>SQL & CRM</span>
              </div>
            </div>

            {/* Outer Orbit Items */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-3">
              <div className="pointer-events-auto -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#160626] border border-purple-400/50 text-purple-200 text-xs font-semibold shadow-lg shadow-purple-900/40 hover:scale-125 transition-transform cursor-pointer">
                <Globe className="w-3.5 h-3.5 text-purple-300" />
                <span>Next.js</span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-3" style={{ animationDelay: '-12s' }}>
              <div className="pointer-events-auto translate-x-1/2 translate-y-1/2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#160626] border border-amber-500/50 text-amber-300 text-xs font-semibold shadow-lg shadow-amber-900/40 hover:scale-125 transition-transform cursor-pointer">
                <Cpu className="w-3.5 h-3.5 text-amber-400" />
                <span>Python & AI</span>
              </div>
            </div>

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-orbit-3" style={{ animationDelay: '-24s' }}>
              <div className="pointer-events-auto -translate-y-1/2 flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#160626] border border-sky-400/50 text-sky-300 text-xs font-semibold shadow-lg shadow-sky-900/40 hover:scale-125 transition-transform cursor-pointer">
                <Server className="w-3.5 h-3.5 text-sky-400" />
                <span>Django & Cloud</span>
              </div>
            </div>

          </div>

          <p className="text-xs text-slate-400 mt-6 tracking-wide text-center">
            ✦ Core Technical & Data Operations Ecosystem
          </p>

        </div>

        {/* Organized Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {categories.map((cat, idx) => (
            <div 
              key={idx}
              className="p-6 rounded-2xl bg-gradient-to-b from-[#18092B]/80 to-[#10051E]/90 border border-purple-900/30 hover:border-purple-600/50 shadow-lg shadow-purple-950/30 transition-all hover:-translate-y-1"
            >
              <h3 className="text-sm font-bold text-white mb-4 pb-2 border-b border-purple-900/40 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-purple-500" />
                  <span>{cat.title}</span>
                </span>
                {cat.code && <span className="text-[11px] font-mono text-purple-400">{cat.code}</span>}
              </h3>
              <ul className="space-y-2">
                {cat.items.map((item, i) => (
                  <li key={i} className="text-xs text-slate-300 flex items-center gap-2">
                    <span className="text-purple-400 font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
