import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMail } from "react-icons/fi";
import { personal } from "../../data/profile";
import { useTypingEffect } from "../../hooks/useTypingEffect";

export default function Hero() {
  const typed = useTypingEffect(personal.taglines);

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Subtle animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-0 h-80 w-80 animate-blob rounded-full bg-accent-300/30 blur-3xl dark:bg-accent-500/20" />
        <div className="absolute right-0 top-40 h-96 w-96 animate-blob rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/10 [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-accent-200/30 blur-3xl dark:bg-accent-400/10 [animation-delay:8s]" />
      </div>

      <div className="section-container">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <span className="badge w-fit text-accent-600 dark:text-accent-400 border-accent-200 dark:border-accent-900/60 bg-accent-50 dark:bg-accent-500/10">
              Open to Data Science / Data Engineering internships
            </span>

            <h1 className="max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{personal.name}</span>
            </h1>

            <p className="text-xl font-medium text-slate-600 dark:text-slate-300 sm:text-2xl">
              {personal.role}
            </p>

            <p className="h-7 text-lg font-medium text-accent-600 dark:text-accent-400">
              {typed}
              <span className="ml-0.5 animate-pulse">|</span>
            </p>

            <p className="max-w-2xl text-base text-slate-500 dark:text-slate-400 sm:text-lg">
              {personal.shortBio}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href={personal.resumeUrl} download className="btn-primary">
                <FiDownload /> Download Resume
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects <FiArrowRight />
              </a>
              <a href="#contact" className="btn-secondary">
                <FiMail /> Contact Me
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="shrink-0"
          >
            <div className="w-64 overflow-hidden rounded-2xl border-4 border-white shadow-xl ring-1 ring-slate-200 sm:w-80 lg:w-96 dark:border-slate-800 dark:ring-slate-700">
              <img
                src={personal.photo}
                alt={personal.name}
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
