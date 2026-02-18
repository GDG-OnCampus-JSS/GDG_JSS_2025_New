"use client";

import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion, useReducedMotion } from "framer-motion";
import {
  cardScrollReveal,
  cardScrollViewport,
  cardScrollTransition,
  cardHoverLift,
  cardHoverTransition,
  imageZoomTransition,
  imageZoom,
  iconReveal,
  iconTransition,
} from "@/lib/animations";

type Props = {
  profile: {
    id: string;
    name: string;
    role?: string;
    batch?: string;
    bio: string;
    image: string;
    linkedin?: string;
    github?: string;
  };
  index?: number;
};

export default function ProfileCard({ profile, index = 0 }: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="w-full max-w-100 rounded-2xl overflow-hidden shadow-md bg-white relative"
      variants={cardScrollReveal}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "visible"}
      viewport={{ ...cardScrollViewport, once: true }}
      transition={{
        default: {
          ...cardScrollTransition,
          delay: reduceMotion ? 0 : index * 0.05,
        },
        y: cardHoverTransition,
        scale: cardHoverTransition,
      }}
      whileHover={reduceMotion ? undefined : cardHoverLift}
    >
      <motion.div className="h-90 w-full relative">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          className="object-cover"
        />
      </motion.div>
      <svg
        viewBox="0 0 360 120"
        preserveAspectRatio="none"
        className="absolute top-72 left-0 w-full h-30"
      >
        <path
          d="M 0 0 H 220 C 260 0, 280 40, 320 40 H 360 V 120 H 0 Z"
          fill="white"
        />
      </svg>
      <div className="absolute top-80 left-0 w-full px-5">
        <div>
          <h2 className="text-2xl font-semibold leading-tight">
            {profile.name}
          </h2>

          <p className="mt-2 leading-snug text-[#565656] text-[14px] font-light tracking-[0.56px]">
            {profile.bio}
          </p>
        </div>
      </div>
      {/* md:pt-32 */}
      <div className="pt-36  px-5 pb-5 flex items-center justify-between">
        <p className="text-gray-800 font-medium text-sm">
          {profile.role ? profile.role : profile.batch}
        </p>

        <div className="flex gap-3 text-xl">
          {profile.linkedin && (
            <motion.div
              variants={iconReveal}
              initial="initial"
              whileHover={reduceMotion ? undefined : "hover"}
              transition={iconTransition}
            >
              <Link
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600"
              >
                <FaLinkedin />
              </Link>
            </motion.div>
          )}

          {profile.github && (
            <motion.div
              variants={iconReveal}
              initial="initial"
              whileHover={reduceMotion ? undefined : "hover"}
              transition={{
                ...iconTransition,
                delay: 0.05,
              }}
            >
              <Link
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-black"
              >
                <FaGithub />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
