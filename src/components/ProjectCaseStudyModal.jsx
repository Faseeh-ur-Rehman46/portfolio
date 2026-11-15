import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2, Layers, Cpu, Terminal, Copy, Check } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function ProjectCaseStudyModal({ project, onClose }) {
  const [copiedCmd, setCopiedCmd] = useState(false);

  if (!project) return null;

  const copyCommand = () => {
    if (!project.npmCommand) return;
    navigator.clipboard.writeText(project.npmCommand);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0b0b0e] border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl max-h-[90vh] flex flex-col text-white">
        
        {/* Top Banner Image */}
        <div className="relative h-52 sm:h-64 w-full bg-zinc-900 shrink-0 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b0b0e] via-[#0b0b0e]/40 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 hover:bg-black text-zinc-300 hover:text-white border border-zinc-700/60 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-4 left-6 right-6 flex flex-wrap items-end justify-between gap-2">
            <div>
              <span className="inline-block text-[11px] font-mono uppercase tracking-widest text-cyan-400 bg-cyan-950/60 border border-cyan-500/30 px-2.5 py-0.5 rounded-full mb-2">
                {project.category} · {project.year}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                {project.title}
              </h2>
            </div>
            <span className="text-xs font-mono text-zinc-400 bg-zinc-900/90 border border-zinc-800 px-3 py-1 rounded-full">
              Role: {project.role}
            </span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm">
          
          {/* Tagline */}
          <p className="text-base sm:text-lg text-zinc-200 font-medium leading-relaxed">
            {project.tagline}
          </p>

          {/* NPM Install Command if available */}
          {project.npmCommand && (
            <div className="p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex items-center justify-between font-mono text-xs">
              <div className="flex items-center gap-2 text-cyan-400">
                <Terminal className="w-4 h-4" />
                <span>$ {project.npmCommand}</span>
              </div>
              <button
                onClick={copyCommand}
                className="px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 flex items-center gap-1.5 text-xs cursor-pointer"
              >
                {copiedCmd ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedCmd ? "Copied" : "Copy"}</span>
              </button>
            </div>
          )}

          {/* Metrics Row */}
          {project.metrics && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {project.metrics.map((m, i) => (
                <div key={i} className="p-3.5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs font-semibold text-zinc-200">{m}</span>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-rose-400">01 / The Problem</h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80 space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-emerald-400">02 / The Solution</h4>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">03 / Architecture & Stack</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-colors"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
              {project.liveUrl && project.liveUrl !== project.githubUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-zinc-900 border border-zinc-700 text-white hover:border-cyan-400 transition-colors"
                >
                  <span>Live / NPM Package</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-medium text-zinc-400 hover:text-white cursor-pointer"
            >
              Close Case Study
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
