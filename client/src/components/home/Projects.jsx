import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Code, Layers, Sparkles, Database, Brain } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Local RAG Customer Support Chatbot",
      description: "A high-performance RAG system using Llama 3.2, LangChain, and ChromaDB. Features SSE streaming, TTS integration, and local LLM execution via Ollama.",
      tech: ["Python", "Llama 3.2", "LangChain", "ChromaDB", "FastAPI"],
      github: "https://github.com/sanujiweerasinghe/",
      category: "Generative AI",
      highlight: true
    },
    {
      title: "Janashakthi Smart Claims",
      description: "AI-based medical claims validation system featuring OCR for document verification and fraud detection using OpenCV and Django.",
      tech: ["TypeScript", "Python", "Django", "OpenCV"],
      github: "https://github.com/sanujiweerasinghe/",
      category: "Full Stack AI"
    },
    {
      title: "NLP-NER Pipeline",
      description: "Biomedical Named Entity Recognition pipeline benchmarking Word2Vec, GloVe, and BERT embeddings with a BiLSTM-CRF architecture.",
      tech: ["PyTorch", "Transformers", "BiLSTM-CRF", "Scikit-learn"],
      github: "https://github.com/sanujiweerasinghe/",
      category: "NLP / Research"
    },
    {
      title: "Customer Churn Prediction",
      description: "End-to-end MLOps pipeline for churn prediction with SHAP explainability, FastAPI productionization, and CI/CD via GitHub Actions.",
      tech: ["XGBoost", "FastAPI", "Docker", "MLflow"],
      github: "https://github.com/sanujiweerasinghe/",
      category: "MLOps"
    },
    {
      title: "Tea Leaf Disease Classification",
      description: "Deep learning model using transfer learning (VGG16/ResNet50) for precision agriculture, achieving high accuracy in disease detection.",
      tech: ["PyTorch", "Computer Vision", "Transfer Learning"],
      github: "https://github.com/sanujiweerasinghe/",
      category: "Computer Vision"
    }
  ];

  return (
    <section id="projects" className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-4 flex items-center gap-2">
              <div className="w-8 h-px bg-primary-500"></div> Portfolio
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight">
              Featured <span className="text-gradient">Projects</span>.
            </h3>
          </div>
          <a href="https://github.com/sanujiweerasinghe/" target="_blank" className="btn-secondary group">
            Explore All GitHub <Github size={20} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`glass-card group flex flex-col h-full overflow-hidden ${project.highlight ? 'lg:col-span-2' : ''}`}
            >
              <div className="p-8 md:p-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className={`p-4 rounded-2xl ${project.highlight ? 'bg-primary-500/10 text-primary-500' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'}`}>
                    {project.category.includes('AI') ? <Brain size={24} /> : <Code size={24} />}
                  </div>
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" className="p-2 glass rounded-xl text-slate-400 hover:text-primary-500 transition-all">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
                
                <h4 className={`font-bold mb-4 tracking-tight group-hover:text-primary-500 transition-colors ${project.highlight ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                  {project.title}
                </h4>
                
                <p className="text-slate-600 dark:text-slate-400 mb-10 flex-grow leading-relaxed text-lg">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto pt-8 border-t border-slate-100 dark:border-slate-800/50">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="text-xs font-bold text-slate-500 bg-slate-100 dark:bg-slate-800/50 dark:text-slate-400 px-4 py-2 rounded-xl flex items-center gap-2 border border-transparent hover:border-primary-500/30 transition-colors">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div> {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
