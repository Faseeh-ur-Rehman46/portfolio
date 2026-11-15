import React from 'react';
import { Sparkles, ArrowUpRight, BookOpen } from 'lucide-react';
import { GithubIcon } from './SocialIcons';

export default function Projects({ data, onSelectProject }) {
  const projects = data.projects || [];

  return (
    <section id="lab" className="py-24 relative">
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-purple-600/10 blur-[140px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Selected Work · 11+ Repositories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Lab & Featured Projects</h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-2 max-w-xl mx-auto">
            Production systems across Full-Stack RAG, Developer Observability, Computer Vision, and Cloud ML.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-4 rounded-full" />
        </div>

        {/* Project Cards (Stacked / Alternating Layout) */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id || index}
                className="group relative rounded-3xl bg-gradient-to-br from-[#1B0B2E]/90 via-[#130623]/95 to-[#0D0417]/95 border border-purple-800/30 hover:border-purple-500/60 p-6 sm:p-10 shadow-2xl shadow-purple-950/50 hover:shadow-purple-900/40 transition-all duration-500"
              >
                {/* Ambient glow in card */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600/10 via-fuchsia-600/10 to-indigo-600/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className={`relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Visual Preview / Mockup (7 cols) */}
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div
                      onClick={() => onSelectProject && onSelectProject(project)}
                      className="relative rounded-2xl overflow-hidden border border-purple-700/40 shadow-2xl group-hover:border-purple-400/60 transition-all cursor-pointer"
                    >
                      <div className="aspect-[16/10] w-full bg-slate-900 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                      
                      {/* Gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#110720] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />
                    </div>
                  </div>

                  {/* Project Details (5 cols) */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-4`}>
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-900/50 border border-purple-500/50 text-purple-300">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      <span>{project.badge || project.category}</span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs font-medium text-purple-400">
                      {project.category} · {project.year}
                    </p>

                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.tagline}
                    </p>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="text-xs px-2.5 py-1 rounded-md bg-purple-950/70 border border-purple-800/40 text-purple-300 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      {onSelectProject && (
                        <button
                          onClick={() => onSelectProject(project)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-600/30 hover:brightness-110 transition-all cursor-pointer"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>Case Study</span>
                        </button>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold bg-[#1F0D36] border border-purple-700/50 text-slate-300 hover:text-white hover:border-purple-400 transition-all cursor-pointer"
                        >
                          <GithubIcon className="w-4 h-4 text-purple-300" />
                          <span>Repository</span>
                        </a>
                      )}
                    </div>

                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
