import Image from "next/image";
type Props = {
    title: string;
    desc: string;
}
const Hero = ({ title, desc }: Props) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
      <div className="flex flex-col items-start gap-8 max-w-176 px-2.5">
        <h2 className="font-bold text-5xl  leading-tight">{title}</h2>
        <p>
          {desc}
        </p>
        <button
          type="button"
          className="rounded-[44px] bg-[#1A73E8] py-2 px-10 text-white"
        >
          Join Us
        </button>
      </div>
      <Image src="/icons/logo.svg" width={400} height={400} alt="logo" />
    </section>
  );
};

export default Hero;
