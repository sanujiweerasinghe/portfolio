import { motion } from "framer-motion";
import { FiTarget } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { research } from "../../data/profile";
import { fadeUp, staggerContainer } from "../../hooks/useScrollReveal";

export default function Research() {
  return (
    <section id="research" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Research"
          title="Current research"
          description="My final-year research project, focused on renewable energy forecasting and geospatial AI."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="card p-8"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{research.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {research.type} · {research.institution}
              </p>
            </div>
            <span className="badge text-amber-600 dark:text-amber-400 border-amber-200 dark:border-amber-900/60 bg-amber-50 dark:bg-amber-500/10">
              {research.status} · {research.period}
            </span>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-6 text-base leading-relaxed text-slate-600 dark:text-slate-300">
            {research.summary}
          </motion.p>

          <motion.div variants={fadeUp} className="mt-6">
            <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              Objectives
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {research.objectives.map((objective) => (
                <li key={objective} className="flex gap-3">
                  <FiTarget className="mt-0.5 h-4 w-4 shrink-0 text-accent-500" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Technologies
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {research.technologies.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Focus Areas
              </h4>
              <div className="mt-3 flex flex-wrap gap-2">
                {research.focusAreas.map((area) => (
                  <Badge key={area}>{area}</Badge>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
