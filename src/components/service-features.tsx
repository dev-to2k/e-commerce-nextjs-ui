import { Headphones, Shield, Truck } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Money Back Guarantee",
    description:
      "Enjoy a hassle-free shopping experience with Our Money Back Guarantee—shop with confidence knowing we've got you covered!",
    color: "bg-blue-50",
    iconColor: "text-blue-500",
  },
  {
    icon: Headphones,
    title: "24/7 Customer Service",
    description:
      "Our 24/7 Customer Service ensures you're never alone—reach out anytime, day or night, for prompt assistance!",
    color: "bg-primary",
    iconColor: "text-white",
    textColor: "text-white",
  },
  {
    icon: Truck,
    title: "Fast & Free Shipping",
    description:
      "Enjoy a hassle-free shipping experience with Our Money Back Guarantee—shop with confidence knowing we've got you covered!",
    color: "bg-orange-50",
    iconColor: "text-secondary",
  },
];

export function ServiceFeatures() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`${feature.color} rounded-2xl p-8 relative overflow-hidden`}
          >
            <div
              className={`w-16 h-16 rounded-full ${
                feature.color === "bg-primary" ? "bg-white/20" : "bg-white"
              } flex items-center justify-center mb-6`}
            >
              <feature.icon className={`w-8 h-8 ${feature.iconColor}`} />
            </div>
            <h3
              className={`text-xl font-bold mb-3 ${
                feature.textColor || "text-gray-900"
              }`}
            >
              {feature.title}
            </h3>
            <p
              className={`text-sm mb-4 ${
                feature.textColor ? "text-white/80" : "text-gray-600"
              }`}
            >
              {feature.description}
            </p>
            <button
              className={`text-sm font-medium flex items-center gap-1 ${
                feature.textColor ? "text-yellow-300" : "text-primary"
              }`}
            >
              Explore More →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
