import Image from "next/image";
import ProfileCard from "@/components/common/ProfileCard";
import { alumniMembers } from "@/lib/alumni";

export default function TeamPage() {
  return (
    <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
      <section className="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-start gap-8 max-w-176 px-2.5">
          <h2 className="font-bold text-5xl  leading-tight">Meet the Geeks</h2>
          <p>
            We are a collective of web developers, app developers, designers, ML
            engineers, and programmers, learning, building, and collaborating
            with a shared passion for innovation
          </p>
          <button
            type="button"
            className="rounded-[44px] bg-[#1A73E8] py-2 px-10 text-white"
          >
            Join Us
          </button>
        </div>
        <Image src="/icons/logo.svg" width={350} height={300} alt="logo" />
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
        {alumniMembers.map((member) => (
          <ProfileCard key={member.id} profile={member} />
        ))}
      </section>
    </div>
  );
}
