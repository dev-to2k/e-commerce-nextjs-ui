"use client";

import { heroSlides } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleSlideChange = useCallback((index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  }, []);

  // Auto-play slider
  useEffect(() => {
    if (isHovered) return; // Pause auto-play on hover

    const interval = setInterval(() => {
      handleSlideChange((currentSlide + 1) % heroSlides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentSlide, isHovered, handleSlideChange]);

  const goToSlide = (index: number) => {
    handleSlideChange(index);
  };

  const nextSlide = () => {
    handleSlideChange((currentSlide + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    handleSlideChange(
      (currentSlide - 1 + heroSlides.length) % heroSlides.length
    );
  };

  return (
    <section className="container mx-auto px-4 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 gap-6">
        {/* Main Banner - Left (Takes up 2 columns) with Slider */}
        <div
          className={`lg:col-span-2 relative rounded-2xl overflow-hidden ${heroSlides[currentSlide].color} h-[300px] md:h-[400px] transition-colors duration-500 group`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            className={`absolute inset-0 flex items-center p-8 md:p-12 transition-opacity duration-300 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          >
            <div className="max-w-md z-10">
              <span className="inline-block px-4 py-1.5 bg-white/80 text-primary text-xs font-bold rounded-full mb-6 shadow-sm backdrop-blur-sm">
                {heroSlides[currentSlide].badge}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                {heroSlides[currentSlide].title}
              </h2>
              <p className="text-gray-600 mb-8 text-sm md:text-base">
                {heroSlides[currentSlide].subtitle}
              </p>
              <button className="bg-primary hover:opacity-90 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg shadow-primary/20">
                {heroSlides[currentSlide].cta}
              </button>
            </div>
            <div className="absolute right-0 top-0 bottom-0 w-1/2 h-full">
              <Image
                src={heroSlides[currentSlide].image}
                alt={heroSlides[currentSlide].title}
                fill
                className="object-cover object-center"
                key={currentSlide}
              />
            </div>

            {/* Prev/Next Buttons - Show on Hover */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-lg"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 shadow-lg"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`rounded-full transition-all ${
                    index === currentSlide
                      ? "w-2.5 h-2.5 border-2 border-primary flex items-center justify-center"
                      : "w-1.5 h-1.5 bg-primary/40 hover:bg-primary/60"
                  }`}
                >
                  {index === currentSlide && (
                    <div className="w-1 h-1 bg-primary rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Side Banner - Right - Spans 2 rows */}
        <div
          className="relative rounded-2xl overflow-hidden h-[300px] md:h-[400px] lg:row-span-2 lg:h-auto"
          style={{
            backgroundImage: `url(${heroSlides[1].image})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-transparent" />
          <div className="relative z-10 p-8 flex flex-col justify-start">
            <span className="text-secondary font-semibold text-sm mb-2">
              Supper Sale 50%
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Stylish Looks For Any Season
            </h3>
            <button className="w-fit bg-secondary hover:opacity-90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors mb-4">
              Shop Now
            </button>
          </div>
        </div>

        {/* Bottom Banners */}
        <div
          className="rounded-xl p-6 flex items-center justify-between relative overflow-hidden group"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-100/80 to-transparent" />
          <div className="z-10 relative">
            <span className="text-red-500 text-xs font-bold">
              Supper Sale 50%
            </span>
            <h4 className="text-xl font-bold text-gray-900 mt-1 mb-3">
              Stylish Men&apos;s
              <br />
              Fashion
            </h4>
            <button className="bg-black hover:opacity-90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors shadow-md">
              Shop Now
            </button>
          </div>
        </div>

        <div
          className="rounded-xl p-6 flex items-center justify-between relative overflow-hidden group"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=1000&auto=format&fit=crop)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-50 via-pink-50/90 to-transparent" />
          <div className="z-10 relative">
            <h4 className="text-xl font-bold text-gray-900 mb-1">
              Mid
              <br />
              Summer
            </h4>
            <div className="text-4xl font-black text-blue-600">
              30<span className="text-sm align-top">%</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
