import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Sparkles, CheckCircle2 } from 'lucide-react';
import { playSound } from '../utils/soundEffects';

const ProjectModal = ({ project, onClose, soundEnabled }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => {
            playSound('click', soundEnabled);
            onClose();
          }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="relative w-full max-w-3xl glass-panel rounded-3xl p-6 sm:p-8 border border-cyan-500/40 shadow-2xl z-10 my-8 overflow-hidden"
        >
          {/* Top Cyber Glow accent */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500" />

          {/* Header Bar */}
          <div className="flex items-start justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 mb-2">
                <Sparkles className="w-3 h-3" />
                {project.badge}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-slate-100">
                {project.title}
              </h3>
            </div>

            <button
              onClick={() => {
                playSound('click', soundEnabled);
                onClose();
              }}
              className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-100 hover:border-slate-700 transition-all shrink-0"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Preview Hero Header */}
          <div className={`w-full aspect-video rounded-2xl bg-gradient-to-br ${project.gradient} border border-slate-800 flex flex-col items-center justify-center p-6 text-center mb-6 relative overflow-hidden group`}>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="w-16 h-16 rounded-2xl bg-slate-950/80 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-3xl mb-3 shadow-neon-cyan">
              ⚡
            </div>
            <span className="text-sm font-mono text-cyan-300 font-semibold mb-1">Interactive Project Preview</span>
            <p className="text-xs text-slate-400 max-w-md">{project.description}</p>
          </div>

          {/* Metrics & Highlights */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {project.metrics.map((metric, i) => (
              <div key={i} className="bg-slate-900/80 p-3 rounded-xl border border-slate-800 text-center">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <span className="text-xs font-medium text-slate-200 block">{metric}</span>
              </div>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm text-slate-300 leading-relaxed font-light mb-6">
            {project.description} This application was built and engineered with focus on high responsiveness, secure data handling, clean architecture, and modern UX aesthetics.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-slate-800">
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click', soundEnabled)}
                className="flex-1 min-w-[160px] py-3 px-5 text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl hover:shadow-neon-cyan transition-all text-center flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Demo</span>
              </a>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              className="py-3 px-5 text-xs font-semibold text-slate-200 bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-xl transition-all flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Repository</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
