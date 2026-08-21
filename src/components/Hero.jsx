import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sparkles, Terminal, Download, ShieldCheck, Cpu, Database, Palette, Table } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const Hero = ({ soundEnabled, onOpenCommand }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Dynamic cyber typing effect
  useEffect(() => {
    const currentRole = personalData.subtitles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalData.subtitles.length);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Laser Mesh Background Radial */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/15 via-purple-600/15 to-pink-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Hero Intro */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel border-cyan-500/30 text-cyan-400 text-xs font-mono mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin-slow" />
              <span>Full-Stack & Digital Design Engineer</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-outfit tracking-tight leading-[1.1] mb-6">
              Hi, I'm <br />
              <span className="text-gradient-cyan drop-shadow-sm">{personalData.name}</span>
            </h1>

            {/* Dynamic Animated Subtitle */}
            <div className="h-12 flex items-center gap-3 mb-6 font-mono text-xl sm:text-2xl text-slate-300">
              <span className="text-cyan-400 font-bold">&gt;</span>
              <span>{displayText}</span>
              <span className="w-2.5 h-6 bg-cyan-400 animate-pulse inline-block"></span>
            </div>

            {/* Bio Summary */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl font-light">
              Crafting futuristic web experiences with <strong className="text-cyan-300">MERN Stack (React, Node, Express, MongoDB)</strong>. Expert in high-converting <strong className="text-purple-300">Canva Graphic Design</strong> and precision <strong className="text-emerald-300">Excel Data Entry & Management</strong>.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={() => playSound('click', soundEnabled)}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="px-7 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-purple-500 rounded-2xl shadow-neon-cyan hover:scale-105 hover:shadow-cyan-500/50 transition-all flex items-center gap-3 group"
              >
                <span>View Projects Showcase</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => playSound('click', soundEnabled)}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="px-7 py-4 text-sm font-semibold text-slate-200 glass-panel hover:bg-slate-800/80 hover:border-cyan-500/40 rounded-2xl transition-all flex items-center gap-2"
              >
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span>Contact & Hire</span>
              </a>
            </div>

            {/* Micro Badge Badges Bar */}
            <div className="mt-12 flex flex-wrap items-center gap-6 pt-6 border-t border-slate-800/80 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Production Ready Code</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>MERN Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Palette className="w-4 h-4 text-purple-400" />
                <span>Canva Graphics</span>
              </div>
              <div className="flex items-center gap-2">
                <Table className="w-4 h-4 text-emerald-400" />
                <span>Excel Data Entry</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive 3D HUD Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            {/* Outer Cyber Glow Frame */}
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 blur-xl opacity-30 animate-pulse-glow"></div>
              
              <div className="relative glass-panel rounded-3xl p-8 border border-cyan-500/30 overflow-hidden shadow-glass">
                {/* HUD Grid Overlay */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

                {/* Developer Avatar Mock Graphic */}
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden bg-slate-900/90 border border-slate-800 flex flex-col items-center justify-center p-6 text-center group">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] mb-4 shadow-neon-cyan group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center text-4xl">
                      ⚡
                    </div>
                  </div>

                  <h3 className="text-xl font-bold font-outfit text-slate-100 mb-1">Haider Ali</h3>
                  <p className="text-xs text-cyan-400 font-mono mb-4">MERN Stack & Digital Pro</p>

                  <div className="w-full grid grid-cols-2 gap-2 text-left text-xs font-mono bg-slate-950/70 p-3 rounded-xl border border-slate-800/80 mb-4">
                    <div>
                      <span className="text-slate-500 block text-[10px]">Location:</span>
                      <span className="text-slate-300 font-semibold">Pakistan</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Status:</span>
                      <span className="text-emerald-400 font-semibold">Available</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Projects:</span>
                      <span className="text-cyan-400 font-semibold">5+ Built</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block text-[10px]">Stack:</span>
                      <span className="text-purple-400 font-semibold">Full-Stack</span>
                    </div>
                  </div>

                  <div className="w-full flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                      React 18 + Node
                    </span>
                    <span className="text-purple-400">Canva & Excel</span>
                  </div>
                </div>

                {/* Floating Tech Badges */}
                <div className="absolute -top-4 -right-4 glass-panel bg-slate-900/90 px-3 py-2 rounded-xl border-cyan-500/40 text-xs font-mono text-cyan-300 shadow-neon-cyan flex items-center gap-2 animate-float">
                  <Code2 className="w-4 h-4 text-cyan-400" />
                  <span>React.js</span>
                </div>

                <div className="absolute -bottom-4 -left-4 glass-panel bg-slate-900/90 px-3 py-2 rounded-xl border-purple-500/40 text-xs font-mono text-purple-300 shadow-neon-purple flex items-center gap-2 animate-float" style={{ animationDelay: '2s' }}>
                  <Palette className="w-4 h-4 text-purple-400" />
                  <span>Canva UI</span>
                </div>

                <div className="absolute bottom-16 -right-6 glass-panel bg-slate-900/90 px-3 py-2 rounded-xl border-emerald-500/40 text-xs font-mono text-emerald-300 shadow-neon-cyan flex items-center gap-2 animate-float" style={{ animationDelay: '4s' }}>
                  <Table className="w-4 h-4 text-emerald-400" />
                  <span>Excel Data</span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
