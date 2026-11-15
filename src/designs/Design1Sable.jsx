import React, { useState } from 'react';
import { ArrowUpRight, Download, Mail, Phone, MapPin, Sparkles, Send, CheckCircle2, ExternalLink, Terminal, Copy, Check } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';

export default function Design1Sable({ data, onSelectProject, onOpenEdit }) {
  const { personal, socials, experiences, skills, projects } = data;
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [copiedNpm, setCopiedNpm] = useState(false);

  const handleCopyNpm = () => {
    navigator.clipboard.writeText("npm i @hasaan_6/rag-chatbot-widget");
    setCopiedNpm(true);
    setTimeout(() => setCopiedNpm(false), 2000);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-[#050507] text-white selection:bg-cyan-400 selection:text-black font-sans">
      
      {/* Floating Pill Top Navigation (Exact Sable Style) */}
      <header className="sticky top-5 z-40 px-4">
        <div className="max-w-4xl mx-auto rounded-full bg-zinc-900/80 backdrop-blur-xl border border-zinc-800/90 px-5 py-3 flex items-center justify-between shadow-2xl shadow-black/80">
          <a href="#sable-home" className="text-lg font-extrabold tracking-tight text-white">
            HA<span className="text-cyan-400">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-xs font-medium text-zinc-400">
            <a href="#sable-home" className="hover:text-white transition-colors">Home</a>
            <a href="#sable-about" className="hover:text-white transition-colors">About</a>
            <a href="#sable-experience" className="hover:text-white transition-colors">Career</a>
            <a href="#sable-projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#sable-skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#sable-contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2.5">
            <button
              onClick={onOpenEdit}
              className="px-3 py-1.5 rounded-full text-[11px] font-medium bg-zinc-800/80 hover:bg-zinc-700 text-zinc-300 border border-zinc-700/60 transition-colors cursor-pointer"
            >
              Edit Info
            </button>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-colors"
            >
              <span>Download CV</span>
              <Download className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Giant Outlined DEVELOPER Watermark */}
      <section id="sable-home" className="relative pt-20 pb-28 md:pt-28 md:pb-36 overflow-hidden">
        
        {/* Outlined Watermark Text */}
        <div
          className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[17vw] font-black tracking-tighter uppercase whitespace-nowrap opacity-[0.04]"
          style={{ WebkitTextStroke: '2px #ffffff', color: 'transparent' }}
        >
          DEVELOPER
        </div>

        {/* Subtle Cyan Radial Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[140px] rounded-full pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center text-center">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-900/90 border border-zinc-800 text-[11px] font-mono text-zinc-300 mb-8">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>{personal.field} · {personal.university}</span>
            </div>

            {/* Monochrome Portrait / Avatar */}
            <div className="relative mb-8 group">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-zinc-800 group-hover:border-cyan-400/60 transition-all duration-500 bg-zinc-900 shadow-2xl">
                <img
                  src={personal.avatar}
                  alt={personal.name}
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-zinc-950 border border-zinc-800 text-[10px] font-mono text-cyan-400 whitespace-nowrap">
                @Hasaan6
              </div>
            </div>

            {/* Name & Title */}
            <p className="text-xs font-mono uppercase tracking-[0.28em] text-cyan-400 mb-3">
              {personal.name} · {personal.field}
            </p>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.06]">
              Full-Stack Developer <span className="text-zinc-500">&</span> AI Solutions<span className="text-cyan-400">.</span>
            </h1>

            <p className="mt-5 text-xs sm:text-sm font-mono text-zinc-400 flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400" />
              <span>{personal.location}</span>
            </p>

            {/* Quick NPM Command Bar */}
            <div className="mt-7 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-zinc-900/90 border border-zinc-800/90 text-xs font-mono text-zinc-300">
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>npm i @hasaan_6/rag-chatbot-widget</span>
              <button
                onClick={handleCopyNpm}
                className="p-1 rounded hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                title="Copy NPM install command"
              >
                {copiedNpm ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              </button>
            </div>

            {/* Hero Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#sable-projects"
                className="px-6 py-3 rounded-full text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-all flex items-center gap-2"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-800 transition-all flex items-center gap-2"
              >
                <Mail className="w-3.5 h-3.5 text-cyan-400" />
                <span>Email Me</span>
              </a>
              <a
                href={socials.github}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-zinc-800 transition-all"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* About Section (Editorial Bio) */}
      <section id="sable-about" className="py-20 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            01 · OVERVIEW
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">About Me</h2>

          <div className="space-y-6 text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
            <p>
              I’m a <strong className="text-white font-semibold">full-stack and AI engineer</strong> currently interning at <strong className="text-cyan-400 font-semibold">iCode Software House</strong>, where I work on <strong className="text-white">React Native and Django</strong> systems — including a sale-prediction and automated low-stock ordering flow. Alongside that, I build independently: a published npm package (<a href={personal.npmPackageUrl} target="_blank" rel="noreferrer" className="text-cyan-400 underline decoration-cyan-400/40 hover:decoration-cyan-400">@hasaan_6/rag-chatbot-widget</a>), a computer vision system detecting image tampering with <strong className="text-white">90%+ accuracy</strong>, and a telemetry/observability platform with ML-based error clustering.
            </p>
            <p className="text-zinc-400">
              {personal.bioSecond}
            </p>
          </div>

          {/* 4 Metric Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12">
            {personal.stats.map((st, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
                <div className="text-xl sm:text-2xl font-extrabold text-white">{st.value}</div>
                <div className="text-xs font-mono text-zinc-400 mt-1">{st.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Career Path / Experience Section */}
      <section id="sable-experience" className="py-20 border-t border-zinc-900">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            02 · CAREER PATH
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-10">Experience & Milestones</h2>

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <div
                key={exp.id || i}
                className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 hover:bg-zinc-900/70 border border-zinc-800/80 hover:border-zinc-700 transition-all"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-cyan-400">{exp.title}</h3>
                    <p className="text-sm font-semibold text-white mt-0.5">{exp.company}</p>
                  </div>
                  <span className="text-xs font-mono text-zinc-400 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800">
                    {exp.period}
                  </span>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {exp.highlights && (
                  <ul className="space-y-1.5 mb-5">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="text-xs text-zinc-400 flex items-start gap-2">
                        <span className="text-cyan-400 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-950 border border-zinc-800 text-zinc-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Work / Projects Section */}
      <section id="sable-projects" className="py-20 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
                03 · SELECTED WORK · (11 REPOSITORIES)
              </p>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">Projects</h2>
            </div>
            <a
              href={socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-zinc-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
            >
              <span>View all on GitHub (@Hasaan6)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, idx) => (
              <div
                key={proj.id || idx}
                className="group rounded-3xl bg-zinc-900/40 border border-zinc-800/80 hover:border-zinc-600 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-48 bg-zinc-950 overflow-hidden">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent" />
                    <span className="absolute top-3 left-3 text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-zinc-700 text-cyan-400">
                      {proj.category}
                    </span>
                    <span className="absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/80 text-zinc-300 border border-zinc-800">
                      {proj.year}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-2 line-clamp-3">
                      {proj.tagline}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {proj.tags.slice(0, 5).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-950 border border-zinc-800/90 text-zinc-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-3 border-t border-zinc-800/50 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(proj)}
                    className="text-xs font-bold text-white hover:text-cyan-400 flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    <span>Read Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-full bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors"
                    title="GitHub Repository"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit / Skills Section (7 Exact Categories) */}
      <section id="sable-skills" className="py-20 border-t border-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-zinc-500 mb-3">
            04 · TOOLKIT
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-12">Skills & Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.categories.map((cat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-zinc-900/35 border border-zinc-800/80 hover:border-zinc-700 transition-all"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-200">
                    {cat.title}
                  </h3>
                  <span className="text-[11px] font-mono text-cyan-400">{cat.code}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-zinc-950 border border-zinc-800 text-zinc-300 hover:border-cyan-400/50 hover:text-white transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Let's Connect Footer Section */}
      <footer id="sable-contact" className="py-24 border-t border-zinc-900 bg-[#030305]">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[11px] font-mono uppercase tracking-[0.25em] text-cyan-400 mb-3">
            05 · GET IN TOUCH
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-12">
            Let's Connect<span className="text-cyan-400">.</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Details */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-sm text-zinc-400 leading-relaxed">
                Open to software engineering roles, AI/ML projects, remote opportunities, and technical collaborations.
              </p>

              <div className="space-y-3 text-sm">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>{personal.email}</span>
                </a>
                <a
                  href={personal.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-zinc-300 hover:text-cyan-400 transition-colors"
                >
                  <Phone className="w-4 h-4 text-cyan-400" />
                  <span>{personal.phone} (WhatsApp)</span>
                </a>
                <div className="flex items-center gap-3 text-zinc-400">
                  <MapPin className="w-4 h-4 text-cyan-400" />
                  <span>{personal.location}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  Email Me
                </a>
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-600 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-800 text-white hover:border-zinc-600 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-6 sm:p-8 rounded-3xl bg-zinc-900/40 border border-zinc-800/90">
                {sent ? (
                  <div className="py-10 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-cyan-400 mx-auto" />
                    <h4 className="text-lg font-bold text-white">Message Received!</h4>
                    <p className="text-xs text-zinc-400">Thank you for reaching out to Hasaan Ahmad. I'll reply shortly.</p>
                    <button
                      onClick={() => { setSent(false); setContactForm({ name: '', email: '', message: '' }); }}
                      className="px-4 py-1.5 rounded-full text-xs bg-zinc-800 text-zinc-200"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSend} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Your Email"
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400"
                      />
                    </div>
                    <textarea
                      rows="4"
                      required
                      placeholder="Tell me about your project, idea, or inquiry..."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-cyan-400 resize-none"
                    />
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-7 py-3 rounded-full text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>

          <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
            <span>© {new Date().getFullYear()} {personal.name} · All rights reserved</span>
            <a href="#sable-home" className="hover:text-white transition-colors">Back to top ↑</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
