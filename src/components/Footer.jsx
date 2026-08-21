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
    <footer className="relative z-10 py-12 border-t border-amber-900/30 bg-[#070504]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-amber-900/30">
          
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-amber-400 to-yellow-500 p-[1px]">
              <div className="w-full h-full bg-[#0b0805] rounded-[11px] flex items-center justify-center font-bold text-amber-400 font-outfit">
                HA
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold font-outfit text-slate-100">HAIDER ALI</h4>
              <p className="text-[11px] font-mono text-amber-300/70">MERN Stack & Digital Specialist</p>
            </div>
          </div>

          {/* Real-time Digital Clock */}
          <div className="bg-[#140e09] px-4 py-2 rounded-xl text-xs font-mono text-amber-400 border border-amber-900/40 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse"></span>
            <span>{time || 'PKT Time'}</span>
          </div>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              className="p-2.5 rounded-xl bg-[#0b0805] border border-amber-950 text-slate-400 hover:text-amber-400 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              className="p-2.5 rounded-xl bg-[#0b0805] border border-amber-950 text-slate-400 hover:text-amber-400 transition-all"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => playSound('hover', soundEnabled)}
              className="p-2.5 rounded-xl bg-[#0b0805] border border-amber-950 text-slate-400 hover:text-amber-400 hover:border-amber-500/40 transition-all"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center text-xs text-slate-500 font-mono flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Haider Ali. Built with React, Vite & Tailwind CSS.</span>
          <span className="flex items-center gap-1 text-slate-400">
            Crafted with <Heart className="w-3.5 h-3.5 text-amber-500 fill-amber-500 inline" /> for Vercel Live Deployment
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
