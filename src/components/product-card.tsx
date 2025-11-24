import { Eye, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimatedContent from "./animated-content";

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    originalPrice: number;
    rating: number;
    reviews: number;
    image: string;
    tag?: string;
  };
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <AnimatedContent
      distance={20}
      direction="vertical"
      duration={0.5}
      scale={0.95}
      threshold={0.1}
      delay={index * 0.1}
      className="h-full"
    >
      <div className="group bg-white rounded-xl border border-gray-100 p-4 hover:shadow-lg transition-all duration-300 relative h-full flex flex-col">
        {/* Tag */}
        {product.tag && (
          <span
            className={`absolute top-4 left-4 z-10 text-[10px] font-bold px-2 py-1 rounded text-white ${
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

        {/* Actions (Hover) */}
        <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-secondary hover:text-white shadow-sm transition-colors">
            <Heart className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:bg-secondary hover:text-white shadow-sm transition-colors">
            <Eye className="w-4 h-4" />
          </button>
        </div>

        {/* Image */}
        <div className="relative h-48 w-full mb-4 overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="space-y-2 flex-1 flex flex-col">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-10">
            <Link
              href={`/products/${product.id}`}
              className="hover:text-primary transition-colors"
            >
              {product.name}
            </Link>
          </h3>

          <div className="flex items-center gap-1">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? "fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviews})</span>
          </div>

          <div className="flex items-baseline gap-2 mb-3 mt-auto">
            <span className="text-lg font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-xs text-gray-400 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          <button className="w-full bg-primary hover:opacity-90 text-white py-2.5 rounded-full text-sm font-medium transition-all">
            Add to Cart
          </button>
        </div>
      </div>
    </AnimatedContent>
  );
}
