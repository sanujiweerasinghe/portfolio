import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiClock, FiFolder } from "react-icons/fi";
import { fadeUp } from "../../hooks/useScrollReveal";
import Badge from "./Badge";

export default function ProjectCard({ project }) {
  return (
    <motion.article variants={fadeUp} className="card flex h-full flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
          <FiFolder className="h-5 w-5" />
        </span>
        <div className="flex flex-col items-end gap-1.5">
          <span className="text-xs font-medium text-slate-400 dark:text-slate-500">{project.year}</span>
          <Badge className="border-accent-200 bg-accent-50 text-accent-600 dark:border-accent-900/60 dark:bg-accent-500/10 dark:text-accent-400">
            {project.category}
          </Badge>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
        <p className="text-sm text-accent-600 dark:text-accent-400">{project.subtitle}</p>
      </div>

      <p className="text-sm text-slate-500 dark:text-slate-400">{project.description}</p>

      {project.features?.length > 0 && (
        <ul className="space-y-1.5 text-sm text-slate-500 dark:text-slate-400">
          {project.features.map((feature) => (
            <li key={feature} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {project.tech.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <div className="flex items-center gap-3 border-t border-slate-200 pt-4 dark:border-slate-800">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
          >
            <FiGithub /> Code
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300 transition-colors hover:text-accent-600 dark:hover:text-accent-400"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
        {project.comingSoon && (
          <span className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 dark:text-slate-500">
            <FiClock /> Repo coming soon
          </span>
        )}
      </div>
    </motion.article>
  );
}
