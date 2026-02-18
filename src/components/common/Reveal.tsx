"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { fadeInTransition, fadeInUp, fadeInViewport } from "@/lib/animations";
import { cn } from "@/lib/utils";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Reveal({ children, className }: RevealProps) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return <section className={cn(className)}>{children}</section>;
  }

  return (
    <motion.section
      className={cn(className)}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...fadeInViewport, once: true }}
      transition={fadeInTransition}
    >
      {children}
    </motion.section>
  );
}
