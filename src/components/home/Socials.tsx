import SocialLinkCard from "./SocialLinkCard";
import Link from "next/link";
import { socialLinks } from "@/lib/options";

const Socials = () => {
  return (
    <section className="w-full flex justify-center py-20">
      <div className="w-full max-w-310 flex flex-col gap-12.5">
        <h2
          className=" text-4xl lg:text-5xl font-bold leading-none tracking-[0.02em] text-center text-[#202124]
"
        >
          Let&apos;s Connect!
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {socialLinks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SocialLinkCard
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
