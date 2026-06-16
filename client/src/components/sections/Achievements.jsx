import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import { achievements } from "../../data/profile";
import { fadeUp, staggerContainer } from "../../hooks/useScrollReveal";

export default function Achievements() {
  return (
    <section id="achievements" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Achievements"
          title="Awards & recognition"
          description="Competitions and milestones along the way."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-6 sm:grid-cols-2"
        >
          {achievements.map((item) => (
            <motion.div key={item.title} variants={fadeUp} className="card flex gap-4 p-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                <FiAward className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{item.organization}</p>
                <span className="mt-2 inline-block text-xs font-medium text-accent-600 dark:text-accent-400">
                  {item.year}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
