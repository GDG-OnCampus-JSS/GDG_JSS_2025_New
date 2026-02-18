"use client";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import ProjectCard from "@/components/common/ProjectCard";
import { projects } from "@/lib/projects";
import { motion, useReducedMotion } from "framer-motion";
import {
  subtleCardReveal,
  subtleCardTransition,
  subtleCardViewport,
} from "@/lib/animations";

export default function ProjectsPage() {
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
        <Hero
          title="Our Tech Showcase"
          desc="We're driven by a mission to learn, teach, and grow. Web and app developers, ML engineers, designers, and programmers unite to create a community that sparks inspiration for thousands."
          logo="/icons/projectpagelogo.svg"
        />
        <section className="flex flex-col gap-16 justify-center items-center lg:pt-4">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={subtleCardReveal}
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ ...subtleCardViewport, once: true }}
              transition={subtleCardTransition}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}
