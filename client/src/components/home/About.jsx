import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, User, Download, ExternalLink, Sparkles, Brain, Code, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-6 flex items-center gap-3">
              <User size={18} /> About Me
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
              A little about <br />
              <span className="text-gradient">who I am</span>.
            </h3>
            
            <div className="space-y-6 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
              <p>
                Final-year Data Science undergraduate at the University of Peradeniya with a strong foundation in statistics, machine learning, and data engineering. Currently leading a final-year research project on deep-learning-based rooftop solar PV forecasting and geospatial suitability mapping for grid integration.
              </p>
              <p>
                Experienced in delivering end-to-end data solutions — from ingestion and cleaning through modelling, deployment, and interactive visualization — using Python, scikit-learn, deep learning frameworks, Apache Airflow, and RAG systems. 
              </p>
              <p>
                Seeking a Data Science / Data Engineering internship to apply analytical and software-engineering skills to real-world problems, with a particular interest in financial data, business intelligence, and intelligent automation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="p-6 glass rounded-3xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Brain size={20} className="text-primary-500" /> Areas of Interest
                </h4>
                <ul className="space-y-2 text-sm font-medium">
                  {["Machine Learning & Deep Learning", "Data Engineering & MLOps", "RAG Systems", "Geospatial Analysis", "Business Intelligence"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6 glass rounded-3xl border border-slate-200 dark:border-slate-800">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-2 text-slate-900 dark:text-white">
                  <Target size={20} className="text-blue-500" /> Soft Skills
                </h4>
                <ul className="space-y-2 text-sm font-medium">
                  {["Leadership", "Effective Communication", "Critical Thinking", "Problem Solving", "Time Management"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
               <a href="/Sanuji_Weerasinghe_CV.pdf?v=2" download className="btn-primary">
                 Download Resume <Download size={20} />
               </a>
               <a href="#contact" className="btn-secondary">
                 Get in touch <ExternalLink size={20} />
               </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="glass-card p-8">
              <h4 className="text-2xl font-bold mb-8 flex items-center gap-3">
                <GraduationCap className="text-primary-500" size={28} /> Education
              </h4>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                  <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-1"></div>
                  <h5 className="text-lg font-bold">BSc (Hons) in Data Science</h5>
                  <p className="text-primary-500 font-bold text-sm">University of Peradeniya</p>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">2022 — Present</p>
                  <div className="mt-3 flex items-center gap-2 font-bold text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800 w-fit px-3 py-1 rounded-lg border border-slate-200 dark:border-slate-700">
                    <Award size={14} className="text-yellow-500" />
                    <span className="text-xs">GPA: 3.45 / 4.00</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {["Statistics", "Time Series", "ML", "Data Analytics"].map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800">
                  <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[9px] top-1"></div>
                  <h5 className="text-lg font-bold">G.C.E. Advanced Level</h5>
                  <p className="text-blue-500 font-bold text-sm">Sri Lanka</p>
                  <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">2020</p>
                  <div className="mt-3 text-xs font-bold text-slate-600 dark:text-slate-400">
                    Combined Maths: <span className="text-primary-500">A</span> · 
                    Chemistry: <span className="text-blue-500">B</span> · 
                    Physics: <span className="text-blue-500">C</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
