import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles, FolderGit2, Eye } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { playSound } from '../utils/soundEffects';

const Projects = ({ soundEnabled }) => {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'Full-Stack MERN', 'Frontend & Audio', 'Mobile App'];

  const filteredProjects = selectedFilter === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.includes(selectedFilter));

  return (
    <section id="projects" className="py-24 relative z-10 bg-[#070504] border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18100a] border border-amber-900/40 text-amber-400 text-xs font-mono mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>FEATURED PORTFOLIO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-100 tracking-tight mb-4">
            Real World <span className="text-gradient-gold">Projects</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Explore live MERN applications, CMS platforms, audio PWAs, and mobile app implementations.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playSound('click', soundEnabled);
                setSelectedFilter(cat);
              }}
              onMouseEnter={() => playSound('hover', soundEnabled)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                selectedFilter === cat
                  ? 'bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-bold shadow-neon-gold scale-105'
                  : 'bg-[#140e09]/80 border border-amber-900/30 text-slate-300 hover:text-amber-400 hover:bg-[#1a120c]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-[#140e09]/90 rounded-3xl overflow-hidden border border-amber-900/30 hover:border-amber-500/50 transition-all duration-300 group flex flex-col justify-between shadow-xl"
            >
              <div>
                {/* Project Header Banner */}
                <div className="relative w-full h-48 bg-gradient-to-br from-amber-950 via-[#1e140d] to-[#070504] p-6 flex flex-col justify-between overflow-hidden border-b border-amber-900/30">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  
                  <div className="flex items-center justify-between relative z-10">
                    <span className="px-3 py-1 rounded-full bg-[#0b0805]/90 backdrop-blur-md text-[11px] font-mono text-amber-400 border border-amber-500/30">
                      {project.badge}
                    </span>
                    
                    <button
                      onClick={() => {
                        playSound('pop', soundEnabled);
                        setActiveModalProject(project);
                      }}
                      onMouseEnter={() => playSound('hover', soundEnabled)}
                      className="p-2 rounded-xl bg-[#0b0805]/80 text-slate-300 hover:text-amber-400 hover:scale-110 transition-all"
                      title="Quick Preview"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <h3 className="text-xl font-bold font-outfit text-slate-100 drop-shadow">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-300 font-light leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.metrics.map((m) => (
                      <span key={m} className="px-2.5 py-0.5 rounded-md bg-[#0b0805] text-[10px] font-mono text-amber-400 border border-amber-950">
                        ✓ {m}
                      </span>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-amber-300/60">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Links */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-amber-900/30 mt-4">
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => playSound('click', soundEnabled)}
                    onMouseEnter={() => playSound('hover', soundEnabled)}
                    className="flex-1 py-2.5 px-4 text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl hover:shadow-neon-gold transition-all text-center flex items-center justify-center gap-1.5 font-outfit"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => playSound('click', soundEnabled)}
                  onMouseEnter={() => playSound('hover', soundEnabled)}
                  className="p-2.5 rounded-xl bg-[#0b0805] border border-amber-950 text-slate-300 hover:text-amber-400 transition-all"
                  title="Source Code"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Modal */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
          soundEnabled={soundEnabled}
        />
      )}
    </section>
  );
};

export default Projects;
