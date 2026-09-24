"use client";

import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import Link from "next/link";

const slides = [
  {
    id: 1,
    title: "Sleep deeply. Wake up refreshed.",
    description: "Experience the perfect balance of comfort and support with our premium mattresses.",
    ctaText: "Shop Mattresses",
    ctaLink: "/mattresses",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 2,
    title: "Made for your unique space.",
    description: "Any size, any shape. We build mattresses to fit your custom requirements.",
    ctaText: "Custom Sizes",
    ctaLink: "/custom-size",
    image: "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=1200",
  },
  {
    id: 3,
    title: "Direct from the manufacturer.",
    description: "No middlemen, no hidden costs. Premium quality at honest prices.",
    ctaText: "Why Deep Nap?",
    ctaLink: "/guide",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] bg-surface-container overflow-hidden">
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="relative flex-[0_0_100%] min-w-0 h-full"
            >
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover object-center"
                priority={slide.id === 1}
              />
              <div className="absolute inset-0 bg-ink/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-gutter md:px-gutter-tablet max-w-4xl mx-auto flex flex-col items-center">
                  <h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-surface-white mb-4">
                    {slide.title}
                  </h1>
                  <p className="font-body-lead text-body-lead text-surface-white/90 mb-8 max-w-2xl">
                    {slide.description}
                  </p>
                  <Link
                    href={slide.ctaLink}
                    className="inline-flex items-center justify-center h-14 px-8 rounded-full bg-surface-white text-primary font-label-nav text-label-nav font-semibold hover:bg-surface-container-low transition-colors"
                  >
                    {slide.ctaText}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === selectedIndex
                ? "bg-surface-white"
                : "bg-surface-white/40 hover:bg-surface-white/60"
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
