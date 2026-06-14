import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Brain, Database, Layout, Sparkles, Terminal, Globe, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <Code2 className="text-blue-500" />,
      skills: ["Python", "SQL", "R", "Java", "JavaScript", "TypeScript"]
    },
    {
      title: "Generative AI",
      icon: <Sparkles className="text-amber-500" />,
      skills: ["Llama 3.2", "LangChain", "ChromaDB", "Ollama", "RAG", "Prompt Eng."]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="text-purple-500" />,
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "XGBoost", "NLP", "CV"]
    },
    {
      title: "Data & Cloud",
      icon: <Database className="text-green-500" />,
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Docker", "MLflow", "FastAPI"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-3 bg-primary-500/10 text-primary-500 rounded-2xl mb-6"
          >
            <Cpu size={32} />
          </motion.div>
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary-500 uppercase mb-4">Technical Arsenal</h2>
          <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
            Advanced <span className="text-gradient">Capabilities</span>.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-10 group"
            >
              <div className="mb-8 p-5 bg-slate-50 dark:bg-slate-800/50 rounded-[2rem] w-fit group-hover:scale-110 group-hover:bg-primary-500/10 group-hover:text-primary-500 transition-all duration-500">
                {category.icon}
              </div>
              <h4 className="text-2xl font-bold mb-8 tracking-tight">{category.title}</h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-4 py-2 bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 rounded-xl text-sm font-bold text-slate-500 dark:text-slate-400 hover:border-primary-500/50 hover:text-primary-500 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
