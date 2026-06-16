import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { personal } from "../../data/profile";
import { fadeUp, staggerContainer } from "../../hooks/useScrollReveal";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const contactInfo = [
  { label: "Email", value: personal.email, href: `mailto:${personal.email}`, icon: FiMail },
  { label: "LinkedIn", value: "sanuji-weerasinghe", href: personal.linkedin, icon: FiLinkedin },
  { label: "GitHub", value: `@${personal.githubUsername}`, href: personal.github, icon: FiGithub },
  { label: "Location", value: personal.location, href: null, icon: FiMapPin },
];

const initialForm = { name: "", email: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ state: "error", message: "Please fill in all fields." });
      return;
    }

    setStatus({ state: "loading", message: "" });
    try {
      await axios.post(`${API_URL}/api/contact`, form);
      setStatus({ state: "success", message: "Thanks for reaching out! I'll get back to you soon." });
      setForm(initialForm);
    } catch {
      setStatus({ state: "error", message: "Something went wrong. Please try again or email me directly." });
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's work together"
          description="Have an internship opportunity, a project idea, or just want to say hi? My inbox is open."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 lg:grid-cols-5"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4 lg:col-span-2">
            {contactInfo.map(({ label, value, href, icon: Icon }) => {
              const content = (
                <div className="card flex items-center gap-4 p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
                      {label}
                    </p>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-200">{value}</p>
                  </div>
                </div>
              );

              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {content}
                </a>
              ) : (
                <div key={label}>{content}</div>
              );
            })}
          </motion.div>

          <motion.form variants={fadeUp} onSubmit={handleSubmit} className="card flex flex-col gap-4 p-6 lg:col-span-3">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 outline-none transition-colors focus:border-accent-500"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-sm font-medium text-slate-600 dark:text-slate-300">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 outline-none transition-colors focus:border-accent-500"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-slate-600 dark:text-slate-300">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the opportunity or project..."
                className="rounded-xl border border-slate-200 dark:border-slate-700 bg-white/60 dark:bg-slate-900/40 px-4 py-2.5 text-sm text-slate-700 dark:text-slate-200 outline-none transition-colors focus:border-accent-500"
              />
            </div>

            {status.message && (
              <p className={`text-sm ${status.state === "success" ? "text-emerald-600 dark:text-emerald-400" : "text-red-500"}`}>
                {status.message}
              </p>
            )}

            <button type="submit" disabled={status.state === "loading"} className="btn-primary w-fit disabled:opacity-60">
              <FiSend /> {status.state === "loading" ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
