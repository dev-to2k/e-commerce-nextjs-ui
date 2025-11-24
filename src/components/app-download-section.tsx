import { Apple, Smartphone } from "lucide-react";

export function AppDownloadSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="bg-primary rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="z-10 max-w-lg">
          <h2 className="text-3xl font-bold text-white mb-4">
            NexCart User Friendly
            <br />
            App Available
          </h2>
          <p className="text-primary-light text-sm mb-8">
            Appropriately monetize one-to-one interfaces rather than
            cutting-edge. Competently disintermediate backward.
          </p>
          <div className="flex gap-4">
            <button className="bg-secondary hover:opacity-90 text-white px-6 py-3 rounded-lg flex items-center gap-3 transition-colors">
              <Smartphone className="w-6 h-6" />
              <span className="text-left">
                <span className="block text-[10px]">Get it on</span>
                <span className="block text-sm font-bold">Google Play</span>
              </span>
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-900 px-6 py-3 rounded-lg flex items-center gap-3 transition-colors">
              <Apple className="w-6 h-6" />
              <span className="text-left">
                <span className="block text-[10px]">Download on the</span>
                <span className="block text-sm font-bold">App Store</span>
              </span>
            </button>
          </div>
        </div>
        {/* Phone Mockup Placeholder */}
        <div className="hidden md:block w-1/3 h-64 bg-primary/50 rounded-lg relative mt-8 md:mt-0">
          {/* In a real app, use actual phone images here */}
          <div className="absolute inset-4 bg-gray-900 rounded-4xl border-4 border-gray-800"></div>
        </div>
      </div>
    </section>
  );
}
