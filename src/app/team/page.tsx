import Footer from "@/components/common/Footer";
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
          logo="/icons/logo.svg"
        />
        <section className="flex flex-wrap justify-center gap-9">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className="w-full sm:w-[calc(50%-1.125rem)] lg:w-[calc((100%-4.5rem)/3)] max-w-100"
            >
              <ProfileCard profile={member} index={index} />
            </div>
          ))}
        </section>
      </div>
      <Footer />
    </>
  );
}
