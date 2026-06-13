import { motion } from "framer-motion";
import { fadeUp } from "../../hooks/useScrollReveal";

export default function TimelineItem({ title, subtitle, period, location, points = [], isLast = false }) {
  return (
    <motion.div variants={fadeUp} className="relative flex gap-6 pb-10">
      <div className="flex flex-col items-center">
        <span className="z-10 mt-1.5 h-3 w-3 rounded-full bg-accent-500 ring-4 ring-accent-100 dark:ring-accent-500/20" />
        {!isLast && <span className="w-px flex-1 bg-slate-200 dark:bg-slate-800" />}
      </div>

      <div className="card flex-1 p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <h3 className="text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
          <span className="text-xs font-medium text-accent-600 dark:text-accent-400">{period}</span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          {subtitle}
          {location ? ` · ${location}` : ""}
        </p>
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
