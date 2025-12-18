import Image from "next/image";
const WhatWeDo = () => {
  return (
    <section>
      <h2 className="py-12 self-stretch text-center justify-start text-Primary text-5xl font-bold font-['Product_Sans'] tracking-wide">
        What we Do!
      </h2>
      <div className="inline-flex gap-5 ">
        <div className="w-96 h-80 pb-5 bg-stone-50 rounded-2xl -outline-offset-1 inline-flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch flex-1 relative">
            <Image
              src="/icons/orangeGradient.svg"
              alt="Orange Gradient"
              width={170}
              height={170}
              className="left-55 absolute"
            />
          </div>
          <div className="self-stretch px-6 flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch flex flex-col justify-center items-center gap-3">
              <div className="self-stretch justify-start text-Primary text-3xl font-bold font-['Product_Sans']">
                Design
              </div>
              <div className="self-stretch justify-start text-Secondary text-base font-normal font-['Product_Sans'] leading-6 tracking-tight">
                A creative hub where we craft meaningful experiences through
                storytelling, research, and visual innovation.
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-80 pt-5 bg-stone-50 rounded-2xl -outline-offset-1 inline-flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch px-6 flex flex-col justify-start items-start gap-3 overflow-hidden">
            <div className="self-stretch flex flex-col justify-center items-center gap-3">
              <div className="self-stretch justify-start text-Primary text-3xl font-bold font-['Product_Sans']">
                Web Development
              </div>
              <div className="self-stretch justify-start text-Secondary text-base font-normal font-['Product_Sans'] leading-6 tracking-tight">
                {" "}
                A builder’s space where we create dynamic, user-focused websites
                using modern web technologies.
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 relative">
            <Image
              src="/icons/blueGradient.svg"
              alt="Blue Circles"
              width={450}
              height={450}
              className="top-4 absolute"
            />
          </div>
        </div>
        <div className="w-96 h-80 pb-5 bg-stone-50 rounded-2xl -outline-offset-1 inline-flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch flex-1 relative">
            <Image
              src="/icons/greenGradient.svg"
              alt="Green Circles"
              width={400}
              height={400}
              className=" absolute"
            />
          </div>
          <div className="self-stretch px-6 flex flex-col justify-start items-start overflow-hidden">
            <div className="self-stretch flex flex-col justify-center items-center gap-3">
              <div className="self-stretch justify-start text-Primary text-3xl font-bold font-['Product_Sans']">
                App Development
              </div>
              <div className="self-stretch justify-start text-Secondary text-base font-normal font-['Product_Sans'] leading-6 tracking-tight">
                A launchpad for turning ideas into intuitive mobile apps through
                hands-on development and collaboration.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex gap-5 pt-6">
        <div className="self-stretch w-150 h-64 pb-5 bg-stone-50 rounded-2xl -outline-offset-1 inline-flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch h-36 relative">
            <Image
              src="icons/redGradient.svg"
              alt="Red Gradient"
              width={600}
              height={600}
              className="absolute"
            />
          </div>
          <div className="self-stretch h-24 px-6 flex flex-col justify-start items-start gap-3 overflow-hidden">
            <div className="self-stretch flex flex-col justify-center items-center gap-3">
              <div className="self-stretch justify-start text-Primary text-3xl font-bold font-['Product_Sans']">
                Programming{" "}
              </div>
              <div className="self-stretch justify-start text-Secondary text-base font-normal font-['Product_Sans'] leading-6 tracking-tight">
                A problem-solving arena where we strengthen logic, learn new
                languages, and build impactful software together.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-64 pt-5 bg-stone-50 rounded-2xl -outline-offset-1 inline-flex flex-col justify-start items-start overflow-hidden">
          <div className="self-stretch px-6 flex flex-col justify-center items-start gap-2.5 overflow-hidden">
            <div className="self-stretch flex flex-col justify-center items-center gap-3">
              <div className="self-stretch justify-start text-Primary text-3xl font-bold font-['Product_Sans']">
                Machine Learning
              </div>
              <div className="self-stretch justify-start text-Secondary text-base font-normal font-['Product_Sans'] leading-6 tracking-tight">
                A curiosity-driven community exploring intelligent systems
                through data, models, and real-world applications.
              </div>
            </div>
          </div>
          <div className="self-stretch h-36 relative">
            <Image
              src="icons/purpleGradient.svg"
              alt="Purple Circles"
              width={650}
              height={650}
              className=" absolute"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
