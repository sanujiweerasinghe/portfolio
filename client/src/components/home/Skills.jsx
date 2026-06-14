import React from 'react';
import { motion } from 'framer-motion';
import { Database, Code, Layout, BarChart, Server, Terminal, Brain, Layers, Cpu, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Terminal size={24} />,
      skills: ["Python", "R", "Java", "JavaScript / TypeScript", "SQL"]
    },
    {
      title: "AI / ML & Deep Learning",
      icon: <Brain size={24} />,
      skills: ["scikit-learn", "PyTorch", "XGBoost", "SHAP", "CNN-LSTM & Transformers", "ResUNet / YOLOv8-seg", "BiLSTM-CRF", "OpenCV"]
    },
    {
      title: "Data Engineering & MLOps",
      icon: <Layers size={24} />,
      skills: ["Apache Airflow", "ETL Pipelines", "Data Warehousing", "Docker", "MLflow", "FastAPI", "GitHub Actions"]
    },
    {
      title: "BI & Visualization",
      icon: <BarChart size={24} />,
      skills: ["Power BI", "Streamlit", "Matplotlib", "Seaborn", "OLAP"]
    },
    {
      title: "Web Development",
      icon: <Layout size={24} />,
      skills: ["React (TypeScript)", "Django REST Framework", "Node.js / Express", "Tailwind CSS"]
    },
    {
      title: "Databases",
      icon: <Database size={24} />,
      skills: ["MongoDB", "PostgreSQL", "MySQL"]
    },
    {
      title: "Tools & Version Control",
      icon: <Terminal size={24} />,
      skills: ["Git", "GitHub", "Jupyter", "Docker"]
    }
  ];

  return (
    <section id="skills" className="section-padding bg-slate-50/50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-4"
          >
            Skills
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Technologies I work with
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-400 text-lg"
          >
            A categorized overview of the languages, frameworks, and tools behind my projects.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 group hover:border-primary-500/50 transition-colors"
            >
              <div className="flex items-center gap-4 mb-6 text-slate-900 dark:text-white">
                <div className="p-3 bg-primary-500/10 text-primary-500 rounded-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold tracking-tight">{category.title}</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-bold border border-slate-100 dark:border-slate-700 group-hover:border-primary-500/20 transition-colors shadow-sm"
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
