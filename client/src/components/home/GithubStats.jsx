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

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="glass p-10 rounded-[3rem] border border-slate-200 dark:border-slate-800">
              <Github size={64} className="mx-auto mb-8 text-primary-500" />
              <h4 className="text-3xl font-bold mb-6">@{username}</h4>
              <p className="text-xl text-slate-600 dark:text-slate-400 font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
                Explore my open-source projects, machine learning experiments, and research implementations directly on my GitHub profile.
              </p>
              
              <a 
                href={`https://github.com/${username}`} 
                target="_blank" 
                className="btn-primary inline-flex items-center gap-3 px-12 py-5 text-lg"
              >
                View Profile on GitHub <ExternalLink size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GithubStats;
