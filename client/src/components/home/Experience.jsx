import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight, Building2, Terminal } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: "Director of Research & Development",
      company: "Data Science Society",
      location: "University of Peradeniya",
      period: "2026 — Present",
      description: "Director of Research & Development at the Data Science Society.",
      tags: ["Leadership"]
    },
    {
      role: "Job Skills Development Trainee",
      company: "Bank of Ceylon",
      location: "Ratmalana Super Grade Branch, Sri Lanka",
      period: "Jan 2021 — Apr 2021",
      description: "Completed the Bank's structured Job Skills Development Training Programme for School Leavers, gaining hands-on experience in day-to-day commercial-bank operations. Supported front-office and back-office banking operations, with a focus on customer service.",
      tags: ["Customer Service", "Banking Operations", "Professional Skills"]
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-6 flex items-center gap-3">
              <Briefcase size={18} /> Experience
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
              Where I've <br />
              <span className="text-gradient">Worked</span>.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10 font-medium">
              Professional and training experience to date, combining technical leadership with corporate exposure.
            </p>
            
            <div className="p-8 glass rounded-[2rem] border border-slate-200 dark:border-slate-800">
               <div className="flex items-center gap-4 mb-4">
                 <div className="w-12 h-12 rounded-xl bg-primary-500/10 text-primary-500 flex items-center justify-center">
                   <Terminal size={24} />
                 </div>
                 <h4 className="font-bold">Total Experience</h4>
               </div>
               <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">
                 Over 4 years of academic and professional growth in the field of Data Science and operations.
               </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 space-y-12"
          >
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="absolute -left-[57px] top-2 w-4 h-4 rounded-full bg-primary-500 ring-8 ring-primary-500/10 z-10 hidden lg:block"></div>
                
                <div className="glass-card p-10 group-hover:border-primary-500/50 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-primary-500 font-bold mt-1">
                        <Building2 size={16} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-2 text-sm font-bold">
                      <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-slate-400 uppercase tracking-widest text-[10px]">
                        <MapPin size={12} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg mb-8 font-medium">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold px-4 py-1.5 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-500 uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
