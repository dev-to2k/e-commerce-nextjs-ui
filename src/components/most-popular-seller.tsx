import { ChevronRight, Star } from "lucide-react";

const sellers = [
  { name: "Easy Fashion Ltd.", logo: "🍎", rating: 4.5, reviews: "1.5k" },
  {
    name: "Outfit Fashion",
    logo: "🅿️",
    rating: 4.8,
    reviews: "1.5k",
    featured: true,
  },
  { name: "Artisan Fashion", logo: "👑", rating: 4.3, reviews: "1.5k" },
  { name: "Sara Life Style", logo: "👑", rating: 4.6, reviews: "1.5k" },
  { name: "Twelve Clothing", logo: "🟧", rating: 4.7, reviews: "1.5k" },
  { name: "Motion View", logo: "Ⓜ️", rating: 4.5, reviews: "1.5k" },
  { name: "One Plus", logo: "1️⃣", rating: 4.9, reviews: "1.5k" },
  { name: "Ferrari", logo: "🏎️", rating: 4.4, reviews: "1.5k" },
];

export function MostPopularSeller() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Most Popular Seller
        </h2>
        <p className="text-gray-500">
          Dining, living, and desk areas serve their purposes
          <br />
          in total harmony of style.
        </p>
      </div>

      {/* Sellers Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-12">
        {sellers.map((seller, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 text-center relative group cursor-pointer transition-all ${
              seller.featured
                ? "bg-primary text-white"
                : "bg-gray-50 hover:bg-gray-100"
            }`}
          >
            <div className="text-5xl mb-4">{seller.logo}</div>
            <h4
              className={`font-bold mb-2 ${
                seller.featured ? "text-white" : "text-gray-900"
              }`}
            >
              {seller.name}
            </h4>
            <div
              className={`flex items-center justify-center gap-1 mb-3 ${
                seller.featured ? "text-yellow-300" : "text-yellow-400"
              }`}
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(seller.rating) ? "fill-current" : ""
                  }`}
                />
              ))}
              <span
                className={`text-xs ml-1 ${
                  seller.featured ? "text-white" : "text-gray-600"
                }`}
              >
                ({seller.reviews} Review)
              </span>
            </div>
            <button
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors mx-auto ${
                seller.featured
                  ? "bg-orange-500 hover:bg-orange-600 text-white"
                  : "bg-white hover:bg-primary hover:text-white"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        ))}

        {/* Explore More Card */}
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-100 transition-colors">
          <div className="w-12 h-12 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4">
            <span className="text-2xl text-gray-400">+</span>
          </div>
          <span className="font-bold text-gray-900">Explore More</span>
        </div>
      </div>
    </section>
  );
}
