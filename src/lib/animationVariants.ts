import type { Transition } from "framer-motion";

const easeOut: [number, number, number, number] = [0, 0, 0.2, 1];

export const buttonHover = {
  scale: 1.05,
  backgroundColor: "#1666D6",
  boxShadow: "0 8px 18px rgba(26, 115, 232, 0.22)",
};

export const buttonTap = { scale: 0.97 };

export const buttonTransition: Transition = {
  duration: 0.2,
  ease: easeOut,
};

export const cardHover = {
  y: -6,
  scale: 1.01,
  boxShadow: "0 12px 24px rgba(0, 0, 0, 0.08)",
};

export const cardTransition: Transition = {
  duration: 0.25,
  ease: easeOut,
};

export const connectCardTap = {
  scale: 0.97,
};

export const connectCardTapTransition: Transition = {
  duration: 0.15,
  ease: easeOut,
};

export const navUnderlineVariants = {
  initial: { scaleX: 0, opacity: 0 },
  hover: { scaleX: 1, opacity: 1 },
};

export const navLinkTransition: Transition = {
  duration: 0.25,
  ease: easeOut,
};

export const mobileMenuPanel = {
  hidden: { x: "100%" },
  visible: { x: 0 },
  exit: { x: "100%" },
};

export const mobileMenuPanelTransition: Transition = {
  duration: 0.35,
  ease: easeOut,
};

export const mobileMenuContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

export const mobileMenuItemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: easeOut } },
  exit: { opacity: 0, x: -10, transition: { duration: 0.2, ease: easeOut } },
};

export const mobileConnectTransition: Transition = {
  duration: 0.25,
  ease: easeOut,
  delay: 0.35,
};
