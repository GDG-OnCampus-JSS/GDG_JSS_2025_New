"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Button } from "../ui/button";
import { navLinks } from "@/lib/options";
import { MenuIcon } from "./MenuIcon";
import {
  buttonHover,
  buttonTap,
  buttonTransition,
  navLinkTransition,
  navUnderlineVariants,
  mobileMenuPanel,
  mobileMenuPanelTransition,
  mobileMenuContainer,
  mobileMenuItemVariants,
  connectCardTap,
  connectCardTapTransition,
  mobileConnectTransition,
} from "@/lib/animationVariants";

type NavLinksProps = {
  pathname: string;
  onClick?: () => void;
  isMobile?: boolean;
};

function NavLinks({ pathname, onClick, isMobile = false }: NavLinksProps) {
  const reduceMotion = useReducedMotion();

  if (isMobile) {
    return (
      <motion.div
        className="flex flex-col gap-4"
        variants={mobileMenuContainer}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {navLinks.map((link) => (
          <motion.div
            key={link.href}
            variants={mobileMenuItemVariants}
            whileTap={reduceMotion ? undefined : connectCardTap}
            transition={{
              scale: connectCardTapTransition,
            }}
          >
            <Link
              href={link.href}
              onClick={onClick}
              aria-current={pathname === link.href ? "page" : undefined}
              className={clsx(
                "transition-colors text-base cursor-pointer block",
                pathname === link.href
                  ? "text-[#202124] font-medium"
                  : "text-[#565656] font-normal"
              )}
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
        <motion.div
          variants={mobileMenuItemVariants}
          transition={mobileConnectTransition}
        >
          <a
            href="https://www.instagram.com/gdgoncampus.jss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              onClick={onClick}
              className="h-10 px-5 mt-2 bg-[#1A73E8] rounded-none flex justify-center items-center gap-2.5 cursor-pointer text-center w-fit text-white text-base font-normal"
              type="button"
              whileHover={reduceMotion ? undefined : buttonHover}
              whileTap={reduceMotion ? undefined : buttonTap}
              transition={buttonTransition}
            >
              Connect
            </motion.button>
          </a>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <>
      {navLinks.map((link) => (
        <motion.div
          key={link.href}
          className="relative inline-flex"
          initial="initial"
          whileHover={reduceMotion ? undefined : "hover"}
        >
          <Link
            href={link.href}
            onClick={onClick}
            aria-current={pathname === link.href ? "page" : undefined}
            className={clsx(
              "transition-colors text-base cursor-pointer",
              pathname === link.href
                ? "text-[#202124] font-medium"
                : "text-[#565656] font-normal hover:text-[#1A73E8]"
            )}
          >
            <span className="relative inline-block">
              {link.name}
              {!reduceMotion && (
                <motion.span
                  className="absolute left-0 right-0 -bottom-1 h-0.5 origin-left bg-[#1A73E8]"
                  variants={navUnderlineVariants}
                  transition={navLinkTransition}
                />
              )}
            </span>
          </Link>
        </motion.div>
      ))}
      <a
        href="https://www.instagram.com/gdgoncampus.jss"
        target="_blank"
        rel="noopener noreferrer"
      >
        <motion.button
          onClick={onClick}
          className="h-10 px-5 mt-0 py-2 md:block bg-[#1A73E8] rounded-none md:rounded-4xl flex justify-center items-center gap-2.5 cursor-pointer text-center w-fit text-white text-base font-normal"
          type="button"
          whileHover={reduceMotion ? undefined : buttonHover}
          whileTap={reduceMotion ? undefined : buttonTap}
          transition={buttonTransition}
        >
          Connect
        </motion.button>
      </a>
    </>
  );
}

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="w-full px-[8vw] py-4 inline-flex justify-between items-center">
      <div className="flex justify-start items-center gap-1">
        <Image
          src="/icons/gdsclogo.svg"
          alt="gdsc logo"
          width={32}
          height={32}
        />
        <span className="justify-start text-neutral-700 text-base font-normal cursor-pointer">
          GDG JSSATEN
        </span>
      </div>
      <Button
        type="button"
        title="Menu"
        className="md:hidden bg-white hover:bg-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <MenuIcon className="text-black" isOpen={isMobileMenuOpen} />
      </Button>

      <div className="hidden px-1 relative md:flex justify-start items-center gap-6 lg:gap-12">
        <NavLinks pathname={pathname} />
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-white px-[8vw] py-4 flex flex-col gap-6 lg:hidden"
            variants={mobileMenuPanel}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={mobileMenuPanelTransition}
          >
            <div className="flex items-center justify-between">
              <div className="flex justify-start items-center gap-1">
                <Image
                  src="/icons/gdsclogo.svg"
                  alt="gdsc logo"
                  width={32}
                  height={32}
                />
                <span className="justify-start text-neutral-700 text-base font-normal cursor-pointer">
                  GDG JSSATEN
                </span>
              </div>
              <Button
                type="button"
                title="Close menu"
                className="bg-white hover:bg-white"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MenuIcon className="text-black" isOpen={true} />
              </Button>
            </div>
            <div className="pt-4">
              <NavLinks
                pathname={pathname}
                onClick={() => setIsMobileMenuOpen(false)}
                isMobile={true}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
