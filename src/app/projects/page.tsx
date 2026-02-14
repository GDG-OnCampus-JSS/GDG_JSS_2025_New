import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import ProjectCard from "@/components/common/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}
