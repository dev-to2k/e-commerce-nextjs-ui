"use client";

import { Heart, Minus, Plus, Share2, Star } from "lucide-react";
import { useState } from "react";
import AnimatedContent from "./animated-content";

interface ProductInfoProps {
  product: {
    name: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    description: string;
    colors?: string[];
    sizes?: string[];
    sku?: string;
    category?: string;
    tag?: string;
  };
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);

  const handleQuantityChange = (delta: number) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  return (
    <AnimatedContent
      distance={20}
      direction="horizontal"
      duration={0.5}
      delay={0.2}
      className="w-full"
    >
      <div className="flex flex-col gap-6">
        {/* Header */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            {product.tag && (
              <span
                className={`text-xs font-bold px-2 py-1 rounded text-white ${
                  product.tag === "Sale"
                    ? "bg-red-500"
                    : product.tag === "Hot"
                    ? "bg-orange-500"
                    : "bg-blue-500"
                }`}
              >
                {product.tag}
              </span>
            )}
            <span className="text-sm text-gray-500">SKU: {product.sku}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {product.name}
          </h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? "fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>
            <span className="text-sm text-primary font-medium">
              {product.category}
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-4 border-b border-gray-100 pb-6">
          <span className="text-4xl font-bold text-primary">
            ${product.price.toFixed(2)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-xl text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{product.description}</p>

        {/* Variants */}
        <div className="space-y-6">
          {/* Colors */}
          {product.colors && (
            <div>
              <span className="block text-sm font-bold text-gray-900 mb-3">
                Color
              </span>
              <div className="flex gap-3">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(index)}
                    className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${
                      selectedColor === index
                        ? "border-primary ring-2 ring-primary/20"
                        : "border-transparent hover:scale-110"
                    }`}
                  >
                    <span
                      className="w-6 h-6 rounded-full border border-gray-200"
                      style={{ backgroundColor: color }}
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {product.sizes && (
            <div>
              <span className="block text-sm font-bold text-gray-900 mb-3">
                Size
              </span>
              <div className="flex gap-3">
                {product.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium border-2 transition-all ${
                      selectedSize === index
                        ? "border-primary text-primary bg-primary/5"
                        : "border-gray-200 text-gray-600 hover:border-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-100">
          <div className="flex items-center border-2 border-gray-200 rounded-full w-fit">
            <button
              onClick={() => handleQuantityChange(-1)}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
            >
              <Minus className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="w-12 text-center font-bold text-gray-900 border-none focus:outline-none"
            />
            <button
              onClick={() => handleQuantityChange(1)}
              className="w-10 h-10 flex items-center justify-center text-gray-600 hover:text-primary transition-colors"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          <button className="flex-1 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 active:scale-95">
            Add to Cart
          </button>

          <button className="w-12 h-12 flex items-center justify-center border-2 border-gray-200 rounded-full text-gray-600 hover:border-red-500 hover:text-red-500 hover:bg-red-50 transition-all">
            <Heart className="w-5 h-5" />
          </button>
        </div>

        {/* Share */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mt-2">
          <Share2 className="w-4 h-4" />
          <span>Share this product</span>
        </div>
      </div>
    </AnimatedContent>
  );
}
