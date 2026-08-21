import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, MapPin, Send, Copy, Check, Github, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { playSound } from '../utils/soundEffects';

const Contact = ({ soundEnabled }) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    playSound('success', soundEnabled);
    navigator.clipboard.writeText(personalData.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    playSound('success', soundEnabled);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-[#070504] border-t border-amber-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#18100a] border border-amber-900/40 text-amber-400 text-xs font-mono mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>LET'S CONNECT & COLLABORATE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-outfit text-slate-100 tracking-tight mb-4">
            Get In <span className="text-gradient-gold">Touch</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed">
            Have a project in mind, need Canva graphics, or require MERN full-stack development? Send a message or chat on WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info & Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Email Card */}
            <div className="bg-[#140e09]/90 rounded-3xl p-6 border border-amber-900/30 hover:border-amber-500/40 transition-all flex items-center justify-between group shadow-xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Official Email</span>
                  <span className="text-sm font-semibold text-slate-200">{personalData.email}</span>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="p-2.5 rounded-xl bg-[#0b0805] border border-amber-950 text-slate-300 hover:text-amber-400 transition-all"
                title="Copy Email"
              >
                {copied ? <Check className="w-4 h-4 text-amber-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* WhatsApp Card */}
            <a
              href={personalData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => playSound('click', soundEnabled)}
              onMouseEnter={() => playSound('hover', soundEnabled)}
              className="bg-[#140e09]/90 rounded-3xl p-6 border border-amber-900/30 hover:border-amber-500/50 hover:shadow-neon-gold transition-all flex items-center justify-between group block shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-950/80 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">Instant WhatsApp</span>
                  <span className="text-sm font-semibold text-slate-200">{personalData.phone}</span>
                </div>
              </div>
              <span className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 text-slate-950 font-bold text-xs font-outfit">
                Chat Live
              </span>
            </a>

            {/* Location & GitHub */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#140e09]/90 rounded-2xl p-5 border border-amber-900/30 shadow-lg">
                <MapPin className="w-5 h-5 text-amber-400 mb-2" />
                <span className="text-[10px] font-mono text-slate-400 block">LOCATION</span>
                <span className="text-xs font-medium text-slate-200 block mt-0.5">{personalData.location}</span>
              </div>

              <a
                href={personalData.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playSound('click', soundEnabled)}
                onMouseEnter={() => playSound('hover', soundEnabled)}
                className="bg-[#140e09]/90 rounded-2xl p-5 border border-amber-900/30 hover:border-amber-500/40 transition-all block group shadow-lg"
              >
                <Github className="w-5 h-5 text-amber-400 mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-[10px] font-mono text-slate-400 block">GITHUB PROFILE</span>
                <span className="text-xs font-medium text-slate-200 block mt-0.5">haideralimangwal786</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-[#140e09]/90 rounded-3xl p-8 border border-amber-900/30 relative shadow-2xl">
              <h3 className="text-2xl font-bold font-outfit text-slate-100 mb-2">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-400 mb-6 font-light">
                Fill out the form below and I will respond to your inquiry within 24 hours.
              </p>

              {submitted ? (
                <div className="p-8 text-center bg-amber-950/60 rounded-2xl border border-amber-500/40">
                  <Sparkles className="w-10 h-10 text-amber-400 mx-auto mb-3 animate-bounce" />
                  <h4 className="text-lg font-bold text-slate-100 mb-1">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">Thank you for reaching out, Haider Ali will get back to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">YOUR NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Mercer"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#0b0805] border border-amber-900/40 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all font-light"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">EMAIL ADDRESS</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#0b0805] border border-amber-900/40 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all font-light"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-mono text-slate-300 block mb-1.5">PROJECT / INQUIRY DETAILS</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell me about your web app project, Canva graphic needs, or data entry requirements..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full bg-[#0b0805] border border-amber-900/40 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/60 transition-all font-light resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    onMouseEnter={() => playSound('hover', soundEnabled)}
                    className="w-full py-4 text-xs font-bold uppercase tracking-wider text-slate-950 bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 rounded-xl shadow-neon-gold hover:scale-[1.01] transition-all flex items-center justify-center gap-2 font-outfit"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
