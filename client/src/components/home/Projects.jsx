import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight, Plus, Folder, Code } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      title: "Janashakthi Smart Claims",
      subtitle: "AI-Powered Insurance Claim Processing",
      category: "Full Stack",
      year: "2025",
      tags: ["Django REST", "React", "OpenCV", "Python"],
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
      description: "A full-stack web application enabling end-to-end insurance claim submission and AI-powered document analysis for Janashakthi Insurance."
    },
    {
      title: "RAG Smart Document Chatbot",
      subtitle: "Retrieval-Augmented Q&A System",
      category: "AI/ML",
      year: "2025",
      tags: ["ChromaDB", "Ollama", "Streamlit", "Python"],
      image: "https://images.unsplash.com/photo-1531746790731-6c087fdec0ed?auto=format&fit=crop&q=80&w=800",
      description: "An end-to-end RAG application that answers natural-language questions grounded in a custom document corpus with source citations."
    },
    {
      title: "Customer Churn Prediction",
      subtitle: "Cost-Sensitive Churn Model with MLOps",
      category: "MLOps",
      year: "2025",
      tags: ["XGBoost", "MLflow", "Docker", "GitHub Actions"],
      image: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800",
      description: "A churn-prediction model productionised with a full MLOps pipeline including experiment tracking and CI/CD monitoring."
    },
    {
      title: "Biomedical NLP NER Pipeline",
      subtitle: "Named Entity Recognition Benchmark",
      category: "AI/ML",
      year: "2025",
      tags: ["PyTorch", "BiLSTM-CRF", "BERT", "NLP"],
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
      description: "A biomedical Named Entity Recognition system benchmarking multiple word embeddings using a BiLSTM-CRF architecture."
    },
    {
      title: "Tea Leaf Disease Classification",
      subtitle: "Transfer Learning for Agricultural Diagnostics",
      category: "AI/ML",
      year: "2025",
      tags: ["PyTorch", "VGG16", "ResNet50", "scikit-learn"],
      image: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?auto=format&fit=crop&q=80&w=800",
      description: "Applied transfer learning with VGG16 and ResNet50 to classify tea leaf diseases with data augmentation and model comparison."
    },
    {
      title: "Hybrid RAG Chatbot",
      subtitle: "Local Embeddings + Google Gemini",
      category: "AI/ML",
      year: "2025",
      tags: ["HuggingFace", "Google Gemini", "RAG", "Python"],
      image: "https://images.unsplash.com/photo-1587560699334-cc4ff634909a?auto=format&fit=crop&q=80&w=800",
      description: "Combining local HuggingFace embeddings with Google Gemini for a high-performance RAG chatbot designed to avoid API rate limits."
    },
    {
      title: "Health Mention Classification",
      subtitle: "LSTM vs. Bi-LSTM Benchmark",
      category: "AI/ML",
      year: "2025",
      tags: ["TensorFlow", "LSTM", "Bi-LSTM", "NLP"],
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=800",
      description: "Benchmarking LSTM and Bi-LSTM architectures for detecting personal health mentions in social media text."
    }
  ];

  const categories = ["All", "Full Stack", "AI/ML", "MLOps"];
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-4"
            >
              Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
            >
              Things I've built
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-600 dark:text-slate-400 text-lg"
            >
              A selection of end-to-end projects spanning machine learning, data engineering, and full-stack development.
            </motion.p>
          </div>
          
          <div className="flex flex-wrap gap-3 p-2 glass rounded-2xl border border-slate-200 dark:border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-xl text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-primary-500 text-white shadow-lg' 
                    : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="group glass rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                   <img 
                     src={project.image} 
                     alt={project.title} 
                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                     <div className="flex gap-4">
                       <a href="https://github.com/sanujiweerasinghe" target="_blank" className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-slate-900 transition-all">
                         <Github size={20} />
                       </a>
                       <a href="#" className="p-3 bg-white/10 backdrop-blur-md rounded-xl text-white hover:bg-white hover:text-slate-900 transition-all">
                         <Code size={20} />
                       </a>
                     </div>
                   </div>
                   <div className="absolute top-6 left-6 px-4 py-1.5 glass backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-bold uppercase tracking-widest">
                     {project.category}
                   </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white leading-tight group-hover:text-primary-500 transition-colors">
                      {project.title}
                    </h4>
                    <span className="text-sm font-bold text-slate-400">{project.year}</span>
                  </div>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 font-medium line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
