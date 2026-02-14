import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import Hero from "@/components/common/Hero";
function page() {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
        <Hero
          title="Events We Host"
          desc="We organize impactful events across a wide range of technical topics—featuring hands-on workshops, learning sessions, and collaborative activities. We take pride in fostering an inclusive environment for everyone interested in tech."
          logo="/icons/logo.svg"
        />
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-9 justify-items-center"></section>
      </div>
      <Footer />
    </>
  );
}

export default page;
