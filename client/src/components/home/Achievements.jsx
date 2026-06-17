import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, ChevronRight } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Champion — IEEE INSL Central Provincial",
      subtitle: "New Innovation Competition",
      project: "Hope Project",
      year: "2024",
      icon: <Trophy className="text-yellow-500" size={32} />,
      image: "/certificates/certificate-1.jpeg"
    },
    {
      title: "Champion — KickStart Weekend 2024",
      subtitle: "SIRED Business Idea Competition",
      project: "Business Idea Pitch",
      year: "2024",
      icon: <Star className="text-primary-500" size={32} />,
      image: "/certificates/certificate-2.jpeg"
    }
  ];

  return (
    <section id="achievements" className="section-padding bg-slate-50 dark:bg-slate-900/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-4"
          >
            Recognition
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Awards & Recognition
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            Competitions and milestones along the way.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-[3rem] border border-slate-200 dark:border-slate-800 overflow-hidden group hover:border-primary-500/30 transition-all duration-500 flex flex-col"
            >
              <div className="p-10 flex items-start gap-8 flex-grow">
                <div className="p-5 bg-white dark:bg-slate-800 rounded-3xl shadow-xl group-hover:scale-110 transition-transform duration-500 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-primary-500 uppercase tracking-widest">{item.year}</span>
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 dark:text-slate-400 font-bold mb-4 uppercase tracking-tighter text-sm">
                    {item.subtitle}
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-200 text-xs font-bold border border-slate-200 dark:border-slate-700">
                    <ChevronRight size={14} className="text-primary-500" />
                    {item.project}
                  </div>
                </div>
              </div>
              {item.image && (
                <div className="w-full h-64 overflow-hidden border-t border-slate-200 dark:border-slate-800 relative group-hover:h-80 transition-all duration-500 ease-in-out cursor-pointer" onClick={() => window.open(item.image, '_blank')}>
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
                  <img src={item.image} alt={`${item.title} Certificate`} className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black/60 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md">
                    Click to view
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
