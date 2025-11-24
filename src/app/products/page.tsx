import { ProductCard } from "@/components/product-card";
import { ProductFilters } from "@/components/product-filters";
import { products } from "@/lib/data";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  // Extract filters safely
  const category = (await searchParams).category;
  const minPrice = Number((await searchParams).minPrice ?? 0);
  const maxPrice = Number((await searchParams).maxPrice ?? 0);
  const rating = Number((await searchParams).rating ?? 0);

  const filteredProducts = products.filter((product) => {
    if (category && product.category !== category) return false;
    if (minPrice !== 0 && product.price < minPrice) return false;
    if (maxPrice !== 0 && product.price > maxPrice) return false;
    if (rating !== 0 && product.rating < rating) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="w-full lg:w-64 shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <ProductFilters />
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                All Products
                <span className="ml-2 text-sm font-normal text-gray-500">
                  ({filteredProducts.length} items)
                </span>
              </h1>
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl shadow-sm">
                <h3 className="text-lg font-medium text-gray-900">
                  No products found
                </h3>
                <p className="text-gray-500 mt-2">Try adjusting your filters</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
