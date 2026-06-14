import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, FileText, Database, Map, Search, Cpu, Sparkles } from 'lucide-react';

const Research = () => {
  const researchWork = [
    {
      title: "Monsoon-Stratified Rooftop Solar PV Forecasting",
      status: "Ongoing (2026 – Present)",
      description: "Developing a satellite-imagery pipeline for solar panel detection and benchmarking models for PV forecasting using NASA POWER data for grid stability.",
      tags: ["Satellite Imagery", "Time-Series", "PyTorch", "GIS"],
      highlights: [
        "Detection of rooftop solar panels using YOLOv8-seg/ResUNet.",
        "Monsoon-stratified modeling for improved seasonal accuracy.",
        "Integration of GIS and satellite imagery pipelines."
      ]
    },
    {
      title: "PHM Tweet Classification & NLP Benchmarking",
      status: "Completed (2025)",
      description: "Investigated and compared deep learning architectures for imbalanced social media text classification within the Public Health Monitoring domain.",
      tags: ["NLP", "LSTM/Bi-LSTM", "Transformers", "BERT"],
      highlights: [
        "Benchmarked tokenizers and embeddings (Word2Vec, FastText).",
        "Handled severe class imbalance in social media datasets.",
        "Implemented Bi-LSTM-CRF for entity recognition."
      ]
    }
  ];

  return (
    <section id="research" className="section-padding bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 bg-primary-500/10 text-primary-500 rounded-2xl mb-6"
          >
            <Microscope size={32} />
          </motion.div>
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary-500 uppercase mb-4">Academic Contributions</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
            Research & <span className="text-gradient">Innovation</span>.
          </h3>
        </div>

        <div className="space-y-16">
          {researchWork.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 md:p-16 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-12 text-primary-500/5 opacity-20 transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-1000">
                <Sparkles size={200} />
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
                <div className="lg:col-span-8">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-5 py-2 bg-primary-500/10 text-primary-500 text-xs font-black rounded-full uppercase tracking-[0.2em] border border-primary-500/20">
                      {work.status}
                    </span>
                  </div>
                  <h4 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight text-slate-900 dark:text-slate-100">
                    {work.title}
                  </h4>
                  <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-4xl font-medium">
                    {work.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {work.highlights.map((item, i) => (
                      <div key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-white/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700/50">
                        <div className="mt-1.5 p-1 bg-primary-500 text-white rounded-full">
                          <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                        </div>
                        <span className="text-slate-600 dark:text-slate-300 font-bold text-sm tracking-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {work.tags.map((tag, i) => (
                      <span key={i} className="px-5 py-2 bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 rounded-xl text-xs font-black uppercase tracking-widest flex items-center gap-2">
                         {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-4 flex items-center justify-center">
                   <div className="w-full aspect-square glass rounded-[3rem] flex flex-col items-center justify-center gap-6 text-slate-300 dark:text-slate-700 border-dashed border-4 border-slate-200 dark:border-slate-800 group-hover:border-primary-500/30 transition-colors duration-500">
                      <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                      >
                        <FileText size={80} className="text-slate-200 dark:text-slate-800" />
                      </motion.div>
                      <span className="text-sm font-black uppercase tracking-[0.2em] text-slate-400 dark:text-slate-600">Publication Pending</span>
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

export default Research;
