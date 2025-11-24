"use client";

import { useCountdown } from "@/hooks/use-countdown";
import { products } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import { ProductCard } from "./product-card";

export function BestSellerSection() {
  const [activeTab, setActiveTab] = useState("bestseller");

  // Set target date to 1 day from now
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1);
  targetDate.setHours(23, 59, 59, 999);

  const timeLeft = useCountdown(targetDate);

  const formatNumber = (num: number) => String(num).padStart(2, "0");

  return (
    <section className="container mx-auto px-4 py-12">
      {/* Tabs */}
      <div className="flex justify-center gap-8 mb-8 border-b border-gray-200">
        <button
          onClick={() => setActiveTab("newarrivals")}
          className={`pb-4 px-2 font-bold transition-colors ${
            activeTab === "newarrivals"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          New Arrivals
        </button>
        <button
          onClick={() => setActiveTab("bestseller")}
          className={`pb-4 px-2 font-bold transition-colors ${
            activeTab === "bestseller"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Best Seller
        </button>
        <button
          onClick={() => setActiveTab("bestoffers")}
          className={`pb-4 px-2 font-bold transition-colors ${
            activeTab === "bestoffers"
              ? "text-gray-900 border-b-2 border-gray-900"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          Best Offers
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Featured Banner */}
        <div className="bg-black rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400 opacity-80"></div>

          <div className="relative z-10">
            <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-4">
              Limited time only!
            </span>
            <div className="flex gap-2 mb-8">
              <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold transition-all">
                {formatNumber(timeLeft.hours)}
              </div>
              <span className="text-white">:</span>
              <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold transition-all">
                {formatNumber(timeLeft.minutes)}
              </div>
              <span className="text-white">:</span>
              <div className="bg-white text-black px-3 py-1 rounded text-sm font-bold transition-all">
                {formatNumber(timeLeft.seconds)}
              </div>
            </div>
          </div>

          <div className="relative z-10 mb-8">
            <div className="w-full h-48 relative">
              <Image
                src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400&h=400&fit=crop"
                alt="Product"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="relative z-10">
            <h3 className="text-white text-2xl font-bold mb-4">
              Sneaker Fest 2024
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Up to 40% off Women Sneakers
            </p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full text-sm transition-colors">
              Shop Now
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.slice(0, 8).map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
