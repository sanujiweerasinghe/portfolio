import React from 'react';
import Navbar from './Navbar';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900/50 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <span className="text-primary-500">Sanuji</span>
              <span>Weerasinghe</span>
            </h3>
            <p className="text-slate-600 dark:text-slate-400 max-w-xs">
              Data Science undergraduate focused on machine learning and predictive modeling.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 col-span-1 md:col-span-1">
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-600 dark:text-slate-400">
                <li><a href="#about" className="hover:text-primary-500 transition-colors">About</a></li>
                <li><a href="#projects" className="hover:text-primary-500 transition-colors">Projects</a></li>
                <li><a href="#research" className="hover:text-primary-500 transition-colors">Research</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Social</h4>
              <div className="flex gap-4">
                <a href="https://github.com/sanujiweerasinghe/" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-primary-500 transition-colors">
                  <Github size={20} />
                </a>
                <a href="https://linkedin.com/in/sanuji-weerasinghe-b91b9a24b/" target="_blank" rel="noopener noreferrer" className="p-2 glass rounded-full hover:text-primary-500 transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="col-span-1 flex flex-col items-center md:items-end justify-center">
            <button 
              onClick={scrollToTop}
              className="p-4 glass rounded-full hover:bg-primary-500 hover:text-white transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <ArrowUp size={24} />
            </button>
            <span className="mt-4 text-sm text-slate-500">Back to Top</span>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Sanuji Weerasinghe. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-500">Privacy Policy</a>
            <a href="#" className="hover:text-primary-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
