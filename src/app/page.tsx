import Events from "@/components/home/Events";
import Socials from "@/components/home/Socials";

export default function Home() {
  return (
    <div className="px-4 sm:px-8 lg:px-25 py-12 sm:py-16 lg:py-20 flex flex-col gap-16 lg:gap-20">
      <section className="w-full flex justify-center">
        <div className="w-310 flex flex-col gap-12.5">
          <Events />
        </div>
      </section>
      <section className="w-full flex justify-center">
        <div className="w-310 flex flex-col gap-12.5">
          <Socials />
        </div>
      </section>
    </div>
  );
}
