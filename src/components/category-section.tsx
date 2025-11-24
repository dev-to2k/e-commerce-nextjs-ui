import { categories } from "@/lib/data";
import { Activity, Gamepad2, Home, Shirt, Smartphone } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Smartphone: Smartphone,
  Shirt: Shirt,
  Home: Home,
  Activity: Activity,
  Gamepad2: Gamepad2,
};

export function CategorySection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900">
          Shop Deals by Category
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Dining, living, and desk areas serve their purposes in total harmony
          of style.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {categories.map((category) => {
          const Icon = iconMap[category.icon];
          return (
            <div
              key={category.name}
              className="flex flex-col items-center gap-3 group cursor-pointer"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-orange-100 transition-colors border border-transparent group-hover:border-orange-200">
                {Icon && (
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-600 group-hover:text-orange-500 transition-colors" />
                )}
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover:text-orange-500 transition-colors">
                {category.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
