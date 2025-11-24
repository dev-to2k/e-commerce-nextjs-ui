"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { products } from "@/lib/data";
import { useState } from "react";
import { ProductCard } from "./product-card";

export function ProductGrid() {
  const [activeTag, setActiveTag] = useState<number>(2); // Default to "Almost Sold out"
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Set target date to 2 days from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 2);
  targetDate.setHours(23, 59, 59, 999);

  const timeLeft = useCountdown(targetDate);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  const tags = [
    "Up to 90% off",
    "Under $1",
    "Almost Sold out",
    "Beauty & Health",
    "Jewelry & Accessories",
    "Home & Kitchen",
    "Men's Clothing",
    "Sports & Outdoors",
  ];

  // Filter products based on selected tag
  const getFilteredProducts = () => {
    const tagName = tags[activeTag];

    switch (tagName) {
      case "Up to 90% off":
        // Filter by discount >= 10%
        return products.filter((product) => {
          const discount =
            ((product.originalPrice! - product.price) /
              product.originalPrice!) *
            100;
          return discount >= 10;
        });
      case "Under $1":
        // Products under $1
        return products.filter((product) => product.price < 1);
      case "Beauty & Health":
        return products.filter((product) =>
          product.category?.toLowerCase().includes("beauty")
        );
      case "Home & Kitchen":
        return products.filter(
          (product) => product.category === "Home & Garden"
        );
      case "Men's Clothing":
        return products.filter((product) => product.category === "Fashion");
      case "Sports & Outdoors":
        return products.filter((product) => product.category === "Sports");
      case "Almost Sold out":
      default:
        // Show all products
        return products.slice(0, 5);
    }
  };

  const handleTagClick = (index: number) => {
    if (activeTag === index) return; // Don't re-filter if same tag

    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTag(index);
      setIsTransitioning(false);
    }, 150); // Half of the transition duration
  };

  const filteredProducts = getFilteredProducts();

  return (
    <section className="bg-primary py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <h2 className="text-2xl font-bold text-white">Weekly Best Deals</h2>
          <div className="flex items-center gap-2 text-white text-sm">
            <span>Limited time only!</span>
            <div className="flex gap-1">
              <span className="bg-red-500 px-1.5 py-0.5 rounded text-xs font-bold transition-all">
                {formatNumber(timeLeft.days)}
              </span>
              :
              <span className="bg-red-500 px-1.5 py-0.5 rounded text-xs font-bold transition-all">
                {formatNumber(timeLeft.hours)}
              </span>
              :
              <span className="bg-red-500 px-1.5 py-0.5 rounded text-xs font-bold transition-all">
                {formatNumber(timeLeft.minutes)}
              </span>
              :
              <span className="bg-red-500 px-1.5 py-0.5 rounded text-xs font-bold transition-all">
                {formatNumber(timeLeft.seconds)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 my-8">
          {tags.map((tag, i) => (
            <button
              key={i}
              onClick={() => handleTagClick(i)}
              className={`flex-1 px-4 py-2.5 cursor-pointer rounded-full text-xs font-medium transition-all duration-300 ${
                i === activeTag
                  ? "bg-secondary text-white border-2 border-secondary scale-105"
                  : "bg-transparent text-primary-light border-2 border-primary-light/30 hover:border-primary-light hover:bg-primary-light/10 hover:scale-105"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div
          className={`transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          } ${
            filteredProducts.length === 0
              ? "grid grid-cols-1"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4"
          }`}
        >
          {filteredProducts.length === 0 ? (
            <p className="text-center text-white col-span-full py-12 text-lg">
              No products found
            </p>
          ) : (
            filteredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))
          )}
        </div>

        {/* Bottom Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Smartwatch Banner */}
          <div
            className="bg-white rounded-xl p-6 min-h-[200px] relative overflow-hidden bg-cover bg-right"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&h=400&fit=crop')",
              backgroundPosition: "right center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>
            <div className="relative z-10 max-w-[60%]">
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Gadget Collection
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-4">
                FITNESS FOR SMART
                <br />
                SPECIAL OFFER
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Dining, living, & desk areas serve their purposes
              </p>
              <button className="bg-primary hover:opacity-90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Men's Fashion Banner */}
          <div
            className="bg-yellow-50 rounded-xl p-6 min-h-[200px] relative overflow-hidden bg-cover bg-right"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&h=400&fit=crop')",
              backgroundPosition: "right center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-50 via-yellow-50/95 to-transparent"></div>
            <div className="relative z-10 max-w-[60%]">
              <span className="text-xs text-secondary uppercase tracking-wider font-bold">
                Men&apos;s Fashion
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                Men&apos;s Fashion
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Offer starts from{" "}
                <span className="text-red-500 font-bold">$29.99</span>
              </p>
              <button className="bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                Shop Now
              </button>
            </div>
          </div>

          {/* Fan Banner */}
          <div
            className="bg-blue-50 rounded-xl p-6 min-h-[200px] relative overflow-hidden bg-cover bg-right"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop')",
              backgroundPosition: "right center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-blue-50/95 to-transparent"></div>
            <div className="relative z-10 max-w-[60%]">
              <span className="text-xs text-blue-500 uppercase tracking-wider font-bold">
                Home Appliances
              </span>
              <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">
                Felly Fan Offer
              </h3>
              <p className="text-xs text-gray-500 mb-4">
                Offer starts from{" "}
                <span className="text-blue-500 font-bold">$29.12</span>
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
