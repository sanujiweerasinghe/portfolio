import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen, User, Download, ExternalLink } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "BSc (Hons) in Data Science",
      institution: "University of Peradeniya",
      period: "2022 – Present",
      details: "GPA: 3.45 / 4.00"
    },
    {
      degree: "G.C.E. Advanced Level",
      institution: "Combined Mathematics Stream",
      period: "2020",
      details: "A, B, C Passes"
    }
  ];

  return (
    <section id="about" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-6 flex items-center gap-3">
              <User size={18} /> About Me
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
              Passionate about <br />
              <span className="text-gradient">Data Science & AI</span>.
            </h3>
            <div className="space-y-8 text-slate-600 dark:text-slate-400 leading-relaxed text-xl font-medium">
              <p>
                I am Sanuji Weerasinghe, a Data Science undergraduate at the University of Peradeniya with a strong foundation in machine learning, predictive modeling, and building impactful AI solutions.
              </p>
              <p>
                My expertise spans from building Retrieval-Augmented Generation (RAG) chatbots to developing biomedical NLP pipelines and computer vision models for agricultural disease detection. I thrive on the challenge of turning complex data into actionable insights that drive real-world decisions.
              </p>
            </div>
            
            <div className="mt-12 flex flex-wrap gap-6">
               <a 
                 href="/Sanuji_Weerasinghe_CV_final1.pdf" 
                 download 
                 className="btn-primary"
               >
                 Download Full CV <Download size={20} />
               </a>
               <a href="#contact" className="btn-secondary">
                 Let's Talk <ExternalLink size={20} />
               </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="glass-card p-10">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-4 bg-blue-500/10 text-blue-500 rounded-[1.5rem]">
                  <GraduationCap size={32} />
                </div>
                <h4 className="text-3xl font-bold tracking-tight">Education</h4>
              </div>
              <div className="space-y-10">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-10 border-l-2 border-slate-100 dark:border-slate-800">
                    <div className="absolute w-4 h-4 bg-primary-500 rounded-full -left-[9px] top-1.5 shadow-[0_0_15px_rgba(14,165,233,0.5)]"></div>
                    <h5 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-1">{edu.degree}</h5>
                    <p className="text-primary-500 font-bold tracking-tight text-lg mb-2">{edu.institution}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-500 font-bold uppercase tracking-widest">{edu.period} • {edu.details}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
