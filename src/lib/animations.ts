import type { Transition } from "framer-motion";

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const fadeInViewport = { amount: 0.2 };

export const fadeInTransition: Transition = {
  duration: 0.6,
  ease: easeOut,
};

export const cardScrollReveal = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0 },
};

export const cardScrollViewport = { amount: 0.2 };

export const cardScrollTransition: Transition = {
  duration: 0.4,
  ease: easeOut,
};

export const cardHoverLift = {
  y: -6,
  scale: 1.02,
};

export const cardHoverTransition: Transition = {
  duration: 0.25,
  ease: easeOut,
};

export const imageZoom = {
  scale: 1.05,
};

export const imageZoomTransition: Transition = {
  duration: 0.4,
  ease: easeOut,
};

export const iconReveal = {
  initial: { opacity: 0.7, y: 0 },
  hover: { opacity: 1, y: -3 },
};

export const iconTransition: Transition = {
  duration: 0.2,
  ease: easeOut,
};

export const subtleCardReveal = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export const subtleCardTransition: Transition = {
  duration: 0.3,
  ease: easeOut,
};

export const subtleCardViewport = { amount: 0.15 };

export const subtleCardContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
