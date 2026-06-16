import { motion } from "framer-motion";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { personal } from "../../data/profile";
import { fadeUp, staggerContainer } from "../../hooks/useScrollReveal";
import { useTheme } from "../../context/ThemeContext";

export default function GithubStats() {
  const { theme } = useTheme();
  const statsTheme = theme === "dark" ? "dark" : "default";

  return (
    <section id="github" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="GitHub"
          title="GitHub activity"
          description="A live snapshot of my open-source work and contribution history."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeUp} className="card flex flex-wrap items-center justify-between gap-4 p-6">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                <FiGithub className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">
                  @{personal.githubUsername}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  Open-source projects, ML experiments, and research code.
                </p>
              </div>
            </div>
            <a href={personal.github} target="_blank" rel="noreferrer" className="btn-secondary">
              View Profile <FiArrowUpRight />
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="grid gap-6 lg:grid-cols-2">
            <div className="card overflow-hidden p-4">
              <img
                loading="lazy"
                className="w-full"
                alt={`${personal.githubUsername} GitHub stats`}
                src={`https://github-readme-stats-eight-theta.vercel.app/api?username=${personal.githubUsername}&show_icons=true&hide_title=false&include_all_commits=true&count_private=true&theme=${statsTheme}&bg_color=00000000&border_radius=16&hide_border=true`}
              />
            </div>
            <div className="card overflow-hidden p-4">
              <img
                loading="lazy"
                className="w-full"
                alt={`${personal.githubUsername} most used languages`}
                src={`https://github-readme-stats-eight-theta.vercel.app/api/top-langs/?username=${personal.githubUsername}&layout=compact&theme=${statsTheme}&bg_color=00000000&border_radius=16&hide_border=true`}
              />
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="card overflow-hidden p-4">
            <img
              loading="lazy"
              className="w-full"
              alt={`${personal.githubUsername} contribution streak`}
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${personal.githubUsername}&theme=${statsTheme}&background=00000000&border=00000000`}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
