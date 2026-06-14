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
      image: "https://images.unsplash.com/photo-1567427017947-545c5f89c6ad?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "Champion — KickStart Weekend 2024",
      subtitle: "SIRED Business Idea Competition",
      project: "Business Idea Pitch",
      year: "2024",
      icon: <Star className="text-primary-500" size={32} />,
      image: "https://images.unsplash.com/photo-1559136555-9303baea8bee?auto=format&fit=crop&q=80&w=800"
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden glass rounded-[3rem] border border-slate-200 dark:border-slate-800 hover:border-primary-500/30 transition-all duration-500"
            >
              <div className="h-48 overflow-hidden relative">
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-8 flex items-center gap-3">
                  <div className="p-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                    {item.icon}
                  </div>
                  <span className="text-white font-bold tracking-widest text-xs uppercase">{item.year}</span>
                </div>
              </div>
              
              <div className="p-8">
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
