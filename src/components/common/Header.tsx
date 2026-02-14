"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { navLinks } from "@/lib/options";
import { MenuIcon } from "./MenuIcon";

type NavLinksProps = {
  pathname: string;
  onClick?: () => void;
};

function NavLinks({ pathname, onClick }: NavLinksProps) {
  return (
    <>
      {navLinks.map((link) => (
        <Link
          key={link.href}
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
          {link.name}
        </Link>
      ))}
      <Button
        onClick={onClick}
        className="md:block px-6 bg-blue-600 rounded-none flex justify-center items-center gap-2.5 cursor-pointer text-center w-fit text-white text-base font-normal"
      >
        Connect
      </Button>
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
        <NavLinks
          pathname={pathname}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      </div>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white px-[8vw] py-4 flex flex-col gap-6 lg:hidden">
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
          <div className="flex flex-col gap-4 pt-4">
            <NavLinks
              pathname={pathname}
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      )}
    </header>
  );
}
