import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Database, Globe, Sun, Zap, Search, ChevronRight, BarChart3, Map } from 'lucide-react';

const Research = () => {
  const objectives = [
    {
      title: "Satellite Imagery Pipeline",
      description: "Built a pipeline across 5 Sri Lankan districts to detect rooftop solar panels, benchmarking YOLOv8-seg and ResUNet segmentation models to estimate district-level rooftop PV potential."
    },
    {
      title: "Forecasting Benchmark",
      description: "Benchmarked CNN-LSTM against a Transformer for monsoon-stratified day- and week-ahead PV forecasting (5 districts × 4 monsoon regimes), evaluated with MAE, RMSE, R², and skill scores."
    },
    {
      title: "Dataset Engineering",
      description: "Engineered a leakage-safe, 39-feature time-series dataset spanning 8 years from NASA POWER and public meteorological sources with strict chronological splits."
    }
  ];

  const technologies = ["Python", "PyTorch", "CNN-LSTM & Transformer", "ResUNet / YOLOv8-seg", "Satellite Imagery & GIS", "Time-Series Forecasting"];

  return (
    <section id="research" className="section-padding bg-slate-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/30 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-400 uppercase mb-6 flex items-center gap-3">
              <Microscope size={18} /> Current Research
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Monsoon-Stratified <br />
              <span className="text-primary-400 font-serif italic">Solar PV Forecasting</span>
            </h3>
            <p className="text-slate-400 text-xl leading-relaxed mb-10 font-medium">
              A satellite-imagery and time-series research project detecting rooftop solar panels and forecasting district-level PV generation under different monsoon regimes to support grid stability.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-12 text-sm font-bold uppercase tracking-wider">
               <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                 <Search size={16} className="text-primary-400" />
                 <span>DSC 4996 Project</span>
               </div>
               <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10">
                 <Globe size={16} className="text-blue-400" />
                 <span>Uni. of Peradeniya</span>
               </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {objectives.map((obj, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                    <ChevronRight size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">{obj.title}</h4>
                    <p className="text-slate-500 group-hover:text-slate-300 transition-colors text-sm leading-relaxed">{obj.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card bg-white/5 border-white/10 p-10 rounded-[3rem]">
              <div className="flex items-center gap-4 mb-10">
                 <div className="p-4 bg-primary-500 rounded-2xl">
                   <Sun size={32} />
                 </div>
                 <div>
                   <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-1">Focus Areas</p>
                   <p className="text-2xl font-bold">Grid Stability & Geospatial AI</p>
                 </div>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5">
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-slate-500 mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map(tech => (
                      <span key={tech} className="px-3 py-1.5 rounded-lg bg-primary-500/10 text-primary-400 text-xs font-bold border border-primary-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-center relative overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="Mapping" />
                    <Map size={24} className="mx-auto mb-3 text-blue-400 relative z-10" />
                    <p className="text-xs font-bold text-slate-500 uppercase relative z-10">5 Districts</p>
                    <p className="text-lg font-bold relative z-10">Mapping</p>
                  </div>
                  <div className="p-6 rounded-[2rem] bg-white/5 border border-white/5 text-center relative overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity" alt="Data history" />
                    <BarChart3 size={24} className="mx-auto mb-3 text-green-400 relative z-10" />
                    <p className="text-xs font-bold text-slate-500 uppercase relative z-10">8 Years</p>
                    <p className="text-lg font-bold relative z-10">Data History</p>
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

export default Research;
