"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";

const events = Array.from({ length: 6 }).map(() => ({
  title: "Sorted 2025",
  description:
    "Short description here. A launchpad for turning ideas into intuitive apps.",
  image: "/event.jpg",
}));

export default function CarouselEvents() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selected, setSelected] = React.useState(0);

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
        opts={{ align: "center", loop: true }}
        className="relative mx-auto max-w-7xl"
      >
        {/* Fade gradients */}
        <div className="relative overflow-hidden">
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-120 md:w-100 lg:w-60 bg-linear-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-120 md:100 lg:w-60 bg-linear-to-l from-white to-transparent" />

          <CarouselContent className="-ml-4 sm:-ml-6">
            {events.map((event, index) => {
              const isActive = index === selected;

              return (
                <CarouselItem
                  key={index}
                  className="
                    pl-4 sm:pl-6
                    basis-[85vw]
                    sm:basis-105
                    lg:basis-152.5
                  "
                >
                  <Card
                    className={cn(
                      "mx-auto max-w-140 rounded-2xl border border-[#F1F1F1] bg-[#F9F9F9] transition-all duration-300",
                      isActive ? "scale-100" : "scale-95"
                    )}
                  >
                    {/* Image */}
                    <div
                      className="
                        relative mx-auto
                        w-full
                        max-w-131.5
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

                    {/* Text */}
                    <div className="px-4 py-3">
                      <h4 className="font-product text-xl sm:text-2xl font-bold text-[#202124]">
                        {event.title}
                      </h4>
                      <p className="mt-1 text-sm sm:text-base text-[#565656] leading-normal tracking-[0.32px]">
                        {event.description}
                      </p>
                    </div>
                  </Card>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </div>

        {/* Controls */}
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-10 sm:-bottom-14">
          <div className="pointer-events-auto flex gap-4">
            <CarouselPrevious className="border border-[#1A73E8] text-[#4284F3]" />
            <CarouselNext className="border border-[#1A73E8] text-[#4284F3]" />
          </div>
        </div>
      </Carousel>
    </section>
  );
}
