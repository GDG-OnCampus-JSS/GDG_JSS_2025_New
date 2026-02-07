"use client";
import Image from "next/image";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Linkedin",
    icon: "/icons/lk.svg",
    link: "https://www.linkedin.com/company/gdg-jssaten/",
  },
  {
    id: 2,
    name: "WhatsApp",
    icon: "/icons/wp.svg",
    link: "",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "/icons/ig.svg",
    link: "https://www.instagram.com/gdg_jssaten/",
  },
];
function Footer() {
  return (
    <div className="w-full bg-[#F9F9F9] border border-[#E7E7E7] flex flex-col items-center gap-10 px-6 py-10 md:px-10 md:py-12">
      <div className="w-full max-w-5xl flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col justify-start items-start md:w-[60%] gap-6">
          <div className="flex justify-start items-center gap-1">
            <Image
              src="/icons/gdsclogo.svg"
              alt="gdsc logo"
              width={32}
              height={32}
            />
            <span className="justify-start text-neutral-700 text-xl font-normal cursor-pointer">
              GDG JSSATEN
            </span>
          </div>
          <p className="text-[#9E9E9E] text-xl leading-6 tracking-[0.4px]">
            GDG OnCampus is a community of tech enthusiasts building and
            learning together through workshops and projects.
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 text-lg md:text-xl text-[#565656]">
          <p>Follow us on Social Media</p>
          <div className="flex gap-4">
            {links.map((link) => (
              <Link
                href={link.link}
                key={link.id}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex transition-transform duration-200 ease-out hover:scale-110 focus-visible:scale-110"
              >
                <Image
                  src={link.icon}
                  alt={link.name}
                  width={24}
                  height={24}
                  className="w-6 h-6 transition-opacity duration-200 ease-out group-hover:opacity-80 group-focus-visible:opacity-80"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full max-w-5xl text-left flex text-[#565656] gap-2">
        <Image
          src="/icons/copyright.svg"
          alt="copyright"
          width={1}
          height={1}
          className="w-6 h-6"
        />
        <span>2025 GDG JSSATEN</span>
      </div>
      <div className="w-full max-w-5xl">
        <Image
          src="/icons/gdg.svg"
          alt="gdg logo"
          width={40}
          height={40}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
}

export default Footer;
