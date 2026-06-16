import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMail, FiGithub, FiLinkedin, FiChevronDown } from "react-icons/fi";
import { personal, projects, achievements } from "../../data/profile";
import { useTypingEffect } from "../../hooks/useTypingEffect";

export default function Hero() {
  const typed = useTypingEffect(personal.taglines);
  const [stats, setStats] = useState([
    { label: "Projects Built", value: `${projects.length}+` },
    { label: "Awards Won", value: `${achievements.length}` },
    { label: "Total Commits", value: "460+" },
  ]);

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const repoRes = await fetch(`https://api.github.com/users/${personal.githubUsername}`);
        const repoData = await repoRes.json();
        
        const commitRes = await fetch(`https://api.github.com/search/commits?q=author:${personal.githubUsername}`, {
          headers: { 'Accept': 'application/vnd.github.cloak-preview' }
        });
        const commitData = await commitRes.json();

        setStats([
          { label: "Projects Built", value: repoData.public_repos > projects.length ? `${repoData.public_repos}+` : `${projects.length}+` },
          { label: "Awards Won", value: `${achievements.length}` },
          { label: "Total Commits", value: commitData.total_count > 460 ? `${commitData.total_count}+` : "460+" }
        ]);
      } catch (err) {
        console.error("Failed to fetch live stats:", err);
      }
    };

    fetchGitHubStats();
  }, []);

  const socials = [
    { label: "GitHub", href: personal.github, icon: FiGithub },
    { label: "LinkedIn", href: personal.linkedin, icon: FiLinkedin },
    { label: "Email", href: `mailto:${personal.email}`, icon: FiMail },
  ];

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20">
      {/* Subtle animated background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--color-slate-300)_1px,transparent_0)] [background-size:32px_32px] opacity-[0.15] dark:bg-[radial-gradient(circle_at_1px_1px,var(--color-slate-700)_1px,transparent_0)] dark:opacity-[0.2]" />
        <div className="absolute -left-32 top-0 h-80 w-80 animate-blob rounded-full bg-accent-300/30 blur-3xl dark:bg-accent-500/20" />
        <div className="absolute right-0 top-40 h-96 w-96 animate-blob rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-500/10 [animation-delay:4s]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 animate-blob rounded-full bg-accent-200/30 blur-3xl dark:bg-accent-400/10 [animation-delay:8s]" />
      </div>

      <div className="section-container">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <span className="badge w-fit gap-2 text-accent-600 dark:text-accent-400 border-accent-200 dark:border-accent-900/60 bg-accent-50 dark:bg-accent-500/10">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
              </span>
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

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href={personal.resumeUrl} download className="btn-primary">
                <FiDownload /> Download Resume
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects <FiArrowRight />
              </a>
              <a href="#contact" className="btn-secondary">
                <FiMail /> Contact Me
              </a>

              <div className="ml-1 flex items-center gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith('mailto:') ? undefined : "_blank"}
                    rel={href.startsWith('mailto:') ? undefined : "noreferrer"}
                    aria-label={label}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 transition-all hover:-translate-y-0.5 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-x-10 gap-y-4 border-t border-slate-200 pt-6 dark:border-slate-800">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{stat.value}</p>
                  <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative shrink-0"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-accent-400 via-accent-500 to-sky-400 opacity-30 blur-2xl" />
            <div className="w-64 overflow-hidden rounded-2xl border-4 border-white shadow-2xl ring-1 ring-slate-200 sm:w-80 lg:w-96 dark:border-slate-800 dark:ring-slate-700">
              <img
                src={personal.photo}
                alt={personal.name}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="glass absolute -bottom-5 -left-5 rounded-2xl px-4 py-3 shadow-lg sm:-left-8">
              <p className="text-sm font-semibold text-slate-900 dark:text-white">{personal.role}</p>
              <p className="text-xs text-slate-500 dark:text-slate-400">{personal.location}</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-slate-400 transition-colors hover:text-accent-500 sm:flex"
      >
        <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
        <FiChevronDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
