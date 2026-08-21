import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Terminal, Menu, X, MessageSquare, Sparkles } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Journey', href: '#timeline' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ soundEnabled, setSoundEnabled, onOpenCommand }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    playSound('click', soundEnabled);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-panel bg-slate-950/85 shadow-2xl py-3 px-6 border-cyan-500/20'
            : 'bg-transparent py-4 px-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 p-[1px] shadow-neon-cyan group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-sky-400 text-xl font-outfit">
                HA
              </div>
            </div>
            <div>
              <div className="font-bold text-white tracking-wider text-lg font-outfit flex items-center gap-2">
                HAIDER ALI
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping mr-1"></span>
                  Available
                </span>
              </div>
              <p className="text-[11px] text-slate-400 tracking-tight font-mono">
                MERN Stack & Digital Pro
              </p>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-1 glass-panel bg-slate-900/80 px-4 py-1.5 rounded-full border-slate-800">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-1.5 text-xs font-medium text-slate-200 hover:text-sky-400 hover:bg-slate-800/80 rounded-full transition-all flex items-center gap-1.5"
                onMouseEnter={() => playSound('hover', soundEnabled)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            {/* Command Palette Trigger */}
            <button
              onClick={() => {
                playSound('pop', soundEnabled);
                onOpenCommand();
              }}
              onMouseEnter={() => playSound('hover', soundEnabled)}
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-200 bg-slate-900 border border-slate-800 rounded-lg hover:border-sky-500/50 hover:text-sky-400 transition-all"
              title="Command Palette (Ctrl + K)"
            >
              <Terminal className="w-3.5 h-3.5 text-sky-400" />
              <span>Cmd</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-950 rounded text-slate-400 border border-slate-800">
                Ctrl K
              </kbd>
            </button>

            {/* Sound Toggle */}
            <button
              onClick={() => {
                const next = !soundEnabled;
                setSoundEnabled(next);
                if (next) playSound('pop', true);
              }}
              onMouseEnter={() => playSound('hover', soundEnabled)}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200 hover:text-sky-400 hover:border-sky-500/50 transition-all"
              title={soundEnabled ? 'Disable UI Sound' : 'Enable UI Sound'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-sky-400 animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {/* Direct WhatsApp Action */}
            <a
              href="https://wa.me/923115609634"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => playSound('hover', soundEnabled)}
              className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-sky-400 via-teal-300 to-emerald-400 rounded-xl hover:shadow-neon-cyan hover:scale-105 transition-all font-outfit"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => {
                playSound('click', soundEnabled);
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-200"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-3 max-w-7xl mx-auto glass-panel bg-slate-950/95 rounded-2xl p-6 border-sky-500/30"
          >
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-900 hover:text-sky-400 transition-all flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <Sparkles className="w-3.5 h-3.5 text-sky-400 opacity-80" />
                </a>
              ))}
              <hr className="border-slate-800 my-1" />
              <a
                href="https://wa.me/923115609634"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center text-xs font-bold text-slate-950 bg-gradient-to-r from-sky-400 to-emerald-400 rounded-xl font-outfit"
              >
                Chat on WhatsApp (+92 311 5609634)
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
