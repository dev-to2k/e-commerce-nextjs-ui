"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AnimatedContent from "./animated-content";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Trigger fade-in after a short delay to avoid synchronous state update
    const startTimer = setTimeout(() => setFade(true), 0);
    const endTimer = setTimeout(() => setFade(false), 300);
    return () => {
      clearTimeout(startTimer);
      clearTimeout(endTimer);
    };
  }, [selectedImage]);

  return (
    <AnimatedContent
      distance={20}
      direction="horizontal"
      reverse={true}
      duration={0.5}
      className="w-full"
    >
      <div className="flex flex-col gap-4">
        {/* Main Image */}
        <div
          className={`relative w-full aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100 transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={images[selectedImage]}
            alt={name}
            fill
            className="object-contain p-8"
            priority
          />
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 overflow-x-auto pb-2">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                selectedImage === index
                  ? "border-primary"
                  : "border-transparent hover:border-gray-200"
              }`}
            >
              <Image
                src={image}
                alt={`${name} thumbnail ${index + 1}`}
                fill
                className="object-cover bg-white"
              />
            </button>
          ))}
        </div>
      </div>
    </AnimatedContent>
  );
}
