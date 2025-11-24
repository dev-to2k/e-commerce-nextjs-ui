import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Jewelry",
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=200&h=200&fit=crop",
    link: "/category/jewelry",
  },
  {
    name: "Beauty & Health",
    image:
      "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=200&h=200&fit=crop",
    link: "/category/beauty",
  },
  {
    name: "Music & Sounds",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
    link: "/category/music",
  },
  {
    name: "Home Appliance",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=200&h=200&fit=crop",
    link: "/category/home",
  },
  {
    name: "Sports Products",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?w=200&h=200&fit=crop",
    link: "/category/sports",
  },
];

export function ShopByCategory() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Shop Deals by Category
        </h2>
        <p className="text-gray-500">
          Dining, living, and desk areas serve their purposes
          <br />
          in total harmony of style.
        </p>
      </div>

      {/* Categories */}
      <div className="flex justify-center gap-8 mb-8">
        {categories.map((category) => (
          <Link
            key={category.name}
            href={category.link}
            className="group flex flex-col items-center"
          >
            <div className="w-32 h-32 rounded-full overflow-hidden mb-3 relative ring-2 ring-gray-100 group-hover:ring-primary transition-all">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm font-medium text-gray-700 group-hover:text-primary transition-colors flex items-center gap-1">
              {category.name}
              <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </span>
            <button className="mt-2 px-4 py-1 bg-primary text-white text-xs rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              See More
            </button>
          </Link>
        ))}
      </div>

      {/* Product Banners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        {/* Camera Banner */}
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-full h-40 relative mb-4">
            <Image
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&h=300&fit=crop"
              alt="Camera"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-lg mb-2">Nikon V2 HD Digital Camera</h3>
          <p className="text-sm text-gray-600 mb-4">
            Starting at <span className="text-primary font-bold">$29.12</span>
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
            Shop Now
          </button>
        </div>

        {/* Smartphone Banner */}
        <div className="bg-orange-50 rounded-xl p-6 relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="font-bold text-lg mb-1">
              New Samsung Smartphone Green
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Phone Discount -{" "}
              <span className="text-secondary font-bold">30% OFF</span>
            </p>
            <button className="bg-secondary hover:opacity-90 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
              Shop Now
            </button>
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48">
            <Image
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop"
              alt="Phone"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Furniture Banner */}
        <div className="bg-gray-100 rounded-xl p-6 flex flex-col items-center justify-center text-center">
          <div className="w-full h-40 relative mb-4">
            <Image
              src="https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop"
              alt="Chair"
              fill
              className="object-contain"
            />
          </div>
          <h3 className="font-bold text-lg mb-2">
            Wooden Chair Modern Furniture
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            Starting at <span className="text-primary font-bold">$29.12</span>
          </p>
          <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Coupon Banner */}
      <div className="bg-primary rounded-2xl p-8 flex items-center justify-between">
        <div>
          <span className="inline-block bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
            Black Friday Sale 20%
          </span>
          <h3 className="text-3xl font-bold text-white">
            Save Up to_50% with Our Coupons
          </h3>
        </div>
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-8 py-3 rounded-full transition-colors">
          View All Coupons
        </button>
      </div>
    </section>
  );
}
