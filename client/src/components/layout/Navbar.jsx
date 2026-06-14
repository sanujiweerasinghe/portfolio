import React, { useState, useEffect } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Sun, Moon, Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [colorTheme, setTheme] = useDarkMode();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Research', href: '#research' },
    { name: 'Experience', href: '#experience' },
    { name: 'Awards', href: '#achievements' },
    { name: 'GitHub', href: '#github' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-[100] transition-all duration-500 pt-6 px-6">
      <div className={`max-w-5xl mx-auto transition-all duration-500 ${isScrolled ? 'glass rounded-[2rem] px-8 py-3' : 'bg-transparent px-4 py-4'}`}>
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary-500/30">
              <Sparkles size={20} />
            </div>
            <a href="#" className="text-xl font-black tracking-tighter hover:text-primary-500 transition-colors">
              Sanuji Weerasinghe
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-1 bg-slate-100/50 dark:bg-slate-800/50 p-1 rounded-2xl border border-slate-200/50 dark:border-slate-700/50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-xs font-bold px-4 py-2 rounded-xl transition-all hover:bg-white dark:hover:bg-slate-700 hover:shadow-sm dark:text-slate-400 dark:hover:text-white uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="h-8 w-[1px] bg-slate-200 dark:bg-slate-800 mx-2"></div>

            <button
              onClick={() => setTheme(colorTheme)}
              className="p-3 rounded-xl glass hover:text-primary-500 transition-all hover:scale-110"
            >
              {colorTheme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setTheme(colorTheme)}
              className="p-3 rounded-xl glass transition-all"
            >
              {colorTheme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-xl glass transition-all"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-4 max-w-5xl mx-auto glass rounded-[2.5rem] overflow-hidden p-8 border-primary-500/10"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-bold hover:text-primary-500 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
