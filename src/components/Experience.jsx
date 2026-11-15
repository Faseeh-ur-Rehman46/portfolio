import React, { useState } from 'react';
import { Briefcase, ArrowRight, X, CheckCircle2, Calendar } from 'lucide-react';

export default function Experience({ data }) {
  const [selectedExp, setSelectedExp] = useState(null);
  const experiences = data.experiences || [];

  return (
    <section id="experience" className="py-20 relative">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-purple-900/20 blur-[100px] pointer-events-none rounded-full -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-widest text-purple-400 font-semibold mb-2">Track Record</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Work Experience</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 mx-auto mt-3 rounded-full" />
        </div>

        {/* 4-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id || index}
              className="group relative p-7 rounded-2xl bg-gradient-to-br from-[#1C0B2E]/90 via-[#150724]/90 to-[#0F041B]/95 border border-purple-800/30 hover:border-purple-500/60 shadow-xl shadow-purple-950/40 hover:shadow-purple-900/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Subtle top corner gradient highlight */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all pointer-events-none" />

              <div>
                {/* Header row: Icon & Dates */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-900/50 border border-purple-600/40 flex items-center justify-center text-purple-300 group-hover:scale-110 group-hover:bg-purple-800/60 transition-all shadow-md">
                    <Briefcase className="w-6 h-6 text-purple-300" />
                  </div>
                  <span className="text-xs font-medium text-purple-300/80 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/40">
                    {exp.period}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs font-semibold text-purple-400/90 mt-1 mb-3">
                  {exp.role} • <span className="text-slate-300">{exp.company}</span>
                </p>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                  {exp.description}
                </p>

                {/* Tags */}
                {exp.tags && (
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {exp.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[11px] px-2.5 py-0.5 rounded-md bg-purple-950/60 border border-purple-800/30 text-purple-300 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-purple-900/30">
                <button
                  onClick={() => setSelectedExp(exp)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider text-purple-300 hover:text-white uppercase transition-colors group/btn cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform text-purple-400" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Detail View */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg bg-[#150724] border border-purple-500/50 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-purple-950/80 max-h-[90vh] flex flex-col overflow-y-auto">
            
            <button
              onClick={() => setSelectedExp(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-purple-900/40 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-semibold text-purple-400 mb-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{selectedExp.period}</span>
            </div>

            <h3 className="text-2xl font-bold text-white">{selectedExp.title}</h3>
            <p className="text-sm font-medium text-purple-300 mt-1 mb-4">
              {selectedExp.role} at <span className="text-white font-semibold">{selectedExp.company}</span>
            </p>

            <div className="space-y-3 text-sm text-slate-200 leading-relaxed border-t border-purple-900/40 pt-4">
              <p>{selectedExp.description}</p>
              
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">Key Highlights</h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {(selectedExp.highlights || [
                    "Spearheaded design and delivery of responsive user interfaces and scalable architecture.",
                    "Collaborated cross-functionally across engineering, product management, and UX design.",
                    "Optimized user experience, resulting in measurable workflow speed and satisfaction improvements."
                  ]).map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedExp.tags && (
                <div className="pt-4 border-t border-purple-900/40">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-purple-400 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedExp.tags.map((t, i) => (
                      <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-900/60 border border-purple-600/50 text-purple-200 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-purple-900/30 flex justify-end">
              <button
                onClick={() => setSelectedExp(null)}
                className="px-5 py-2 rounded-full text-xs font-semibold bg-purple-900/60 hover:bg-purple-800 text-white transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
