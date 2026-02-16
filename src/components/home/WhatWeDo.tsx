"use client";

import Image from "next/image";
import Reveal from "@/components/common/Reveal";
import { motion, useReducedMotion } from "framer-motion";
import {
  subtleCardContainer,
  subtleCardReveal,
  subtleCardTransition,
  subtleCardViewport,
} from "@/lib/animations";

const WhatWeDo = () => {
  const reduceMotion = useReducedMotion();

  return (
    <Reveal className="px-6 pb-16 max-w-310 mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-Primary font-ProductSans tracking-wide">
        What we Do!
      </h2>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-6 gap-6"
        variants={subtleCardContainer}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={subtleCardViewport}
      >
        {/*Design */}
        <motion.div
          className="lg:col-span-2 w-full md:min-h-80 pb-5 md:max-w-152.5 bg-stone-50 rounded-2xl relative flex flex-col justify-between items-start overflow-hidden"
          variants={subtleCardReveal}
          transition={subtleCardTransition}
        >
          <div className="self-stretch relative aspect-3/1 lg:aspect-2/1">
            <Image
              src="/icons/orangeGradient.svg"
              alt="Orange Gradient"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-contain object-top-right"
            />
          </div>
          <div className="self-stretch px-6 flex flex-col justify-start items-start overflow-hidden gap-3">
            <h2 className="self-stretch justify-start text-Primary text-3xl font-bold font-ProductSans">
              Design
            </h2>
            <div className="self-stretch justify-start text-Secondary text-base font-normal font-ProductSans leading-6 tracking-tight">
              A creative hub where we craft meaningful experiences through
              storytelling, research, and visual innovation.
            </div>
          </div>
        </motion.div>

        {/*Web Dev */}
        <motion.div
          className="lg:col-span-2 w-full md:min-h-80 pt-5 md:max-w-152.5 bg-stone-50 rounded-2xl relative flex flex-col justify-between items-start overflow-hidden"
          variants={subtleCardReveal}
          transition={subtleCardTransition}
        >
          <div className="self-stretch px-6 flex flex-col justify-start items-start gap-3 overflow-hidden">
            <h2 className="self-stretch justify-start text-Primary text-3xl font-bold font-ProductSans">
              Web Development
            </h2>
            <div className="self-stretch justify-start text-Secondary text-base font-normal font-ProductSans leading-6 tracking-tight">
              A builder&apos;s space where we create dynamic, user-focused
              websites using modern web technologies.
            </div>
          </div>
          <div className="self-stretch relative aspect-3/1 lg:aspect-2/1">
            <Image
              src="/icons/blueGradient.svg"
              alt="Blue Circles"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-contain object-bottom-right"
            />
          </div>
        </motion.div>

        {/* App Dev */}
        <motion.div
          className="lg:col-span-2 w-full md:min-h-80 pb-5 md:max-w-152.5 bg-stone-50 rounded-2xl relative flex flex-col justify-between items-start overflow-hidden"
          variants={subtleCardReveal}
          transition={subtleCardTransition}
        >
          <div className="self-stretch relative aspect-3/1 lg:aspect-2/1">
            <Image
              src="/icons/greenGradient.svg"
              alt="Green Circles"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-contain object-top-right"
            />
          </div>
          <div className="self-stretch gap-3 px-6 flex flex-col justify-start items-start overflow-hidden">
            <h2 className="self-stretch text-left text-Primary text-3xl font-bold font-ProductSans">
              App Development
            </h2>
            <div className="self-stretch justify-start text-Secondary text-base font-normal font-ProductSans leading-6 tracking-tight">
              A launchpad for turning ideas into intuitive mobile apps through
              hands-on development and collaboration.
            </div>
          </div>
        </motion.div>

        {/*Programming */}
        <motion.div
          className="lg:col-span-3 w-full max-w-152.5 md:min-h-60 pb-5 bg-stone-50 rounded-2xl relative flex flex-col justify-start items-start overflow-hidden"
          variants={subtleCardReveal}
          transition={subtleCardTransition}
        >
          <div className="self-stretch relative aspect-3/1">
            <Image
              src="/icons/redGradient.svg"
              alt="Red Gradient"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-contain object-top-right"
            />
          </div>
          <div className="self-stretch px-6 flex flex-col justify-start items-start gap-3 overflow-hidden">
            <h2 className="self-stretch justify-start text-Primary text-3xl font-bold font-ProductSans">
              Programming
            </h2>
            <div className="self-stretch justify-start text-Secondary text-base font-normal font-ProductSans leading-6 tracking-tight">
              A problem-solving arena where we strengthen logic, learn new
              languages, and build impactful software together.
            </div>
          </div>
        </motion.div>

        {/* Card 5: Machine Learning */}
        <motion.div
          className="lg:col-span-3 w-full max-w-152.5 md:min-h-60 pt-5 bg-stone-50 rounded-2xl relative flex flex-col justify-between items-start overflow-hidden"
          variants={subtleCardReveal}
          transition={subtleCardTransition}
        >
          <div className="self-stretch px-6 flex flex-col justify-center items-start gap-3 overflow-hidden">
            <h2 className="self-stretch justify-start text-Primary text-3xl font-bold font-ProductSans">
              Machine Learning
            </h2>
            <div className="self-stretch justify-start text-Secondary text-base font-normal font-ProductSans leading-6 tracking-tight">
              A curiosity-driven community exploring intelligent systems through
              data, models, and real-world applications.
            </div>
          </div>
          <div className="self-stretch relative aspect-3/1">
            <Image
              src="/icons/purpleGradient.svg"
              alt="Purple Circles"
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="absolute object-contain object-bottom-right"
            />
          </div>
        </motion.div>
      </motion.div>
    </Reveal>
  );
};

export default WhatWeDo;
