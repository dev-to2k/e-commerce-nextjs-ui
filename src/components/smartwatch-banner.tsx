import Image from "next/image";

export function SmartwatchBanner() {
  return (
    <section className="container mx-auto px-4 py-6">
      <div className="bg-gradient-to-r from-teal-400 to-teal-300 rounded-2xl p-12 flex items-center justify-between relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-20 w-32 h-32 border-2 border-white rounded-full"></div>
          <div className="absolute bottom-10 right-40 w-24 h-24 border-2 border-white rounded-full"></div>
        </div>

        <div className="relative z-10 w-1/2 flex gap-8">
          <div className="w-48 h-48 relative">
            <Image
              src="https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop"
              alt="Smartwatch 1"
              fill
              className="object-contain"
            />
          </div>
          <div className="w-48 h-48 relative">
            <Image
              src="https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&h=400&fit=crop"
              alt="Smartwatch 2"
              fill
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative z-10 text-right">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            AMAZFIT
            <br />
            SMARTWATCH
          </h2>
          <p className="text-gray-700 mb-6">
            UPGRADE YOUR WELLBEING
            <br />
            WITH A FEATURE-PACKED SMARTWATCH
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-900 font-bold px-8 py-3 rounded-full transition-colors border-2 border-gray-900">
            SHOP NOW
          </button>
        </div>
      </div>
    </section>
  );
}
