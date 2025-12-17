import Image from "next/image";
import ProfileCard from "@/components/common/ProfileCard";
import { alumniMembers } from "@/lib/alumni";
import Hero from "@/components/common/Hero";
import Header from "@/components/common/Header";

export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
        <Hero
          title="Our Alumni"
          desc="Discover our remarkable alumni who lead by example, turning talent into success and rising high in the real world. Their achievements inspire us every day"
        />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
          {alumniMembers.map((member) => (
            <ProfileCard key={member.id} profile={member} />
          ))}
        </section>
      </div>
    </>
  );
}
