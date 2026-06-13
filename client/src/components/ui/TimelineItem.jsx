import { motion } from "framer-motion";
import { FiBriefcase, FiMapPin } from "react-icons/fi";
import { fadeUp } from "../../hooks/useScrollReveal";

export default function TimelineItem({ title, subtitle, period, location, points = [], isLast = false }) {
  return (
    <motion.div variants={fadeUp} className="relative flex gap-6 pb-10">
      <div className="flex flex-col items-center">
        <span className="z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 ring-4 ring-accent-100 dark:bg-accent-500/10 dark:text-accent-400 dark:ring-accent-500/20">
          <FiBriefcase className="h-4 w-4" />
        </span>
        {!isLast && <span className="w-px flex-1 bg-slate-200 dark:bg-slate-800" />}
      </div>

      <div className="card flex-1 p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
          <Badge>{period}</Badge>
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-slate-500 dark:text-slate-400">
          <span>{subtitle}</span>
          {location && (
            <span className="inline-flex items-center gap-1">
              <FiMapPin className="h-3.5 w-3.5" /> {location}
            </span>
          )}
        </div>
        {points.length > 0 && (
          <ul className="mt-3 space-y-1.5 text-sm text-slate-500 dark:text-slate-400">
            {points.map((point) => (
              <li key={point} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-accent-200 bg-accent-50 px-3 py-1 text-xs font-semibold text-accent-600 dark:border-accent-900/60 dark:bg-accent-500/10 dark:text-accent-400">
      {children}
    </span>
  );
}
