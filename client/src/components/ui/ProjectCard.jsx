import { motion } from "framer-motion";
import { FiGithub, FiExternalLink, FiClock } from "react-icons/fi";
import { fadeUp } from "../../hooks/useScrollReveal";
import Badge from "./Badge";

export default function ProjectCard({ project }) {
  return (
    <motion.article variants={fadeUp} className="card flex h-full flex-col gap-4 p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
          <p className="text-sm text-accent-600 dark:text-accent-400">{project.subtitle}</p>
        </div>
        <span className="shrink-0 text-xs font-medium text-slate-400 dark:text-slate-500">{project.year}</span>
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

      <div className="flex items-center gap-3 pt-2">
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
