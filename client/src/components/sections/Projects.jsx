import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "../ui/ProjectCard";
import { projects, projectCategories } from "../../data/profile";
import { staggerContainer } from "../../hooks/useScrollReveal";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = useMemo(
    () =>
      activeCategory === "All"
        ? projects
        : projects.filter((project) => project.category === activeCategory),
    [activeCategory]
  );

  return (
    <section id="projects" className="py-24">
      <div className="section-container">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          description="A selection of end-to-end projects spanning machine learning, data engineering, and full-stack development."
        />

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent-600 text-white shadow-lg shadow-accent-600/25"
                  : "border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-accent-500 hover:text-accent-600 dark:hover:text-accent-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          key={activeCategory}
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
