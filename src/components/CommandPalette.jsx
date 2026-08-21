import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Terminal, ArrowRight, Volume2, VolumeX, Mail, MessageSquare, Code, Sparkles, X } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const commands = [
  { id: 'about', title: 'Navigate to About Section', section: 'Navigation', icon: Code, href: '#about' },
  { id: 'services', title: 'Navigate to Services (MERN, Canva, Excel)', section: 'Navigation', icon: Sparkles, href: '#services' },
  { id: 'skills', title: 'Navigate to Skills & Tools Matrix', section: 'Navigation', icon: Code, href: '#skills' },
  { id: 'projects', title: 'Navigate to Real World Projects', section: 'Navigation', icon: Terminal, href: '#projects' },
  { id: 'timeline', title: 'Navigate to Experience Journey', section: 'Navigation', icon: Code, href: '#timeline' },
  { id: 'contact', title: 'Navigate to Contact Hub', section: 'Navigation', icon: Mail, href: '#contact' },
  { id: 'whatsapp', title: 'Chat directly on WhatsApp (+92 311 5609634)', section: 'Actions', icon: MessageSquare, href: personalData.whatsapp, external: true },
  { id: 'email', title: 'Copy Official Email Address', section: 'Actions', icon: Mail, action: 'copy-email' },
  { id: 'audio', title: 'Toggle UI Sound Effects Synth', section: 'Settings', icon: Volume2, action: 'toggle-audio' },
];

const CommandPalette = ({ isOpen, onClose, soundEnabled, setSoundEnabled }) => {
  const [query, setQuery] = useState('');

  const filteredCommands = commands.filter((cmd) =>
    cmd.title.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose(); // Toggle state controlled by parent
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSelectCommand = (cmd) => {
    playSound('click', soundEnabled);
    if (cmd.external) {
      window.open(cmd.href, '_blank');
    } else if (cmd.href) {
      const el = document.querySelector(cmd.href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (cmd.action === 'copy-email') {
      navigator.clipboard.writeText(personalData.email);
      playSound('success', soundEnabled);
    } else if (cmd.action === 'toggle-audio') {
      setSoundEnabled(!soundEnabled);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Command Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          className="relative w-full max-w-xl glass-panel rounded-3xl border border-cyan-500/40 shadow-2xl overflow-hidden z-10"
        >
          {/* Top Search Input */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-slate-800">
            <Search className="w-5 h-5 text-cyan-400 shrink-0" />
            <input
              type="text"
              autoFocus
              placeholder="Type a command or search section..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none font-mono"
            />
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Commands List */}
          <div className="max-h-80 overflow-y-auto p-3 space-y-1">
            {filteredCommands.length === 0 ? (
              <div className="p-6 text-center text-xs font-mono text-slate-500">
                No matching commands found.
              </div>
            ) : (
              filteredCommands.map((cmd) => {
                const Icon = cmd.icon;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelectCommand(cmd)}
                    onMouseEnter={() => playSound('hover', soundEnabled)}
                    className="w-full flex items-center justify-between p-3 rounded-2xl hover:bg-slate-900/90 text-left transition-all group border border-transparent hover:border-slate-800"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-slate-900 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-slate-200 block group-hover:text-cyan-300">
                          {cmd.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-500">
                          {cmd.section}
                        </span>
                      </div>
                    </div>

                    <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                  </button>
                );
              })
            )}
          </div>

          {/* Footer Bar */}
          <div className="px-6 py-3 bg-slate-950/80 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
            <span>Navigation: Click or Enter</span>
            <span>ESC to close</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CommandPalette;
