import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, Github, Linkedin, Sparkles } from 'lucide-react';
import profileImg from '../../assets/profile.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center section-padding pt-32 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-primary-500/10 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-8 border border-primary-500/20 backdrop-blur-md"
          >
            <Sparkles size={16} className="animate-pulse" />
            <span>Open to Data Science / Data Engineering internships</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-4 leading-tight">
            <span className="text-blue-500">Sanuji</span> Weerasinghe
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200 mb-6">
            Data Science Undergraduate
          </h2>

          <p className="text-xl md:text-2xl text-primary-500 font-bold mb-8">
            Building end-to-end ML systems.
          </p>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
            Final-year Data Science undergraduate at the University of Peradeniya with a strong foundation in statistics, machine learning, and data engineering — currently leading a research project on <span className="text-slate-900 dark:text-white font-bold underline decoration-primary-500/30 underline-offset-4">rooftop solar PV forecasting</span>.
          </p>

          <div className="grid grid-cols-3 gap-8 mb-12">
            {[
              { label: "Projects Built", value: "7+" },
              { label: "Awards Won", value: "2" },
              { label: "Total Commits", value: "375+" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col">
                <span className="text-3xl font-bold text-primary-500">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{stat.label}</span>
              </div>
            ))}
          </div>
          
          <div className="flex flex-wrap gap-5 mb-16">
            <a href="#projects" className="btn-primary group px-8">
              View Work 
              <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a 
              href="/Sanuji_Weerasinghe_CV_final1.pdf" 
              download 
              className="btn-secondary group px-8"
            >
              Download Resume 
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-slate-400">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs font-bold uppercase tracking-widest">Colombo, Sri Lanka</span>
            </div>
            <div className="h-4 w-px bg-slate-200 dark:bg-slate-800"></div>
            <div className="flex items-center gap-4">
              <a href="https://github.com/sanujiweerasinghe/" target="_blank" className="text-slate-400 hover:text-primary-500 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/sanuji-weerasinghe/" target="_blank" className="text-slate-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-[500px] mx-auto">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/10 rounded-full blur-[100px]"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px]"></div>
            
            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[3.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl z-10 group">
              <img 
                src={profileImg} 
                alt="Sanuji Weerasinghe" 
                className="w-full h-full object-cover group-hover:grayscale transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
