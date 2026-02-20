"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion, useReducedMotion } from "framer-motion";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { carouselEvents as events } from "@/lib/options";
import { cardHover, cardTransition } from "@/lib/animationVariants";

export default function CarouselEvents() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selected, setSelected] = React.useState(0);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      setSelected(api.selectedScrollSnap());
    };

    api.on("select", onSelect);
    onSelect();

    const interval = setInterval(() => {
      if (api) {
        api.scrollNext();
      }
    }, 2000);

    return () => {
      api.off("select", onSelect);
      clearInterval(interval);
    };
  }, [api]);

  return (
    <section
      className="relative w-[95vw] md:w-[98vw] overflow-x-clip max-w-none left-1/2 right-1/2 -translate-x-1/2 py-8 sm:py-16"
      style={{ position: "relative" }}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          containScroll: false,
          slidesToScroll: 1,
          skipSnaps: false,
        }}
        className="w-screen max-w-none mx-auto"
      >
        <div className="overflow-visible">
          <CarouselContent className="-ml-4 sm:-ml-6 w-screen max-w-none px-1">
            {events.map((event, index) => {
              const isActive = index === selected;

              return (
                <CarouselItem
                  key={index}
                  className="py-4 pl-4 sm:pl-2 w-full md:max-w-140 max-h-175"
                >
                  <motion.div
                    className={cn(
                      "mx-auto w-full max-w-139 max-h-165 p-4 rounded-2xl border border-[#F1F1F1] bg-[#F9F9F9] transition-all duration-300 flex flex-col justify-between",
                      isActive ? "scale-100" : "scale-95"
                    )}
                    animate={{ scale: isActive ? 1 : 0.95 }}
                    whileHover={reduceMotion ? undefined : cardHover}
                    transition={{
                      scale: cardTransition,
                      y: cardTransition,
                      boxShadow: cardTransition,
                    }}
                  >
                    <div className="relative w-full max-w-138 h-80 md:h-140 mx-auto rounded-xl bg-[#F9F6FF] overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover w-full h-full"
                        priority={isActive}
                        sizes="(max-width: 558px) 80vw, 558px"
                      />
                    </div>

                    <div className="px-4 py-3 w-full">
                      <h4 className="font-ProductSans text-xl sm:text-2xl font-bold text-[#202124]">
                        {event.title}
                      </h4>
                      <p className="mt-1 text-sm sm:text-base text-[#565656] leading-normal tracking-[0.32px]">
                        {event.description}
                      </p>
                    </div>
                  </motion.div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>

        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-10 sm:-bottom-14">
          <div className="pointer-events-auto flex gap-4">
            <CarouselPrevious className="border border-[#1A73E8] text-[#4284F3] transition-transform duration-150 ease-out hover:scale-[1.05] hover:text-[#2F6FE6] active:scale-[0.97]" />
            <CarouselNext className="border border-[#1A73E8] text-[#4284F3] transition-transform duration-150 ease-out hover:scale-[1.05] hover:text-[#2F6FE6] active:scale-[0.97]" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
