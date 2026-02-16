"use client";

import CarouselEvents from "./CarouselEvent";
import Reveal from "@/components/common/Reveal";

const Events = () => {
  return (
    <Reveal>
      <h2 className="text-4xl lg:text-5xl font-bold leading-none tracking-[0.02em] text-center text-[#202124]">
        Our Events!
      </h2>
      <div>
        <CarouselEvents />
      </div>
    </Reveal>
  );
};

export default Events;
