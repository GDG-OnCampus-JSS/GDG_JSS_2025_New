"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { navLinks } from "@/lib/options";
import { MenuIcon } from "./MenuIcon";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const NavLinks = ({ onClick }: { onClick?: () => void }) => (
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
        onClick={() => {
          setIsMobileMenuOpen(false);
        }}
        className=" md:block h-10 px-5 py-2 bg-blue-600 rounded-[44px] flex justify-center items-center gap-2.5 cursor-pointer text-center text-white text-base font-normal"
      >
        Connect
      </Button>
    </>
  );

  return (
    <header className="w-full px-[8vw] py-4 inline-flex justify-between items-center overflow-hidden">
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
        <MenuIcon className="text-black" />
      </Button>

      <div className="hidden px-1 relative md:flex justify-start items-center gap-12">
        <NavLinks onClick={() => setIsMobileMenuOpen(false)} />
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-16 right-6 bg-white shadow-lg rounded-lg flex flex-col gap-4 p-6 lg:hidden">
          <NavLinks onClick={() => setIsMobileMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}

