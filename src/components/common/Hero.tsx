import Image from "next/image";
type Props = {
  title: string;
  desc: string;
  logo: string;
};
const Hero = ({ title, desc, logo }: Props) => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-10 md:py-10">
      <div className="flex flex-col items-center lg:items-start gap-8 max-w-176 px-2.5">
        <div className="flex flex-col items-start gap-4">
          <h2 className="text-[#202124] font-product text-5xl md:text-[56px] font-bold not-italic leading-[1.35] tracking-[-1.12px] text-center lg:text-left w-full">
            {title}
          </h2>
          <p className="px-1 text-[#565656] font-product text-lg md:text-xl font-normal not-italic leading-normal tracking-[-0.2px] text-center lg:text-left">
            {desc}
          </p>
        </div>
        <button
          type="button"
          className="rounded-[44px] bg-[#1A73E8] py-2 px-10 text-white"
        >
          Join Us
        </button>
      </div>
      <Image src={logo} width={400} height={400} alt="logo" />
    </section>
  );
};

export default Hero;
