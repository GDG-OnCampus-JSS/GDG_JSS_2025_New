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

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="relative w-full py-8 sm:py-16">
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
          containScroll: false,
          slidesToScroll: 1,
          skipSnaps: false,
        }}
        className="mx-auto max-w-7xl"
      >
        <div className="overflow-hidden">
          <CarouselContent className="-ml-4 sm:-ml-6">
            {events.map((event, index) => {
              const isActive = index === selected;

              return (
                <CarouselItem
                  key={index}
                  className=" py-4
                    pl-4 sm:pl-6
                    sm:basis-105
                    lg:basis-132
                  "
                >
                  <motion.div
                    className={cn(
                      "mx-auto max-w-130 p-4 rounded-2xl border border-[#F1F1F1] bg-[#F9F9F9] transition-all duration-300",
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
                    <div
                      className="
                        relative mx-auto
                        w-full
                        max-w-lg
                        aspect-square
                        rounded-xl
                        bg-[#F9F6FF]
                        overflow-hidden
                      "
                    >
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover"
                        priority={isActive}
                      />
                    </div>

                    <div className="px-4 py-3">
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
