import Events from "@/components/home/Events";
import Socials from "@/components/home/Socials";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
import WhatWeDo from "@/components/home/WhatWeDo";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
        <Hero
          title="Google Developer Groups OnCampus JSS"
          desc="Our community unites web developers, app creators, designers, and tech enthusiasts of all backgrounds. Through hands-on workshops, hackathons, and collaborative projects, we share knowledge and build real solutions."
          logo="/icons/logo.svg"
        />
        <div className="px-4 sm:px-8 lg:px-25 pb-10 flex flex-col gap-16 lg:gap-20">
          <WhatWeDo />
          <Events />
          <Socials />
        </div>
      </div>
      <Footer />
    </>
  );
}
