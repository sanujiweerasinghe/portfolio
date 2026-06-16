import { motion } from "framer-motion";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiBarChart2,
  FiGlobe,
  FiTool,
} from "react-icons/fi";
import { fadeUp } from "../../hooks/useScrollReveal";
import Badge from "./Badge";

const categoryIcons = {
  "Programming Languages": FiCode,
  "AI / ML & Deep Learning": FiCpu,
  "Data Engineering & MLOps": FiDatabase,
  "BI & Visualization": FiBarChart2,
  "Web Development": FiGlobe,
  Databases: FiDatabase,
  "Tools & Version Control": FiTool,
};

export default function SkillCard({ category, items }) {
  const Icon = categoryIcons[category] || FiTool;

  return (
    <motion.div variants={fadeUp} className="card flex flex-col gap-4 p-6">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-base font-semibold text-slate-900 dark:text-white">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
