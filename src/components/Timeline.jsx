import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle, Flame } from 'lucide-react';
import { timelineData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const Timeline = ({ soundEnabled }) => {
  return (
    <section id="timeline" className="py-24 relative z-10 bg-[#070504]">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18100a] border border-amber-900/40 text-amber-400 text-xs font-mono mb-4">
            <Flame className="w-3.5 h-3.5" />
            <span>CAREER PATH & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-100 tracking-tight mb-4">
            Experience & <span className="text-gradient-gold">Journey</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            A chronological timeline of web development projects, design achievements, and technical growth.
          </p>
        </div>

        {/* Timeline Track */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Amber Line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-amber-500 via-yellow-500 to-amber-700 opacity-40 -translate-x-1/2" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-start ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Glowing Node Dot */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-1.5 w-6 h-6 rounded-full bg-[#0b0805] border-2 border-amber-400 shadow-neon-gold flex items-center justify-center z-20">
                    <div className="w-2 h-2 rounded-full bg-amber-400 animate-ping"></div>
                  </div>

                  {/* Content Box */}
                  <div
                    className={`w-full sm:w-[calc(50%-2.5rem)] pl-12 sm:pl-0 ${
                      isEven ? 'sm:text-right' : ''
                    }`}
                  >
                    <div
                      onMouseEnter={() => playSound('hover', soundEnabled)}
                      className="bg-[#140e09]/90 rounded-3xl p-6 sm:p-8 border border-amber-900/30 hover:border-amber-500/50 transition-all group shadow-xl"
                    >
                      <div
                        className={`flex items-center gap-2 text-amber-400 text-xs font-mono mb-2 ${
                          isEven ? 'sm:justify-end' : ''
                        }`}
                      >
                        <Calendar className="w-3.5 h-3.5 text-amber-400" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="text-xl font-bold font-outfit text-slate-100 mb-1 group-hover:text-amber-300 transition-colors">
                        {item.role}
                      </h3>

                      <p className="text-xs text-yellow-400 font-mono mb-4">
                        {item.company}
                      </p>

                      <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div
                        className={`flex flex-wrap gap-1.5 ${
                          isEven ? 'sm:justify-end' : ''
                        }`}
                      >
                        {item.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-md bg-[#0b0805] text-[10px] font-mono text-amber-300/80 border border-amber-950"
                          >
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Timeline;
