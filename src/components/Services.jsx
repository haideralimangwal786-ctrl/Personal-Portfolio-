import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, FileSpreadsheet, Smartphone, ArrowUpRight, Sparkles } from 'lucide-react';
import { servicesData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const iconMap = {
  Code: Code2,
  Palette: Palette,
  FileSpreadsheet: FileSpreadsheet,
  Smartphone: Smartphone
};

const Services = ({ soundEnabled }) => {
  return (
    <section id="services" className="py-20 relative z-10 bg-[#030712] border-y border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-purple-500/30 text-purple-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHAT I DO</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-white tracking-tight mb-4">
            Specialized <span className="text-gradient-cyan">Services</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
            High quality technical & digital solutions tailored for startups, businesses, and academic platforms.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesData.map((service, idx) => {
            const IconComponent = iconMap[service.icon] || Code2;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="glass-panel rounded-3xl p-8 border border-slate-800 hover:border-sky-500/50 hover:shadow-neon-cyan transition-all group relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-6 text-slate-600 group-hover:text-sky-400 transition-colors">
                  <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 mb-6 group-hover:scale-110 group-hover:bg-sky-500/10 transition-all">
                  <IconComponent className="w-7 h-7" />
                </div>

                <span className="inline-block px-3 py-1 rounded-full bg-slate-900 text-sky-300 text-[11px] font-mono mb-3 border border-slate-800">
                  {service.badge}
                </span>

                <h3 className="text-xl font-bold font-outfit text-white mb-3 group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-300 font-light leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;
