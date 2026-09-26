"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function StudyJamsReminder() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const reduceMotion = useReducedMotion();

  if (pathname === "/events/android-study-jams-2026") return null;

  return (
    <motion.aside
      aria-label="Android Study Jams reminder"
      initial={reduceMotion ? false : { x: "100%" }}
      animate={{ x: open ? 0 : "calc(100% - 9.375%)" }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : { type: "spring", stiffness: 220, damping: 27 }
      }
      className="fixed right-0 bottom-5 z-40 flex w-[320px] max-w-[calc(100vw-12px)] items-stretch font-ProductSans sm:bottom-8"
    >
      <motion.button
        type="button"
        aria-label={open ? "Tuck away event reminder" : "Show event reminder"}
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        animate={open || reduceMotion ? { scale: 1 } : { scale: [1, 1.12, 1] }}
        transition={
          open || reduceMotion
            ? { duration: 0 }
            : {
                duration: 0.4,
                repeat: Infinity,
                repeatDelay: 4.6,
                ease: "easeInOut",
              }
        }
        className="flex w-8 shrink-0 items-center justify-center rounded-l-xl border border-r-0 border-[#B8DBA6] bg-[#1CBD67] text-[#235F38] shadow-[-3px_3px_14px_rgba(32,33,36,0.08)] transition-colors hover:bg-[#D0ECB0] focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-[#1A73E8]"
      >
        {open ? (
          <ChevronRight size={17} aria-hidden="true" />
        ) : (
          <ChevronLeft size={17} aria-hidden="true" />
        )}
      </motion.button>
      <div
        inert={!open}
        className="min-w-0 flex-1 rounded-r-none border border-[#D8E6D0] bg-[#F7FBF2] p-4 shadow-[-3px_3px_14px_rgba(32,33,36,0.08)]"
      >
        <div className="mb-2 flex items-center gap-2 text-xs text-[#287044]">
          <Image
            src="/events/android-study-jams/android.svg"
            alt=""
            width={26}
            height={16}
            className="opacity-65"
          />
          <p className="text-base font-bold text-[#202124]">
            Android Study Jams
          </p>
        </div>
        <p className="mt-1 text-sm leading-relaxed text-[#5F6368]">
          Learn to build with us.
        </p>
        <Link
          href="/events/android-study-jams-2026"
          className="mt-3 inline-flex items-center gap-1 rounded text-sm font-bold text-[#287044] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A73E8]"
        >
          Join the jam <ArrowUpRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </motion.aside>
  );
}
