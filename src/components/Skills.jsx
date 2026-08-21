import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, Server, Database, FileCode, Palette, Key, 
  PenTool, Table, FileSpreadsheet, Figma, Smartphone, GitBranch, Send, Cloud, Cpu
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const iconMap = {
  Code2, Server, Database, FileCode, Palette, Key,
  PenTool, Table, FileSpreadsheet, Figma, Smartphone, GitBranch, Send, Cloud
};

const Skills = ({ soundEnabled }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...skillsData.map((s) => s.category)];

  const filteredSkills = activeCategory === 'All'
    ? skillsData
    : skillsData.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECH STACK & TOOLS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-100 tracking-tight mb-4">
            Technical & Digital <span className="text-gradient-cyan">Skills</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            From MERN web architecture to Canva graphic designing and MS Excel data auditing.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playSound('click', soundEnabled);
                setActiveCategory(cat);
              }}
              onMouseEnter={() => playSound('hover', soundEnabled)}
              className={`px-5 py-2.5 rounded-xl text-xs font-mono font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold shadow-neon-cyan scale-105'
                  : 'glass-panel text-slate-300 hover:text-cyan-400 hover:bg-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((catGroup, groupIdx) => (
            <motion.div
              key={catGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
              className="glass-panel rounded-3xl p-6 border border-white/5 relative overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${catGroup.color}`}></div>
                <h3 className="text-lg font-bold font-outfit text-slate-100">
                  {catGroup.category}
                </h3>
              </div>

              <div className="space-y-5">
                {catGroup.skills.map((skill) => {
                  const IconComp = iconMap[skill.icon] || Code2;
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="flex items-center gap-2 font-medium text-slate-200">
                          <IconComp className="w-4 h-4 text-cyan-400" />
                          {skill.name}
                        </span>
                        <span className="font-mono text-cyan-400">{skill.level}%</span>
                      </div>

                      {/* Neon Progress Bar */}
                      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden p-0.5 border border-slate-800">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className={`h-full rounded-full bg-gradient-to-r ${catGroup.color}`}
                        ></motion.div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
