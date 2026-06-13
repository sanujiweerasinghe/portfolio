import { motion } from "framer-motion";
import { fadeUp } from "../../hooks/useScrollReveal";

export default function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "text-left items-start" : "text-center items-center";

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`mb-12 flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <span className="badge text-accent-600 dark:text-accent-400 border-accent-200 dark:border-accent-900/60 bg-accent-50 dark:bg-accent-500/10">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
      {description && (
        <p className="max-w-2xl text-base text-slate-500 dark:text-slate-400">{description}</p>
      )}
    </motion.div>
  );
}
