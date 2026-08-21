import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart, Github, Mail, MessageSquare } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const Footer = ({ soundEnabled }) => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { timeZone: 'Asia/Karachi' }) + ' PKT');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    playSound('click', soundEnabled);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 py-12 border-t border-slate-900 bg-[#030712]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-500 p-[1px]">
              <div className="w-full h-full bg-slate-950 rounded-[11px] flex items-center justify-center font-bold text-sky-400 font-outfit">
                HA
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold font-outfit text-white">HAIDER ALI</h4>
              <p className="text-[11px] font-mono text-slate-400">MERN Stack & Digital Specialist</p>
            </div>
          </div>

          {/* Real-time Digital Clock */}
          <div className="glass-panel px-4 py-2 rounded-xl text-xs font-mono text-sky-400 border-sky-500/20 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-400 animate-pulse"></span>
            <span>{time || 'PKT Time'}</span>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-emerald-400 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => playSound('hover', soundEnabled)}
              className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-slate-400 font-mono flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Haider Ali. Built with React, Vite & Tailwind CSS.</span>
          <span className="flex items-center gap-1 text-slate-300">
            Crafted with <Heart className="w-3.5 h-3.5 text-purple-400 fill-purple-400 inline" /> for Vercel Live Deployment
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
