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
      tags: ["Leadership"],
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800"
    },
    {
      role: "Job Skills Development Trainee",
      company: "Bank of Ceylon",
      location: "Ratmalana Super Grade Branch, Sri Lanka",
      period: "Jan 2021 — Apr 2021",
      description: "Completed the Bank's structured Job Skills Development Training Programme for School Leavers, gaining hands-on experience in day-to-day commercial-bank operations. Supported front-office and back-office banking operations, with a focus on customer service.",
      tags: ["Customer Service", "Banking Operations"],
      image: "https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?auto=format&fit=crop&q=80&w=800"
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
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-8 space-y-10"
          >
            {experiences.map((exp, index) => (
              <div key={index} className="group glass-card flex flex-col md:flex-row overflow-hidden hover:border-primary-500/30 transition-all duration-500">
                <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                  <img src={exp.image} alt={exp.company} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                </div>
                <div className="p-8 md:w-2/3 flex flex-col justify-center">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 transition-colors">{exp.role}</h4>
                      <div className="flex items-center gap-2 text-primary-500 font-bold mt-1 text-sm">
                        <Building2 size={14} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 block w-fit ml-auto">
                        {exp.period}
                      </span>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-2">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 font-medium">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, i) => (
                      <span key={i} className="text-[10px] font-bold px-3 py-1 rounded-full bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 text-slate-400 uppercase tracking-wider">
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
