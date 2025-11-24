"use client";

import { useState } from "react";
import AnimatedContent from "./animated-content";

interface ProductTabsProps {
  description: string;
  reviews: number;
}

export function ProductTabs({ description, reviews }: ProductTabsProps) {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "additional", label: "Additional Info" },
    { id: "reviews", label: `Reviews (${reviews})` },
  ];

  return (
    <AnimatedContent
      distance={20}
      direction="vertical"
      duration={0.5}
      delay={0.4}
      className="w-full mt-16"
    >
      <div className="flex flex-col gap-8">
        {/* Tab Headers */}
        <div className="flex justify-center border-b border-gray-200">
          <div className="flex gap-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-4 px-2 font-bold text-lg transition-all relative ${
                  activeTab === tab.id
                    ? "text-primary"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="py-8 text-gray-600 leading-relaxed max-w-4xl mx-auto">
          {activeTab === "description" && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <p>{description}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <ul className="list-disc pl-5 space-y-2 mt-4">
                <li>High-quality materials for durability</li>
                <li>Ergonomic design for maximum comfort</li>
                <li>Modern aesthetic that fits any style</li>
                <li>Easy to clean and maintain</li>
              </ul>
            </div>
          )}

          {activeTab === "additional" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <table className="w-full text-sm text-left">
                <tbody className="divide-y divide-gray-100">
                  <tr className="flex py-3">
                    <th className="w-1/4 font-medium text-gray-900">Weight</th>
                    <td className="w-3/4">1.2 kg</td>
                  </tr>
                  <tr className="flex py-3">
                    <th className="w-1/4 font-medium text-gray-900">
                      Dimensions
                    </th>
                    <td className="w-3/4">40 x 30 x 10 cm</td>
                  </tr>
                  <tr className="flex py-3">
                    <th className="w-1/4 font-medium text-gray-900">
                      Materials
                    </th>
                    <td className="w-3/4">Premium synthetic, Aluminum</td>
                  </tr>
                  <tr className="flex py-3">
                    <th className="w-1/4 font-medium text-gray-900">
                      Warranty
                    </th>
                    <td className="w-3/4">2 Years Manufacturer Warranty</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b border-gray-100 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center font-bold text-gray-500">
                        U{review}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">User Name</h4>
                        <span className="text-xs text-gray-400">
                          2 days ago
                        </span>
                      </div>
                    </div>
                    <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  </div>
                  <p className="text-gray-600">
                    Great product! Exactly as described. The quality is amazing
                    and shipping was fast. Highly recommended!
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </AnimatedContent>
  );
}
