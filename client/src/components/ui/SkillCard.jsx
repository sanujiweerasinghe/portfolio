import { motion } from "framer-motion";
import { fadeUp } from "../../hooks/useScrollReveal";
import Badge from "./Badge";

export default function SkillCard({ category, items }) {
  return (
    <motion.div variants={fadeUp} className="card flex flex-col gap-4 p-6">
      <h3 className="text-base font-semibold text-slate-900 dark:text-white">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <Badge key={item}>{item}</Badge>
        ))}
      </div>
    </motion.div>
  );
}
