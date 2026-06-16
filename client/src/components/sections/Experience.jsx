import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import TimelineItem from "../ui/TimelineItem";
import { experience } from "../../data/profile";
import { staggerContainer } from "../../hooks/useScrollReveal";

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="Professional and training experience to date."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-3xl"
        >
          {experience.map((item, index) => (
            <TimelineItem
              key={item.role}
              title={item.role}
              subtitle={item.organization}
              period={item.period}
              location={item.location}
              points={item.points}
              isLast={index === experience.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
