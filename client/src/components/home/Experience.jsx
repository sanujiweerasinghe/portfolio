import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "R&D Director",
      company: "DataEX Society",
      location: "University of Peradeniya",
      period: "2026 – Present",
      description: "Leading research initiatives and development projects in data science. Mentoring junior members and orchestrating technical workshops.",
      tags: ["Leadership", "Research", "Strategy"]
    },
    {
      role: "Volunteer Trainee",
      company: "Bank of Ceylon",
      location: "Colombo, Sri Lanka",
      period: "Skills Development Programme",
      description: "Gained exposure to financial data workflows and banking operations while contributing to digital transformation initiatives.",
      tags: ["Banking", "Data Analysis", "Operations"]
    },
    {
      role: "Open Source Contributor",
      company: "GitHub Community",
      location: "Remote",
      period: "Continuous",
      description: "Recognized as a 'Pull Shark' for active contributions and collaboration. Maintaining high-quality code standards in ML and AI repositories.",
      tags: ["Git", "Collaboration", "Python"]
    }
  ];

  return (
    <section id="experience" className="section-padding bg-slate-50/50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-4 flex items-center gap-2">
              <div className="w-8 h-px bg-primary-500"></div> Career Journey
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              Professional <span className="text-gradient">Experience</span>.
            </h3>
          </div>
          <div className="hidden lg:block p-6 glass rounded-3xl border-primary-500/10 max-w-sm">
             <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
               A track record of leadership and technical contribution in academic and professional environments.
             </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card group p-8 md:p-12"
            >
              <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/3">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-primary-500/10 text-primary-500 rounded-2xl group-hover:scale-110 transition-transform duration-500">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white">{exp.role}</h4>
                      <p className="text-primary-500 font-bold tracking-tight">{exp.company}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                      <Calendar size={16} /> {exp.period}
                    </div>
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm font-medium">
                      <MapPin size={16} /> {exp.location}
                    </div>
                  </div>
                </div>

                <div className="lg:w-2/3 lg:pl-10 lg:border-l border-slate-200 dark:border-slate-800 flex flex-col justify-between">
                  <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                    {exp.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-3">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-xl text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest border border-slate-200/50 dark:border-slate-700/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
