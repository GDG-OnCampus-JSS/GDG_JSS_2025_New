import ProfileCard from "@/components/common/ProfileCard";
import { alumniMembers } from "@/lib/alumni";
import Hero from "@/components/common/Hero";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function AlumniPage() {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
        <Hero
          title="Our Alumni"
          desc="Discover our remarkable alumni who lead by example, turning talent into success and rising high in the real world. Their achievements inspire us every day"
          logo="/icons/logo.svg"
        />
        <section className="flex flex-wrap justify-center gap-9">
          {alumniMembers.map((member, index) => (
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
