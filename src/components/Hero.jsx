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
  ExternalLink,
  Layers,
  FileSpreadsheet,
  CheckCircle2,
  MapPin,
  Flame,
  Globe,
  Star,
  ChevronRight,
  Zap
} from 'lucide-react';
import { personalData, projectsData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const Hero = ({ soundEnabled, onOpenCommand }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Right Column Showcase States
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'profile' | 'skills'
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);

  // Featured projects list (first 3 projects)
  const featuredProjects = projectsData.slice(0, 3);

  // Dynamic typing effect for titles
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

  const activeProject = featuredProjects[selectedProjectIndex];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#070504]">
      {/* Background Ambient Glow Orbs in Warm Bronze & Gold */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-amber-600/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/3 translate-y-1/3 w-[600px] h-[600px] bg-yellow-700/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: CLEAN INTRO & TYPOGRAPHY                     */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* Availability Pill & Command Palette Shortcut */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18100a]/90 border border-amber-500/30 text-amber-400 text-xs font-mono shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                </span>
                <span>Available for Hire & Projects</span>
              </div>

              <button
                onClick={() => {
                  playSound('click', soundEnabled);
                  onOpenCommand();
                }}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#140d08]/80 border border-amber-900/40 text-slate-300 text-xs font-mono hover:border-amber-500/50 hover:text-amber-400 transition-all cursor-pointer"
              >
                <Command className="w-3.5 h-3.5 text-amber-400" />
                <span>Command Menu</span>
                <kbd className="px-1.5 py-0.5 text-[10px] bg-[#0c0805] border border-amber-950 text-slate-400 rounded">
                  Ctrl+K
                </kbd>
              </button>
            </div>

            {/* Main Greeting & Headline */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-outfit tracking-tight leading-[1.1] mb-5">
              Hi, I'm <br />
              <span className="text-gradient-gold">
                {personalData.name}
              </span>
            </h1>

            {/* Dynamic Animated Subtitle / Role Badge */}
            <div className="h-10 flex items-center gap-2.5 mb-6 font-mono text-lg sm:text-xl text-slate-300 bg-[#160e0a]/80 px-4 py-2 rounded-xl border border-amber-900/40">
              <span className="text-amber-400 font-bold">&gt;_</span>
              <span className="text-amber-300 font-semibold">{displayText}</span>
              <span className="w-2 h-5 bg-amber-400 animate-pulse inline-block rounded-sm"></span>
            </div>

            {/* Clean Bio Summary */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-xl font-normal">
              Full-Stack Developer crafting high-performance web applications with the <span className="text-amber-400 font-semibold">MERN Stack</span>. Expert in <span className="text-yellow-400 font-semibold">Canva Graphic Design</span> & automated <span className="text-amber-300 font-semibold">MS Excel Data Systems</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="#projects"
                onClick={() => playSound('click', soundEnabled)}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="px-7 py-3.5 text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 font-outfit"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={() => playSound('click', soundEnabled)}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-[#160e0a]/90 hover:bg-[#22160f] border border-amber-900/50 hover:border-amber-500/40 rounded-xl transition-all flex items-center justify-center gap-2 font-outfit"
              >
                <Terminal className="w-4 h-4 text-amber-400" />
                <span>Contact & Hire</span>
              </a>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="px-4 py-3.5 text-xs font-mono text-slate-300 bg-[#160e0a]/90 hover:bg-[#22160f] border border-amber-900/50 rounded-xl transition-all flex items-center gap-2"
                title="Copy Email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="hidden sm:inline">Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Clean Key Stats Grid */}
            <div className="w-full pt-6 border-t border-amber-900/30 grid grid-cols-3 gap-4 font-mono">
              <div>
                <span className="text-2xl font-bold text-amber-400 font-outfit">5+</span>
                <p className="text-xs text-slate-400">Real Projects</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-yellow-400 font-outfit">100%</span>
                <p className="text-xs text-slate-400">Client Satisfaction</p>
              </div>
              <div>
                <span className="text-2xl font-bold text-amber-300 font-outfit">2+ Yrs</span>
                <p className="text-xs text-slate-400">Stack Experience</p>
              </div>
            </div>

          </motion.div>


          {/* ========================================================= */}
          {/* RIGHT COLUMN: VISUAL PROJECT & SHOWCASE CARD              */}
          {/* ========================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Outer Dark Brown & Bronze Border Container */}
            <div className="relative rounded-3xl bg-[#140e09]/90 border border-amber-900/40 shadow-2xl p-6 overflow-hidden">
              
              {/* Top Showcase Navigation Tabs */}
              <div className="flex items-center justify-between gap-2 p-1 bg-[#0a0705] rounded-xl border border-amber-900/30 mb-6">
                <button
                  onClick={() => {
                    playSound('click', soundEnabled);
                    setActiveTab('projects');
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'projects'
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Globe className="w-3.5 h-3.5" />
                  <span>Projects</span>
                </button>

                <button
                  onClick={() => {
                    playSound('click', soundEnabled);
                    setActiveTab('profile');
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'profile'
                      ? 'bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <User className="w-3.5 h-3.5" />
                  <span>Profile</span>
                </button>

                <button
                  onClick={() => {
                    playSound('click', soundEnabled);
                    setActiveTab('skills');
                  }}
                  className={`flex-1 py-2 px-3 rounded-lg text-xs font-mono flex items-center justify-center gap-2 transition-all ${
                    activeTab === 'skills'
                      ? 'bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Skills</span>
                </button>
              </div>

              {/* TAB 1: VISUAL PROJECT SHOWCASE */}
              <AnimatePresence mode="wait">
                {activeTab === 'projects' && (
                  <motion.div
                    key="tab-projects"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-4"
                  >
                    {/* Project Selector Chips */}
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                      {featuredProjects.map((project, idx) => (
                        <button
                          key={project.id}
                          onClick={() => {
                            playSound('click', soundEnabled);
                            setSelectedProjectIndex(idx);
                          }}
                          className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all flex items-center gap-1.5 whitespace-nowrap ${
                            selectedProjectIndex === idx
                              ? 'bg-[#22160f] text-amber-400 border border-amber-500/50 font-semibold'
                              : 'bg-[#0e0906] text-slate-400 border border-amber-950 hover:text-slate-200'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                          <span>{project.title.split('–')[0].split(' ')[0]}</span>
                        </button>
                      ))}
                    </div>

                    {/* Active Project Card Preview */}
                    <div className="bg-[#0b0805] rounded-2xl border border-amber-900/40 p-5 flex flex-col gap-3 relative overflow-hidden">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-amber-400 bg-amber-950/60 px-2.5 py-1 rounded-md border border-amber-500/30">
                          {activeProject.badge}
                        </span>
                        <span className="text-xs text-amber-300/60 font-mono">Featured App</span>
                      </div>

                      <h3 className="text-xl font-bold font-outfit text-slate-100">
                        {activeProject.title}
                      </h3>

                      <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                        {activeProject.description}
                      </p>

                      {/* Tech Stack Chips */}
                      <div className="flex flex-wrap gap-1.5 my-1">
                        {activeProject.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="text-[10px] font-mono text-amber-300/80 bg-[#160f0a] px-2 py-0.5 rounded border border-amber-950">
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Project Action Link */}
                      <div className="pt-3 border-t border-amber-950 flex items-center justify-between">
                        <a
                          href={activeProject.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => playSound('click', soundEnabled)}
                          className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 hover:text-amber-300 font-mono"
                        >
                          <span>Live Demo Preview</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <a
                          href="#projects"
                          className="text-xs text-slate-400 hover:text-slate-200 font-mono flex items-center gap-1"
                        >
                          <span>All Projects</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: DEVELOPER PROFILE */}
                {activeTab === 'profile' && (
                  <motion.div
                    key="tab-profile"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col items-center text-center p-2"
                  >
                    <div className="relative w-28 h-28 rounded-full p-1 bg-gradient-to-tr from-amber-400 to-yellow-500 mb-3 shadow-lg">
                      <img
                        src="/profile.png"
                        alt="Haider Ali"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <h3 className="text-xl font-bold font-outfit text-slate-100 flex items-center gap-1.5">
                      <span>Haider Ali</span>
                      <CheckCircle2 className="w-4 h-4 text-amber-400" />
                    </h3>
                    <p className="text-xs font-mono text-amber-400 mb-4">MERN Stack & Digital Specialist</p>

                    <div className="w-full grid grid-cols-2 gap-2 text-xs font-mono text-left bg-[#0b0805] p-3 rounded-xl border border-amber-900/40 mb-2">
                      <div>
                        <span className="text-slate-500 text-[10px] block">Location:</span>
                        <span className="text-slate-200 font-semibold">Chakwal, Pakistan</span>
                      </div>
                      <div>
                        <span className="text-slate-500 text-[10px] block">Status:</span>
                        <span className="text-amber-400 font-semibold">Ready for Hire</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: SKILLS COMPETENCIES */}
                {activeTab === 'skills' && (
                  <motion.div
                    key="tab-skills"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3 font-mono text-xs p-1"
                  >
                    <div className="bg-[#0b0805] p-3 rounded-xl border border-amber-900/40">
                      <div className="flex justify-between mb-1">
                        <span className="text-amber-400 font-semibold">React.js & Node.js</span>
                        <span className="text-slate-300">92%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#18100a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 rounded-full w-[92%]"></div>
                      </div>
                    </div>

                    <div className="bg-[#0b0805] p-3 rounded-xl border border-amber-900/40">
                      <div className="flex justify-between mb-1">
                        <span className="text-yellow-400 font-semibold">Canva Graphic UI</span>
                        <span className="text-slate-300">90%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#18100a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full w-[90%]"></div>
                      </div>
                    </div>

                    <div className="bg-[#0b0805] p-3 rounded-xl border border-amber-900/40">
                      <div className="flex justify-between mb-1">
                        <span className="text-amber-300 font-semibold">MS Excel & Data Entry</span>
                        <span className="text-slate-300">95%</span>
                      </div>
                      <div className="w-full h-1.5 bg-[#18100a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full w-[95%]"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
