import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Sparkles } from 'lucide-react';
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
            <span>Available for Internships 2026</span>
          </motion.div>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
            <span className="text-gradient">Hi, I'm Sanuji Weerasinghe</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl leading-relaxed font-medium">
            A passionate Data Science undergraduate with a strong foundation in machine learning and predictive modeling. Experienced in building end-to-end AI solutions, from <span className="text-slate-900 dark:text-white font-bold">RAG-based chatbots</span> to <span className="text-slate-900 dark:text-white font-bold">biomedical NLP pipelines</span> and computer vision models.
          </p>
          
          <div className="flex flex-wrap gap-5 mb-16">
            <a href="#projects" className="btn-primary group">
              View Work 
              <motion.span 
                animate={{ x: [0, 5, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </a>
            <a 
              href="/Sanuji_Weerasinghe_CV_final1.pdf" 
              download 
              className="btn-secondary group"
            >
              Download CV 
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
          
          <div className="flex items-center gap-8">
            <a href="https://github.com/sanujiweerasinghe/" target="_blank" className="p-3 glass rounded-2xl text-slate-400 hover:text-primary-500 hover:scale-110 transition-all">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/sanuji-weerasinghe-b91b9a24b/" target="_blank" className="p-3 glass rounded-2xl text-slate-400 hover:text-primary-500 hover:scale-110 transition-all">
              <Linkedin size={24} />
            </a>
            <div className="h-px w-12 bg-slate-200 dark:bg-slate-800"></div>
            <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Connect</span>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-[550px] mx-auto">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary-500/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            
            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[3rem] overflow-hidden border-8 border-white/50 dark:border-slate-900/50 shadow-2xl z-10 group">
              <img 
                src={profileImg} 
                alt="Sanuji Weerasinghe" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 group-hover:grayscale transition-all duration-1000 ease-in-out"
              />
            </div>
            
            {/* Decorative Floating Elements */}
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 p-6 glass rounded-[2rem] z-20 shadow-2xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-500">
                  <Sparkles size={24} />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-tighter">Status</p>
                  <p className="text-sm font-bold">Open to Work</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
