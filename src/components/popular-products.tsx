import { products } from "@/lib/data";
import { ProductCard } from "./product-card";

export function PopularProducts() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Popular Products
        </h2>
        <p className="text-gray-500">
          Dining, living, and desk areas serve their purposes
          <br />
          in total harmony of style.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {/* Load More Button */}
      <div className="text-center">
        <button className="px-8 py-3 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-primary hover:text-primary transition-colors">
          Load More
        </button>
      </div>
    </section>
  );
}
