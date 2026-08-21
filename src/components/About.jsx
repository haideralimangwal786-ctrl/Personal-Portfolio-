import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, FileSpreadsheet, CheckCircle2, Award, Zap, Download } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const About = ({ soundEnabled }) => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-panel border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>BACKGROUND & PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-100 tracking-tight mb-4">
            About <span className="text-gradient-cyan">Haider Ali</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Bridging technical code precision with creative digital graphics and organized data management solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Bio Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel rounded-3xl p-8 border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

              <h3 className="text-2xl font-bold font-outfit text-slate-100 mb-4 flex items-center gap-3">
                <span className="text-cyan-400 font-mono text-xl">&gt;_</span>
                MERN Stack Developer & Digital Specialist
              </h3>

              <p className="text-slate-300 leading-relaxed font-light mb-4">
                I am a dedicated Web Developer based in District Chakwal, Pakistan. I build modern, scalable web applications using MongoDB, Express.js, React.js, and Node.js. My work ranges from multi-user marketplace platforms (Homedify) to dynamic CMS web hubs (Dr. Waseem Iqbal Research Hub) and audio streaming PWAs.
              </p>

              <p className="text-slate-300 leading-relaxed font-light mb-6">
                In addition to web development, I offer extensive expertise in <strong className="text-purple-300">Canva Graphic Design</strong> (social media graphics, logos, presentation decks, banner assets) and <strong className="text-emerald-300">MS Excel Data Entry & Management</strong> (spreadsheet formulas, data cleaning, automated reports).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">MERN Web Architecture</h4>
                    <p className="text-xs text-slate-400">Scalable REST APIs & React SPAs</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Canva & UI Design</h4>
                    <p className="text-xs text-slate-400">Eye-catching visual marketing assets</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Excel Data Entry</h4>
                    <p className="text-xs text-slate-400">Data auditing, formulas & formatting</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-200">Cross-Platform Apps</h4>
                    <p className="text-xs text-slate-400">Flutter mobile development</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Counter Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {personalData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-white/5 hover:border-cyan-500/30 transition-all text-center group"
                onMouseEnter={() => playSound('hover', soundEnabled)}
              >
                <div className="text-3xl sm:text-4xl font-black font-outfit text-gradient-cyan mb-2 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
