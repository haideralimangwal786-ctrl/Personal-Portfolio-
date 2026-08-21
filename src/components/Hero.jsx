import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Code2, 
  Sparkles, 
  Terminal, 
  Download, 
  ShieldCheck, 
  Cpu, 
  Database, 
  Palette, 
  Table,
  Copy,
  Check,
  Command,
  User,
  Zap,
  ExternalLink,
  Layers,
  FileSpreadsheet,
  CheckCircle2,
  MapPin,
  Flame
} from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const Hero = ({ soundEnabled, onOpenCommand }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [activeHudTab, setActiveHudTab] = useState('profile'); // 'profile' | 'code' | 'skills'

  // 3D Parallax Tilt effect state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Dynamic cyber typing effect
  useEffect(() => {
    const currentRole = personalData.subtitles[roleIndex];
    const speed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === currentRole.length) {
          setTimeout(() => setIsDeleting(true), 2000);
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

  // Copy Email Handler
  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    playSound('click', soundEnabled);
    setTimeout(() => setCopied(false), 2500);
  };

  // Mouse Move Tilt Handler for 3D HUD
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: (y / rect.height) * -15, // tilt up/down
      y: (x / rect.width) * 15,   // tilt left/right
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden">
      {/* Background Laser Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-cyan-500/20 via-purple-600/15 to-pink-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-gradient-to-br from-emerald-500/15 via-teal-500/10 to-cyan-500/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Futuristic Cyber Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: HERO INTRO & CTAS                            */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Top Status & Command Palette Pills */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Availability Status Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-panel border-emerald-500/40 text-emerald-400 text-xs font-mono shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-slate-200">Available for Freelance & Full-time</span>
              </div>

              {/* Command Palette Trigger Pill */}
              <button
                onClick={() => {
                  playSound('click', soundEnabled);
                  onOpenCommand();
                }}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass-panel border-cyan-500/30 text-cyan-400 text-xs font-mono hover:border-cyan-400/60 hover:bg-cyan-500/10 transition-all group cursor-pointer"
              >
                <Command className="w-3.5 h-3.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span className="text-slate-300">Quick Actions</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 border border-slate-700 text-slate-400 rounded">
                  Ctrl+K
                </kbd>
              </button>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-outfit tracking-tight leading-[1.08] mb-6">
              Engineering <br />
              <span className="text-gradient-multicolor drop-shadow-md">
                Futuristic Web
              </span> <br />
              & Digital Products
            </h1>

            {/* Dynamic Animated Subtitle / Typing Terminal */}
            <div className="w-full max-w-2xl glass-panel p-3.5 rounded-2xl border-slate-800 mb-6 flex items-center gap-3 font-mono text-lg sm:text-xl text-slate-200 bg-slate-950/80 shadow-inner">
              <div className="flex items-center gap-1.5 px-2 py-1 bg-cyan-950/60 border border-cyan-500/40 rounded-lg text-cyan-400 text-xs">
                <Terminal className="w-3.5 h-3.5 animate-pulse" />
                <span>ROLE</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300 truncate">
                <span className="text-cyan-400 font-bold">&gt;</span>
                <span className="text-cyan-300 font-semibold">{displayText}</span>
                <span className="w-2.5 h-5 bg-cyan-400 animate-pulse inline-block rounded-sm"></span>
              </div>
            </div>

            {/* Concise Bio Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl font-normal">
              I'm <strong className="text-slate-100 font-semibold">{personalData.name}</strong> — a full-stack engineer architecting resilient <span className="px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-sm font-mono">MERN Stack</span> web apps, high-converting <span className="px-2 py-0.5 rounded bg-purple-950/80 border border-purple-500/30 text-purple-300 text-sm font-mono">Canva Graphic UI</span> assets, and automated <span className="px-2 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-sm font-mono">MS Excel Data Systems</span>.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={() => playSound('click', soundEnabled)}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="relative group px-8 py-4 text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-purple-400 rounded-2xl shadow-neon-cyan hover:shadow-cyan-400/50 hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-3 overflow-hidden shimmer-bg"
              >
                <span className="relative z-10 flex items-center gap-2 font-outfit text-base">
                  <Zap className="w-5 h-5 text-slate-950 fill-slate-950" />
                  <span>Explore Showcase</span>
                </span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1.5 transition-transform" />
              </a>

              <a
                href="#contact"
                onClick={() => playSound('click', soundEnabled)}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="px-7 py-4 text-sm font-semibold text-slate-200 glass-panel hover:bg-slate-800/90 hover:border-cyan-500/50 rounded-2xl transition-all flex items-center justify-center gap-2.5 shadow-sm group"
              >
                <Terminal className="w-4 h-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                <span>Hire / Contact Me</span>
              </a>

              {/* Copy Email Button */}
              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="px-4 py-4 text-xs font-mono text-slate-300 glass-panel hover:bg-slate-800/90 hover:border-slate-600 rounded-2xl transition-all flex items-center gap-2 relative group"
                title="Copy Email Address"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    <span className="hidden sm:inline">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Key Skill Badges Bar */}
            <div className="w-full pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400 font-mono">
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">Production Code</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <Cpu className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">MERN Stack Pro</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <Palette className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">Canva Graphics</span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-900/40 border border-slate-800/60">
                <FileSpreadsheet className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span className="text-slate-300 font-medium">Excel Analytics</span>
              </div>
            </div>

          </motion.div>


          {/* ========================================================= */}
          {/* RIGHT COLUMN: MULTI-MODE 3D HUD AVATAR CARD               */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            {/* 3D Tilt Wrapper */}
            <div 
              className="relative mx-auto max-w-md transition-transform duration-200 ease-out preserve-3d"
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              }}
            >
              {/* Outer Cyber Multi-Color Glow Frame */}
              <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-600 to-emerald-400 blur-2xl opacity-40 animate-pulse-glow"></div>
              
              <div className="relative cyber-glow-card rounded-3xl p-6 border border-cyan-500/40 overflow-hidden shadow-2xl">
                
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

                {/* HUD Top Tab Header */}
                <div className="flex items-center justify-between gap-2 p-1.5 bg-slate-950/80 rounded-2xl border border-slate-800 mb-5 relative z-10">
                  <button
                    onClick={() => {
                      playSound('click', soundEnabled);
                      setActiveHudTab('profile');
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono flex items-center justify-center gap-1.5 transition-all ${
                      activeHudTab === 'profile'
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <User className="w-3.5 h-3.5" />
                    <span>HUD</span>
                  </button>

                  <button
                    onClick={() => {
                      playSound('click', soundEnabled);
                      setActiveHudTab('code');
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono flex items-center justify-center gap-1.5 transition-all ${
                      activeHudTab === 'code'
                        ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-slate-950 font-bold shadow-md'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Code</span>
                  </button>

                  <button
                    onClick={() => {
                      playSound('click', soundEnabled);
                      setActiveHudTab('skills');
                    }}
                    className={`flex-1 py-2 px-3 rounded-xl text-xs font-mono flex items-center justify-center gap-1.5 transition-all ${
                      activeHudTab === 'skills'
                        ? 'bg-gradient-to-r from-emerald-400 to-teal-500 text-slate-950 font-bold shadow-md'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5" />
                    <span>Stats</span>
                  </button>
                </div>

                {/* TAB CONTENT 1: PROFILE HUD */}
                <AnimatePresence mode="wait">
                  {activeHudTab === 'profile' && (
                    <motion.div
                      key="hud-profile"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 flex flex-col items-center text-center"
                    >
                      {/* Avatar Profile Ring */}
                      <div className="relative mb-4 group">
                        {/* Dual Rotating Ambient Rings */}
                        <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-emerald-400 opacity-70 blur-md animate-spin-slow pointer-events-none"></div>
                        <div className="absolute -inset-1.5 rounded-full border border-dashed border-cyan-400/50 animate-spin-slow-reverse pointer-events-none"></div>

                        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full p-1 bg-slate-950 border-2 border-cyan-400 shadow-neon-cyan overflow-hidden">
                          <img
                            src="/profile.png"
                            alt="Haider Ali"
                            className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>

                        {/* Verified Pro Badge */}
                        <div className="absolute bottom-0 right-0 p-1.5 rounded-full bg-cyan-500 text-slate-950 shadow-md border-2 border-slate-950" title="Verified Full-Stack Pro">
                          <CheckCircle2 className="w-4 h-4 font-bold" />
                        </div>
                      </div>

                      {/* Developer Name & Title */}
                      <h3 className="text-2xl font-bold font-outfit text-slate-100 flex items-center justify-center gap-2">
                        <span>Haider Ali</span>
                        <Flame className="w-5 h-5 text-amber-400 fill-amber-400 animate-pulse" />
                      </h3>
                      <p className="text-xs text-cyan-400 font-mono mb-4 flex items-center justify-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-purple-400" />
                        <span>Chakwal, Punjab, PK</span>
                      </p>

                      {/* Developer Key Metrics Grid */}
                      <div className="w-full grid grid-cols-2 gap-2 text-left font-mono text-xs bg-slate-950/80 p-3.5 rounded-2xl border border-slate-800/90 mb-4 shadow-inner">
                        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-500 block text-[10px] font-sans">EXPERIENCE:</span>
                          <span className="text-slate-200 font-bold text-sm">2+ Years Pro</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-500 block text-[10px] font-sans">STATUS:</span>
                          <span className="text-emerald-400 font-bold text-sm flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            Active
                          </span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-500 block text-[10px] font-sans">PROJECTS:</span>
                          <span className="text-cyan-400 font-bold text-sm">5+ Real Apps</span>
                        </div>
                        <div className="p-2 rounded-xl bg-slate-900/60 border border-slate-800">
                          <span className="text-slate-500 block text-[10px] font-sans">SATISFACTION:</span>
                          <span className="text-purple-400 font-bold text-sm">100% Client</span>
                        </div>
                      </div>

                      {/* Quick Tech Badges */}
                      <div className="w-full flex flex-wrap items-center justify-between text-slate-300 text-[11px] font-mono bg-cyan-950/30 p-2.5 rounded-xl border border-cyan-500/20">
                        <span className="text-cyan-300 font-semibold">⚡ React 18 + Node</span>
                        <span className="text-purple-300 font-semibold">🎨 Canva & Excel</span>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB CONTENT 2: LIVE CODE TERMINAL */}
                  {activeHudTab === 'code' && (
                    <motion.div
                      key="hud-code"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 bg-slate-950 rounded-2xl p-4 border border-slate-800 font-mono text-xs text-slate-300 text-left overflow-hidden shadow-inner"
                    >
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800 text-[11px] text-slate-500">
                        <div className="flex items-center gap-2">
                          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                          <span className="ml-2 text-slate-400">HaiderDev.jsx</span>
                        </div>
                        <span className="text-cyan-400 font-mono">React + Node</span>
                      </div>

                      <pre className="text-slate-300 font-mono text-[11px] leading-relaxed overflow-x-auto">
                        <code>
                          <span className="text-purple-400">const</span> <span className="text-cyan-300">Developer</span> = () =&gt; &#123;{'\n'}
                          {'  '}<span className="text-purple-400">const</span> stack = [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Express'</span>, <span className="text-emerald-300">'MongoDB'</span>];{'\n'}
                          {'  '}<span className="text-purple-400">const</span> skills = &#123;{'\n'}
                          {'    '}design: <span className="text-amber-300">'Canva UI/UX Pro'</span>,{'\n'}
                          {'    '}data: <span className="text-emerald-300">'MS Excel Analytics'</span>{'\n'}
                          {'  '}&#125;;{'\n'}
                          {'\n'}
                          {'  '}<span className="text-purple-400">return</span> ({'\n'}
                          {'    '}&lt;<span className="text-cyan-400">Engineer</span>{'\n'}
                          {'      '}name=<span className="text-emerald-300">"Haider Ali"</span>{'\n'}
                          {'      '}quality=<span className="text-amber-300">"100%"</span>{'\n'}
                          {'      '}status=<span className="text-cyan-300">"Ready for Hire"</span>{'\n'}
                          {'    '}/&gt;{'\n'}
                          {'  '});{'\n'}
                          &#125;;
                        </code>
                      </pre>
                    </motion.div>
                  )}

                  {/* TAB CONTENT 3: STATS & COMPETENCIES */}
                  {activeHudTab === 'skills' && (
                    <motion.div
                      key="hud-skills"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="relative z-10 flex flex-col gap-3 font-mono text-xs"
                    >
                      <div className="bg-slate-950/90 p-3 rounded-2xl border border-slate-800">
                        <div className="flex justify-between items-center mb-1 text-slate-300">
                          <span className="flex items-center gap-1.5 text-cyan-400">
                            <Code2 className="w-3.5 h-3.5" />
                            MERN Stack & APIs
                          </span>
                          <span className="text-cyan-400 font-bold">95%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full w-[95%]"></div>
                        </div>
                      </div>

                      <div className="bg-slate-950/90 p-3 rounded-2xl border border-slate-800">
                        <div className="flex justify-between items-center mb-1 text-slate-300">
                          <span className="flex items-center gap-1.5 text-purple-400">
                            <Palette className="w-3.5 h-3.5" />
                            Canva UI/UX Design
                          </span>
                          <span className="text-purple-400 font-bold">92%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-[92%]"></div>
                        </div>
                      </div>

                      <div className="bg-slate-950/90 p-3 rounded-2xl border border-slate-800">
                        <div className="flex justify-between items-center mb-1 text-slate-300">
                          <span className="flex items-center gap-1.5 text-emerald-400">
                            <Table className="w-3.5 h-3.5" />
                            MS Excel & Data Entry
                          </span>
                          <span className="text-emerald-400 font-bold">96%</span>
                        </div>
                        <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full w-[96%]"></div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Floating Orbital Badges Around Card */}
                <div className="absolute -top-3 -right-3 glass-panel bg-slate-900/90 px-3 py-1.5 rounded-xl border-cyan-500/50 text-xs font-mono text-cyan-300 shadow-neon-cyan flex items-center gap-1.5 animate-float pointer-events-none z-20">
                  <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                  <span>React.js</span>
                </div>

                <div className="absolute -bottom-3 -left-3 glass-panel bg-slate-900/90 px-3 py-1.5 rounded-xl border-purple-500/50 text-xs font-mono text-purple-300 shadow-neon-purple flex items-center gap-1.5 animate-float pointer-events-none z-20" style={{ animationDelay: '2s' }}>
                  <Palette className="w-3.5 h-3.5 text-purple-400" />
                  <span>Canva UI</span>
                </div>

                <div className="absolute bottom-20 -right-4 glass-panel bg-slate-900/90 px-3 py-1.5 rounded-xl border-emerald-500/50 text-xs font-mono text-emerald-300 shadow-neon-cyan flex items-center gap-1.5 animate-float pointer-events-none z-20" style={{ animationDelay: '4s' }}>
                  <FileSpreadsheet className="w-3.5 h-3.5 text-emerald-400" />
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
