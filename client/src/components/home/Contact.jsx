import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle, Linkedin, Github } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: null, message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: '' });

    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const res = await axios.post(`${apiUrl}/api/contact`, formData);
      if (res.data.success) {
        setStatus({ type: 'success', message: 'Message sent! I will get back to you soon.' });
        setFormData({ name: '', email: '', subject: '', message: '' });
      }
    } catch (error) {
      console.error('Contact error:', error);
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-slate-50/50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.2em] text-primary-500 uppercase mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-primary-500"></div> Get in Touch
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-10">
              Let's <br />
              <span className="text-gradient pr-2">work together</span>.
            </h3>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 leading-relaxed font-medium">
              Have an internship opportunity, a project idea, or just want to say hi? My inbox is open.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 p-8 glass-card w-fit">
                <div className="p-4 bg-primary-500/10 text-primary-500 rounded-2xl">
                  <Mail size={32} />
                </div>
                <div>
                  <h4 className="font-black text-slate-400 dark:text-slate-500 uppercase text-xs tracking-[0.2em] mb-2">Email</h4>
                  <a href="mailto:sanujiweerasinghe@gmail.com" className="text-xl font-bold hover:text-primary-500 transition-colors">
                    sanujiweerasinghe@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-6">
                <a href="https://linkedin.com/in/sanuji-weerasinghe/" target="_blank" className="p-5 glass-card hover:text-primary-500 transition-all hover:scale-110">
                  <Linkedin size={28} />
                </a>
                <a href="https://github.com/sanujiweerasinghe/" target="_blank" className="p-5 glass-card hover:text-primary-500 transition-all hover:scale-110">
                  <Github size={28} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest ml-1 text-slate-500">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-black uppercase tracking-widest ml-1 text-slate-500">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-6 py-5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-widest ml-1 text-slate-500">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all font-medium"
                  placeholder="Internship Opportunity"
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-black uppercase tracking-widest ml-1 text-slate-500">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-6 py-5 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all resize-none font-medium"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary py-5 text-lg"
              >
                {loading ? 'Sending...' : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>

              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-6 rounded-2xl flex items-center gap-4 ${
                    status.type === 'success' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 'bg-red-500/10 text-red-500 border border-red-500/20'
                  }`}
                >
                  {status.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                  <span className="font-bold tracking-tight">{status.message}</span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
