import React, { useState, useEffect } from 'react';
import { initialPortfolioData } from './data/portfolioData';
import Design2Cosmic from './designs/Design2Cosmic';
import ProjectCaseStudyModal from './components/ProjectCaseStudyModal';
import { ArrowUp } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    try {
      localStorage.removeItem('user_portfolio_data');
      localStorage.removeItem('hasaan_portfolio_v2');
      localStorage.removeItem('faseeh_portfolio_v1');
    } catch {
      // ignore storage errors
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen">
      
      {/* Design 2: Cosmic Violet Bento Portfolio */}
      <Design2Cosmic
        data={initialPortfolioData}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* Project Case Study Modal */}
      <ProjectCaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-[#1C0A33]/90 border border-purple-600/40 text-purple-300 hover:text-white hover:bg-purple-900/60 transition-all shadow-xl shadow-purple-950 backdrop-blur-md cursor-pointer animate-fadeIn"
          title="Back to Top"
          aria-label="Scroll to top of page"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

    </div>
  );
}
