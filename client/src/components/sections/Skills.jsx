import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import SkillCard from "../ui/SkillCard";
import { skills } from "../../data/profile";
import { staggerContainer } from "../../hooks/useScrollReveal";

export default function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A categorized overview of the languages, frameworks, and tools behind my projects."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((group) => (
            <SkillCard key={group.category} category={group.category} items={group.items} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
