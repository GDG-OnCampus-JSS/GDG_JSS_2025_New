"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { cardHover, cardTransition } from "@/lib/animationVariants";
import { Icon } from "@iconify/react";

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

type Props = {
  project: {
    id: string;
    domain: string;
    year: string;
    title: string;
    description: string;
    image: string;
    projectLink: string;
    techStack?: { [key: string]: string }[];
    bgColor: string;
  };
};

const projectImageEnter = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
};

const projectContentEnter = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
};

const projectImageTransition = {
  duration: 0.7,
  ease: easeOut,
};

const projectContentTransition = {
  duration: 0.7,
  ease: easeOut,
  delay: 0.1,
};

const techPillEnter = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

const projectImageHover = {
  scale: 1.03,
};

const projectButtonHover = {
  scale: 1.05,
};

const projectButtonHoverTransition = {
  duration: 0.2,
  ease: easeOut,
};

const arrowIconHover = {
  x: 4,
};

export default function ProjectCard({ project }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="w-full lg:w-250 lg:h-96 p-3 bg-stone-50 rounded-2xl"
      whileHover={reduceMotion ? undefined : cardHover}
      transition={cardTransition}
    >
      <div className="flex flex-col lg:inline-flex lg:flex-row gap-6">
        <motion.div
          className={`w-full lg:w-100 h-60 lg:h-90 relative ${project.bgColor}`}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ amount: 0.2, once: true }}
          variants={projectImageEnter}
          transition={projectImageTransition}
          whileHover={reduceMotion ? undefined : projectImageHover}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain rounded-xl"
          />
        </motion.div>
        <motion.div
          className="py-2 w-full lg:w-140 text-center lg:text-left"
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "visible"}
          viewport={{ amount: 0.2, once: true }}
          variants={projectContentEnter}
          transition={projectContentTransition}
        >
          <h3 className="text-Secondary text-base font-normal">
            {project.domain} &#8226; {project.year}
          </h3>
          <h3 className="text-Primary text-3xl font-bold leading-8 mt-4">
            {project.title}
          </h3>
          <p className="text-Secondary text-base font-normal font-ProductSans leading-6 mt-4 whitespace-normal">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap justify-center lg:justify-start gap-2">
            {project.techStack?.map((tech, id) => (
              <motion.div
                key={id}
                className="inline-flex w-25 h-8 px-3 py-1.5 rounded-lg outline-[0.76px] gap-2.5 justify-center items-center"
                initial={reduceMotion ? undefined : "hidden"}
                whileInView={reduceMotion ? undefined : "visible"}
                viewport={{ amount: 0.2, once: true }}
                variants={techPillEnter}
                transition={{
                  duration: 0.4,
                  ease: easeOut,
                  delay: 0.1 + id * 0.08,
                }}
              >
                <Icon
                  icon={Object.values(tech)[0]}
                  width={24}
                  height={24}
                />
                <p className=" text-Primary text-base font-bold font-ProductSans">
                  {Object.keys(tech)[0]}
                </p>
              </motion.div>
            ))}
          </div>
          <div>
            <Link
              href={project.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                className="inline-flex mt-8 lg:mt-12 px-5 py-2 w-40 h-10 rounded-[52px] cursor-pointer outline outline-blue-600 gap-2 justify-center items-center"
                whileHover={reduceMotion ? undefined : projectButtonHover}
                transition={projectButtonHoverTransition}
              >
                <p className="text-base font-medium text-blue-600 ">
                  {" "}
                  View Project
                </p>
                <motion.div
                  whileHover={reduceMotion ? undefined : arrowIconHover}
                  transition={projectButtonHoverTransition}
                >
                  <Image
                    src="/icons/arrow.svg"
                    alt="/icons/arrow.svg"
                    width={15}
                    height={6}
                  />
                </motion.div>
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
