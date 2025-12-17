
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import ProfileCard from "@/components/common/ProfileCard";
import { teamMembers } from "@/lib/team";

export default function TeamPage() {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
        <Hero
          title="Meet the Geeks"
          desc="We are a collective of web developers, app developers, designers, ML
          engineers, and programmers, learning, building, and collaborating with
          a shared passion for innovation"
        />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center">
          {teamMembers.map((member) => (
            <ProfileCard key={member.id} profile={member} />
          ))}
        </section>
      </div>
    </>
  );
}
