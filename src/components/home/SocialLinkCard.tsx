"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  cardHover,
  cardTransition,
  connectCardTap,
  connectCardTapTransition,
} from "@/lib/animationVariants";
import {
  subtleCardReveal,
  subtleCardTransition,
  subtleCardViewport,
} from "@/lib/animations";
type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function SocialLinkCard({ icon, title, description }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="connect-card w-full p-5 rounded-[15px]
      border border-[#EBEBEB]
      bg-[#F9F9F9]
    "
      variants={subtleCardReveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ ...subtleCardViewport, once: true }}
      whileHover={reduceMotion ? undefined : cardHover}
      whileTap={reduceMotion ? undefined : connectCardTap}
      transition={{
        ...cardTransition,
        opacity: subtleCardTransition,
        y: subtleCardTransition,
        scale: connectCardTapTransition,
      }}
    >
      <div className="flex items-center gap-7">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg ">
          <Image src={icon} alt={title} width={60} height={40} />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold leading-none text-[#202124]">
            {title}
          </h3>

          <p className="text-base leading-[1.4] text-[#666666]">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
