import { motion } from "framer-motion";
import { FiBookOpen, FiMapPin } from "react-icons/fi";
import SectionHeading from "../ui/SectionHeading";
import Badge from "../ui/Badge";
import { about, education, personal } from "../../data/profile";
import { fadeUp, staggerContainer } from "../../hooks/useScrollReveal";

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="About Me"
          title="A little about who I am"
          description="My academic background, current focus, and the areas I'm most curious about."
        />

        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-8 lg:grid-cols-5"
        >
          <motion.div variants={fadeUp} className="card p-8 lg:col-span-3">
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-300">{about.summary}</p>

            <div className="mt-6 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
              <FiMapPin className="text-accent-500" /> {personal.location}
            </div>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              Areas of Interest
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.interests.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>

            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              Soft Skills
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {about.softSkills.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex flex-col gap-6 lg:col-span-2">
            {education.map((item) => (
              <div key={item.degree} className="card p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent-50 text-accent-600 dark:bg-accent-500/10 dark:text-accent-400">
                    <FiBookOpen />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-slate-900 dark:text-white">{item.degree}</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">{item.institution}</p>
                    <p className="text-xs font-medium text-accent-600 dark:text-accent-400">{item.period}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm font-medium text-slate-600 dark:text-slate-300">{item.detail}</p>
                {item.coursework.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {item.coursework.map((course) => (
                      <Badge key={course}>{course}</Badge>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
