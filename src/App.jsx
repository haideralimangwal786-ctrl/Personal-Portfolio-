import React, { useState } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import CommandPalette from './components/CommandPalette';
import Footer from './components/Footer';

function App() {
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [commandOpen, setCommandOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#05070f] text-slate-100 relative selection:bg-cyan-500 selection:text-slate-950 font-sans overflow-x-hidden">
      {/* 60FPS Interactive Cosmic Canvas */}
      <ParticleCanvas />

      {/* Header & Navbar */}
      <Navbar
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        onOpenCommand={() => setCommandOpen(true)}
      />

      {/* Main Content View Sections */}
      <main className="relative z-10">
        <Hero
          soundEnabled={soundEnabled}
          onOpenCommand={() => setCommandOpen(true)}
        />
        <About soundEnabled={soundEnabled} />
        <Services soundEnabled={soundEnabled} />
        <Skills soundEnabled={soundEnabled} />
        <Projects soundEnabled={soundEnabled} />
        <Timeline soundEnabled={soundEnabled} />
        <Contact soundEnabled={soundEnabled} />
      </main>

      {/* Footer */}
      <Footer soundEnabled={soundEnabled} />

      {/* Command Palette Modal */}
      <CommandPalette
        isOpen={commandOpen}
        onClose={() => setCommandOpen(false)}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
      />
    </div>
  );
}

export default App;
