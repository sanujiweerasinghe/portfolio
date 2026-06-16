import { Suspense, lazy } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/sections/Hero";

const About = lazy(() => import("../components/sections/About"));
const Skills = lazy(() => import("../components/sections/Skills"));
const Projects = lazy(() => import("../components/sections/Projects"));
const Research = lazy(() => import("../components/sections/Research"));
const Experience = lazy(() => import("../components/sections/Experience"));
const Achievements = lazy(() => import("../components/sections/Achievements"));
const GithubStats = lazy(() => import("../components/sections/GithubStats"));
const Contact = lazy(() => import("../components/sections/Contact"));

function SectionFallback() {
  return <div className="h-40 w-full" aria-hidden="true" />;
}

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Sanuji Weerasinghe | Data Science & ML Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Sanuji Weerasinghe, a final-year Data Science undergraduate at the University of Peradeniya specializing in machine learning, deep learning, data engineering, and full-stack development."
        />
      </Helmet>

      <Hero />

      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Research />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Achievements />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <GithubStats />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  );
}
