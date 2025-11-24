import { AppDownloadSection } from "@/components/app-download-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MostPopularSeller } from "@/components/most-popular-seller";
import { PopularProducts } from "@/components/popular-products";
import { ProductGrid } from "@/components/product-grid";
import { ServiceFeatures } from "@/components/service-features";
import { ShopByCategory } from "@/components/shop-by-category";
import { SmartwatchBanner } from "@/components/smartwatch-banner";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">

      <main>
        <HeroSection />
        <ProductGrid />
        <ShopByCategory />
        <PopularProducts />
        <SmartwatchBanner />
        <AppDownloadSection />
        <MostPopularSeller />
        <ServiceFeatures />
      </main>
 
    </div>
  );
}
