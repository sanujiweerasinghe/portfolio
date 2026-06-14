import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, GitBranch, GitPullRequest, Star, Code } from 'lucide-react';

const GithubStats = () => {
  const username = "sanujiweerasinghe";
  const theme = "transparent"; // Using transparent for glass effect compatibility

  return (
    <section id="github" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-4"
          >
            Open Source
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            GitHub Activity
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            A live snapshot of my open-source work, ML experiments, and research code.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="glass p-4 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=dracula&hide_border=true&bg_color=00000000&title_color=0ea5e9&icon_color=0ea5e9&text_color=94a3b8`} 
                alt="GitHub Stats" 
                className="w-full max-w-md"
              />
            </div>
            <div className="glass p-4 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-hidden flex justify-center">
              <img 
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dracula&hide_border=true&bg_color=00000000&title_color=0ea5e9&text_color=94a3b8`} 
                alt="Most Used Languages" 
                className="w-full max-w-md"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <h4 className="text-3xl font-bold flex items-center gap-3">
                <Github size={32} /> @{username}
              </h4>
              <p className="text-lg text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                I am an active contributor to the data science community, sharing my research implementations, ML utility scripts, and full-stack prototypes.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { label: "Pull Shark", icon: <GitPullRequest className="text-purple-500" />, value: "Active" },
                { label: "Repositories", icon: <GitBranch className="text-green-500" />, value: "20+" },
                { label: "Total Stars", icon: <Star className="text-yellow-500" />, value: "50+" },
                { label: "Commits", icon: <Code className="text-blue-500" />, value: "375+" }
              ].map((item, i) => (
                <div key={i} className="p-6 glass rounded-[2rem] border border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-3 mb-2">
                    {item.icon}
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{item.label}</span>
                  </div>
                  <p className="text-2xl font-bold">{item.value}</p>
                </div>
              ))}
            </div>

            <a 
              href={`https://github.com/${username}`} 
              target="_blank" 
              className="btn-primary w-fit px-10 py-5 text-lg"
            >
              View GitHub Profile <ExternalLink size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
