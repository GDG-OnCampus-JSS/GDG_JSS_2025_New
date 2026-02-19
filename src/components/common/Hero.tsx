"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/common/Reveal";
import {
  buttonHover,
  buttonTap,
  buttonTransition,
} from "@/lib/animationVariants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { useEffect } from "react";
import Link from "next/link";
import LogoMain from "@/components/common/LogoMain";
import Projectpagelogo from "@/components/common/Projectpagelogo";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

type Props = {
  title: string;
  desc: string;
  logo: string;
};
const Hero = ({ title, desc, logo }: Props) => {
  const reduceMotion = useReducedMotion();
  const isProjectLogo = logo === "/icons/projectpagelogo.svg";

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const items = ["#programming", "#design", "#web", "#ml", "#app"];
    const center = "#main";

    const ctx = gsap.context(() => {
      if (isProjectLogo) {
        const projectNodes = [
          "#a",
          "#b",
          "#c",
          "#d",
          "#e",
          "#f",
          "#g",
          "#h",
          "#i",
          "#j",
        ];
        const leftColumn = ["#a", "#c", "#e", "#g", "#i"];
        const rightColumn = ["#b", "#d", "#f", "#h", "#j"];
        const projectLines = ["#c1", "#c2", "#cb", "#vline1", "#vline2"];
        const projectCenter = "#center";

        gsap.set([projectCenter, ...projectNodes, ...projectLines], {
          transformOrigin: "50% 50%",
          transformBox: "fill-box",
        });

        if (prefersReducedMotion) {
          gsap.set([projectCenter, ...projectNodes, ...projectLines], {
            opacity: 1,
          });
          return;
        }

        const tl = gsap.timeline({
          defaults: { ease: "power3.out" },
          scrollTrigger: {
            trigger: "#hero",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });

        tl.from(projectCenter, {
          opacity: 0,
          scale: 0.96,
          duration: 0.55,
          ease: "power2.out",
        })
          .from(
            projectLines,
            {
              opacity: 0,
              scaleX: 0,
              duration: 0.5,
              stagger: 0.08,
              transformOrigin: "50% 50%",
            },
            "-=0.2"
          )
          .from(
            projectNodes,
            {
              opacity: 0,
              scale: 0.9,
              duration: 0.35,
              stagger: 0.06,
            },
            "-=0.15"
          );

        const createColumnFlowTweens = (column: string[]) => {
          const elements = column
            .map(
              (id) => document.querySelector(id) as SVGGraphicsElement | null
            )
            .filter((element): element is SVGGraphicsElement =>
              Boolean(element)
            );

          if (elements.length < 2) return [] as gsap.core.Tween[];

          const centers = elements.map((element) => {
            const box = element.getBBox();
            return box.y + box.height / 2;
          });

          const sortedCenters = [...centers].sort(
            (first, second) => first - second
          );
          const top = sortedCenters[0];
          const bottom = sortedCenters[sortedCenters.length - 1];
          const avgGap =
            sortedCenters
              .slice(1)
              .reduce(
                (sum, current, index) => sum + (current - sortedCenters[index]),
                0
              ) /
            (sortedCenters.length - 1);
          const span = bottom - top + avgGap;

          return elements.map((element, index) => {
            const baseCenter = centers[index];

            return gsap.to(element, {
              y: `+=${span}`,
              duration: 7,
              ease: "none",
              repeat: -1,
              modifiers: {
                y: (value) => {
                  const shift = Number.parseFloat(value) || 0;
                  const absolute = baseCenter + shift;
                  const wrapped = gsap.utils.wrap(top, top + span, absolute);
                  return `${wrapped - baseCenter}`;
                },
              },
            });
          });
        };

        const flowTweens = [
          ...createColumnFlowTweens(leftColumn),
          ...createColumnFlowTweens(rightColumn),
        ];

        const projectListeners: Array<{
          el: Element;
          enter: () => void;
          leave: () => void;
        }> = [];

        projectNodes.forEach((id) => {
          const el = document.querySelector(id);
          if (!el) return;

          const enter = () => {
            gsap.to(el, {
              scale: 1.03,
              rotate: 1,
              duration: 0.22,
              ease: "power2.out",
            });
          };

          const leave = () => {
            gsap.to(el, {
              scale: 1,
              rotate: 0,
              duration: 0.35,
              ease: "power2.out",
            });
          };

          el.addEventListener("mouseenter", enter);
          el.addEventListener("mouseleave", leave);
          projectListeners.push({ el, enter, leave });
        });

        const pulseTween = gsap.to(projectCenter, {
          scale: 1.015,
          duration: 2.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        return () => {
          pulseTween.kill();
          flowTweens.forEach((tween) => tween.kill());
          projectListeners.forEach(({ el, enter, leave }) => {
            el.removeEventListener("mouseenter", enter);
            el.removeEventListener("mouseleave", leave);
          });
        };
      }

      gsap.set([...items, center], {
        transformOrigin: "50% 50%",
      });

      if (prefersReducedMotion) {
        gsap.set([...items, center], { opacity: 1 });
        return;
      }

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: "#hero",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from([...items, center], {
        opacity: 0,
        scale: 0.98,
        duration: 0.6,
        ease: "power2.out",
      });

      const orbitTweens: gsap.core.Tween[] = [];
      const orbitOffsets = [0.051, 0.272, 0.871, 0.416, 0.625];
      const orbitDuration = 30;

      items.forEach((id, index) => {
        const el = document.querySelector(id) as SVGGraphicsElement | null;
        if (!el) return;

        gsap.set(el, { transformOrigin: "50% 50%" });

        const tween = gsap.to(el, {
          duration: orbitDuration,
          ease: "none",
          repeat: -1,
          paused: true,
          motionPath: {
            path: "#orbitPath",
            align: "#orbitPath",
            alignOrigin: [0.5, 0.5],
            autoRotate: false,
          },
        });
        tween.progress(orbitOffsets[index]);
        orbitTweens.push(tween);
      });

      const hoverTargets = [...items];
      const listeners: Array<{
        el: Element;
        enter: () => void;
        leave: () => void;
      }> = [];

      hoverTargets.forEach((id) => {
        const el = document.querySelector(id);
        if (!el) return;

        const enter = () => {
          gsap.to(el, {
            scale: 1.08,
            rotate: 2,
            duration: 0.25,
            ease: "power2.out",
          });
        };

        const leave = () => {
          gsap.to(el, {
            scale: 1,
            rotate: 0,
            duration: 0.35,
            ease: "power2.out",
          });
        };

        el.addEventListener("mouseenter", enter);
        el.addEventListener("mouseleave", leave);
        listeners.push({ el, enter, leave });
      });

      tl.call(() => {
        orbitTweens.forEach((tween) => tween.play());
      });

      return () => {
        orbitTweens.forEach((tween) => tween.kill());
        listeners.forEach(({ el, enter, leave }) => {
          el.removeEventListener("mouseenter", enter);
          el.removeEventListener("mouseleave", leave);
        });
      };
    }, "#hero");

    return () => ctx.revert();
  }, [isProjectLogo]);

  return (
    <div id="hero">
      <Reveal className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-10 md:py-4">
        <div className="flex flex-col items-center lg:items-start gap-8 max-w-176 px-2.5">
          <div className="flex flex-col items-start gap-4">
            <h2 className="text-[#202124] font-ProductSans text-[40px] md:text-[56px] font-bold not-italic leading-[1.35] tracking-[-1.12px] text-center lg:text-left w-full">
              {title}
            </h2>
            <p className="px-1 text-[#565656] font-ProductSans text-lg md:text-xl font-normal not-italic leading-normal tracking-[-0.2px] text-center lg:text-left">
              {desc}
            </p>
          </div>
          <Link href="https://chat.whatsapp.com/GlGpGEgOrlm2QwbkjnDE6V">
            <motion.button
              type="button"
              className="rounded-[44px] bg-[#1A73E8] py-2 px-6 text-white"
              whileHover={reduceMotion ? undefined : buttonHover}
              whileTap={reduceMotion ? undefined : buttonTap}
              transition={buttonTransition}
            >
              Join Community
            </motion.button>
          </Link>
        </div>
        <div className="w-full max-w-119">
          {logo === "/icons/logo.svg" ? (
            <LogoMain />
          ) : isProjectLogo ? (
            <Projectpagelogo className="w-full h-auto" />
          ) : (
            <Image
              src={logo}
              width={400}
              height={400}
              alt="logo"
              className="w-full h-auto"
            />
          )}
        </div>
      </Reveal>
    </div>
  );
};

export default Hero;
