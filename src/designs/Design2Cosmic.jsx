import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import SkillsOrbit from '../components/SkillsOrbit';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function Design2Cosmic({ data, onSelectProject, onOpenEdit }) {
  return (
    <div className="min-h-screen bg-[#110720] text-slate-100 relative selection:bg-purple-600 selection:text-white font-['Poppins',sans-serif]">
      {/* Ambient grid background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.035] -z-10"
        style={{
          backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <Navbar data={data} onOpenEdit={onOpenEdit} />
      <main>
        <Hero data={data} />
        <Experience data={data} />
        <SkillsOrbit data={data} />
        <Projects data={data} onSelectProject={onSelectProject} />
      </main>
      <Footer data={data} />
    </div>
  );
}
