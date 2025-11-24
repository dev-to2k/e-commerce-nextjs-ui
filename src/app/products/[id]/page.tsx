import { ProductCard } from "@/components/product-card";
import { ProductGallery } from "@/components/product-gallery";
import { ProductInfo } from "@/components/product-info";
import { ProductTabs } from "@/components/product-tabs";
import { products } from "@/lib/data";
import Link from "next/link";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id.toString(),
  }));
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  // Get related products (excluding current one)
  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  // Ensure images array exists
  const productImages = product.images || [product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-primary transition-colors">
            Shop
          </Link>
          <span>/</span>
          <span className="text-gray-900 font-medium">{product.name}</span>
        </div>

        {/* Product Layout */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <ProductGallery images={productImages} name={product.name} />
            <ProductInfo product={product} />
          </div>

          <ProductTabs
            description={product.description || ""}
            reviews={product.reviews}
          />
        </div>

        {/* Related Products */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Related Products
            </h2>
            <Link
              href="/shop"
              className="text-primary font-medium hover:underline decoration-2 underline-offset-4"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct, index) => (
              <div key={relatedProduct.id} className="h-full">
                <ProductCard product={relatedProduct} index={index} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
