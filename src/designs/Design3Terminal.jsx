import React, { useState } from 'react';
import { Terminal, Cpu, Activity, ShieldCheck, Cloud, ArrowUpRight, Download, Mail, Phone, MapPin, Play, RotateCcw } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function Design3Terminal({ data, onSelectProject, onOpenEdit }) {
  const { personal, socials, experiences, skills, projects } = data;
  const [cmdInput, setCmdInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState([
    {
      cmd: "whoami --verbose",
      output: `NAME:     ${personal.name}\nROLE:     ${personal.currentRole}\nINTERN:   Software Engineering Intern @ ${personal.company} (Jan 2026 — Present)\nSTUDY:    ${personal.degree} @ ${personal.university}\nLOCATION: ${personal.location}\nSTATUS:   [ONLINE] Ready for Full-Stack & AI/ML engineering challenges.`
    },
    {
      cmd: "npm view @hasaan_6/rag-chatbot-widget",
      output: `@hasaan_6/rag-chatbot-widget@latest | MIT | deps: react, @google/generative-ai, @supabase/supabase-js\ndist-tags: latest — Published by Hasaan Ahmad (hasaanahmadn6@gmail.com)`
    }
  ]);

  const runCommand = (rawCmd) => {
    const c = rawCmd.trim().toLowerCase();
    if (!c) return;

    if (c === "clear") {
      setTerminalLogs([]);
      setCmdInput("");
      return;
    }

    let out = "";
    if (c === "help") {
      out = `Available commands:\n  whoami      — Display engineer profile & education\n  icode       — Inspect iCode Software House internship\n  projects    — List 5 flagship AI & Full-Stack repositories\n  skills      — Print 7-layer technical toolkit\n  install     — Simulate npm i @hasaan_6/rag-chatbot-widget\n  contact     — Show direct email, WhatsApp & social endpoints\n  clear       — Clear terminal buffer`;
    } else if (c.includes("whoami")) {
      out = `${personal.bio}\n\n${personal.bioSecond}`;
    } else if (c.includes("icode") || c.includes("intern")) {
      const exp = experiences[0];
      out = `[${exp.period}] ${exp.title} @ ${exp.company}\n• Stack: React Native, Django, Python, REST APIs\n• Engineered Sale Prediction ML module & Automated Low-Stock Vendor Restock Ordering pipeline.`;
    } else if (c.includes("project") || c === "ls") {
      out = projects.map(p => `[${p.number}] ${p.title.padEnd(28, ' ')} | ${p.category} (${p.year})`).join('\n');
    } else if (c.includes("skill") || c.includes("stack")) {
      out = skills.categories.map(cat => `${cat.code} ${cat.title.padEnd(22, ' ')}: ${cat.items.join(', ')}`).join('\n');
    } else if (c.includes("install") || c.includes("npm")) {
      out = `+ @hasaan_6/rag-chatbot-widget@1.0.4\nadded 1 package, verified Supabase pgvector & Gemini 2.5 Flash bindings in 0.42s ✓`;
    } else if (c.includes("contact")) {
      out = `EMAIL:    ${personal.email}\nWHATSAPP: ${personal.phone}\nGITHUB:   ${socials.github}\nLINKEDIN: ${socials.linkedin}`;
    } else {
      out = `Command executed: "${rawCmd}" -> Type 'help' to see available portfolio inspection commands.`;
    }

    setTerminalLogs(prev => [...prev, { cmd: rawCmd, output: out }]);
    setCmdInput("");
  };

  return (
    <div className="min-h-screen bg-[#06090e] text-slate-200 font-mono selection:bg-emerald-500 selection:text-black">
      
      {/* Blueprint Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] -z-10"
        style={{
          backgroundImage: `linear-gradient(#10b981 1px, transparent 1px), linear-gradient(90deg, #10b981 1px, transparent 1px)`,
          backgroundSize: '32px 32px'
        }}
      />

      {/* Top System Telemetry Bar */}
      <header className="sticky top-0 z-40 bg-[#06090e]/90 backdrop-blur-md border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between text-xs">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-bold">
              SYS://HASAAN.AHMAD
            </span>
            <span className="hidden sm:inline text-slate-500">v2026.4 · UCP_CS · ICODE_ENG</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-slate-400">
            <a href="#term-hero" className="hover:text-emerald-400 transition-colors">~/terminal</a>
            <a href="#term-exp" className="hover:text-emerald-400 transition-colors">~/career_log</a>
            <a href="#term-projects" className="hover:text-emerald-400 transition-colors">~/repositories</a>
            <a href="#term-skills" className="hover:text-emerald-400 transition-colors">~/stack_matrix</a>
            <a href="#term-contact" className="hover:text-emerald-400 transition-colors">~/connect</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenEdit}
              className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:border-emerald-500/50 cursor-pointer"
            >
              [config]
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded bg-emerald-500 text-black font-bold hover:bg-emerald-400 transition-colors flex items-center gap-1"
            >
              <span>GET_CV.DOCX</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section: Split Telemetry + Interactive Live Shell */}
      <section id="term-hero" className="py-16 md:py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Engineer Spec Sheet (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-emerald-950/50 border border-emerald-500/30 text-emerald-400 text-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>ACTIVE_NODE: GUJRANWALA_PK // REMOTE_READY</span>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={personal.avatar}
                alt={personal.name}
                className="w-20 h-20 rounded-2xl object-cover border-2 border-emerald-500/50 grayscale contrast-125"
              />
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
                  {personal.name}
                </h1>
                <p className="text-xs text-emerald-400 mt-1">
                  {personal.currentRole}
                </p>
                <p className="text-[11px] text-slate-400 mt-0.5">
                  {personal.university}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {personal.bio}
            </p>

            {/* Telemetry Metric Cards */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span>CV_TAMPER_ACCURACY</span>
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <div className="text-xl font-bold text-emerald-400">90.4%+</div>
                <div className="text-[10px] text-slate-500">ELA + CNN TensorFlow</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span>NPM_REGISTRY</span>
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                </div>
                <div className="text-sm font-bold text-amber-400 truncate">@hasaan_6/rag</div>
                <div className="text-[10px] text-slate-500">Gemini + pgvector</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span>OBSERVABILITY</span>
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                </div>
                <div className="text-base font-bold text-cyan-400">Tracelens</div>
                <div className="text-[10px] text-slate-500">Distributed Spans & ML</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800">
                <div className="flex items-center justify-between text-[10px] text-slate-400 mb-1">
                  <span>CLOUD_INFRA</span>
                  <Cloud className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <div className="text-base font-bold text-purple-400">AWS EC2</div>
                <div className="text-[10px] text-slate-500">Docker · Vercel · SQL</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition-colors flex items-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (@Hasaan6)</span>
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-emerald-500/50 text-xs text-white transition-colors flex items-center gap-2"
              >
                <LinkedinIcon className="w-4 h-4 text-emerald-400" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Terminal Workbench (7 cols) */}
          <div className="lg:col-span-7 rounded-2xl bg-[#0a0f18] border border-emerald-500/30 shadow-2xl shadow-emerald-950/20 overflow-hidden">
            {/* Terminal Title Bar */}
            <div className="px-4 py-3 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs text-slate-400">hasaan@ucp-icode-workstation: ~/portfolio</span>
              </div>
              <button
                onClick={() => runCommand("clear")}
                className="text-[11px] text-slate-400 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>clear</span>
              </button>
            </div>

            {/* Quick Command Bar */}
            <div className="px-4 py-2 bg-slate-950 border-b border-slate-800/80 flex flex-wrap items-center gap-1.5 text-[11px]">
              <span className="text-slate-500 mr-1">Run:</span>
              {["help", "whoami", "icode", "projects", "skills", "install", "contact"].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => runCommand(cmd)}
                  className="px-2 py-0.5 rounded bg-slate-900 hover:bg-emerald-950 border border-slate-800 hover:border-emerald-500/50 text-emerald-400 transition-colors cursor-pointer"
                >
                  {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Output Window */}
            <div className="p-5 space-y-4 max-h-[380px] overflow-y-auto text-xs leading-relaxed">
              {terminalLogs.length === 0 && (
                <div className="text-slate-500">Terminal buffer cleared. Click a command above or type 'help' below.</div>
              )}
              {terminalLogs.map((entry, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-emerald-400">
                    <span>hasaan@ai-engine:~$</span>
                    <span className="text-white font-bold">{entry.cmd}</span>
                  </div>
                  <pre className="text-slate-300 whitespace-pre-wrap pl-4 border-l-2 border-emerald-500/30 font-mono text-[11px] sm:text-xs">
                    {entry.output}
                  </pre>
                </div>
              ))}

              {/* Active Prompt */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  runCommand(cmdInput);
                }}
                className="flex items-center gap-2 pt-2 border-t border-slate-800/60"
              >
                <span className="text-emerald-400 shrink-0">hasaan@ai-engine:~$</span>
                <input
                  type="text"
                  value={cmdInput}
                  onChange={(e) => setCmdInput(e.target.value)}
                  placeholder="Type a command (help, projects, skills, icode, contact)..."
                  className="w-full bg-transparent text-white placeholder-slate-600 focus:outline-none text-xs"
                />
                <button
                  type="submit"
                  className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-[10px] cursor-pointer"
                >
                  EXEC
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>

      {/* Experience / Career Log Section */}
      <section id="term-exp" className="py-16 border-t border-slate-800/80 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            01 // SYS_EXPERIENCE_LOG
          </span>
          <h2 className="text-2xl font-bold text-white font-sans">Engineering Experience</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={exp.id || idx}
              className="p-6 rounded-2xl bg-[#0a0f18] border border-slate-800 hover:border-emerald-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 text-xs text-emerald-400 mb-2">
                  <span>[{exp.period}]</span>
                  <span className="text-slate-500">PID: 00{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-white font-sans">{exp.title}</h3>
                <p className="text-xs text-amber-400 mb-3">@ {exp.company}</p>
                <p className="text-xs text-slate-300 leading-relaxed font-sans mb-4">
                  {exp.description}
                </p>
              </div>
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-800/80">
                {exp.tags.map((t, i) => (
                  <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-emerald-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Repositories & Case Studies Section */}
      <section id="term-projects" className="py-16 border-t border-slate-800/80 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
          <div className="flex items-center gap-3">
            <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
              02 // DEPLOYED_REPOSITORIES
            </span>
            <h2 className="text-2xl font-bold text-white font-sans">System Architecture & Projects</h2>
          </div>
          <span className="text-xs text-slate-400">TOTAL_REPOS: 11+ | FEATURED: 05</span>
        </div>

        <div className="space-y-6">
          {projects.map((proj, idx) => (
            <div
              key={proj.id || idx}
              className="rounded-2xl bg-[#0a0f18] border border-slate-800 hover:border-emerald-500/50 p-6 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-4 relative rounded-xl overflow-hidden border border-slate-800 h-48">
                <img src={proj.image} alt={proj.title} className="w-full h-full object-cover opacity-80" />
                <span className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/80 border border-emerald-500/40 text-[10px] text-emerald-400">
                  NODE_{proj.number} · {proj.year}
                </span>
              </div>

              <div className="lg:col-span-8 space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white font-sans">{proj.title}</h3>
                  <span className="text-xs text-amber-400">{proj.category}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {proj.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-[11px] font-sans">
                  <div className="p-2.5 rounded-lg bg-rose-950/20 border border-rose-900/30 text-slate-300">
                    <strong className="text-rose-400 font-mono block text-[10px] uppercase">Problem:</strong>
                    {proj.problem}
                  </div>
                  <div className="p-2.5 rounded-lg bg-emerald-950/20 border border-emerald-900/30 text-slate-300">
                    <strong className="text-emerald-400 font-mono block text-[10px] uppercase">Solution:</strong>
                    {proj.solution}
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.tags.map((t, i) => (
                      <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => onSelectProject(proj)}
                      className="px-3.5 py-1.5 rounded-lg bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition-colors cursor-pointer"
                    >
                      INSPECT_SPEC
                    </button>
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-3.5 py-1.5 rounded-lg bg-slate-900 border border-slate-700 hover:border-emerald-400 text-xs text-white flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>SOURCE</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Stack Matrix */}
      <section id="term-skills" className="py-16 border-t border-slate-800/80 max-w-7xl mx-auto px-6">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
            03 // TOOLKIT_DIAGNOSTICS
          </span>
          <h2 className="text-2xl font-bold text-white font-sans">7-Layer Technical Stack</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.categories.map((cat, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#0a0f18] border border-slate-800">
              <div className="text-xs text-emerald-400 font-bold mb-3 flex items-center justify-between">
                <span>[{cat.code}] {cat.title}</span>
                <Cpu className="w-3.5 h-3.5 text-slate-600" />
              </div>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {cat.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="text-emerald-500">▸</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Comms Endpoint */}
      <footer id="term-contact" className="py-16 border-t border-slate-800 bg-[#04060a]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs text-emerald-400">04 // ESTABLISH_CONNECTION</span>
            <h3 className="text-2xl font-bold text-white font-sans">{personal.name}</h3>
            <p className="text-xs text-slate-400">{personal.email} · {personal.phone} · {personal.location}</p>
          </div>

          <div className="flex flex-wrap gap-3">
            <a
              href={`mailto:${personal.email}`}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 text-black text-xs font-bold hover:bg-emerald-400 transition-colors"
            >
              INITIALIZE_EMAIL
            </a>
            <a
              href={personal.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white hover:border-emerald-400 transition-colors"
            >
              WHATSAPP_LINK
            </a>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white hover:border-emerald-400 transition-colors"
            >
              GITHUB_PROFILE
            </a>
          </div>
        </div>
      </footer>

    </div>
  );
}
