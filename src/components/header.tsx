"use client";

import { useDebounce } from "@/hooks/use-debounce";
import { categories, navLinks, products } from "@/lib/data";
import {
  ChevronDown,
  Flame,
  Heart,
  Menu,
  Search,
  ShoppingBag,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showCategories, setShowCategories] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef<HTMLDivElement>(null);
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Derived states - computed directly instead of using effects
  const isSearching = searchQuery && searchQuery !== debouncedSearch;
  const showSearchDropdown = !!searchQuery;

  // Handle search submit on Enter key press
  const handleSearchSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      router.push(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  };

  // Search results based on debounced query
  const searchResults = debouncedSearch
    ? products
        .filter((product) =>
          product.name.toLowerCase().includes(debouncedSearch.toLowerCase())
        )
        .slice(0, 6)
    : [];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchQuery("");
      }
      setOpenDropdown(null);
      setShowCategories(false);
    };
    if (openDropdown || showCategories || showSearchDropdown) {
      document.addEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [openDropdown, showCategories, showSearchDropdown]);

  const toggleDropdown = (
    linkName: string,
    hasDropdown: boolean,
    e: React.MouseEvent
  ) => {
    e.stopPropagation();
    e.preventDefault();
    if (hasDropdown) {
      setOpenDropdown(openDropdown === linkName ? null : linkName);
    }
  };

  const toggleCategories = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowCategories(!showCategories);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="container mx-auto px-4 py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
            P
          </div>
          <span className="text-xl font-bold text-gray-900">PioMart</span>
        </Link>

        {/* Search Bar */}
        <div
          ref={searchRef}
          className="hidden md:flex flex-1 max-w-xl relative"
        >
          <input
            type="text"
            placeholder="Search in Product"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchSubmit}
            className="w-full pl-4 pr-12 py-2.5 bg-gray-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/20"
          />
          <button className="absolute right-1 top-1 bottom-1 bg-secondary/80 hover:bg-secondary text-white px-6 rounded-full text-sm font-medium transition-colors">
            <Search className="w-4 h-4" />
          </button>

          {/* Search Dropdown */}
          {showSearchDropdown && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 max-h-96 overflow-y-auto z-50">
              {isSearching ? (
                // Loading skeleton
                <div className="p-2">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className="flex gap-3 p-3 animate-pulse">
                      <div className="w-16 h-16 bg-gray-300 rounded" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 bg-gray-300 rounded w-3/4" />
                        <div className="h-3 bg-gray-300 rounded w-1/2" />
                      </div>
                    </div>
                  ))}
                </div>
              ) : searchResults.length > 0 ? (
                // Search results
                <div className="p-2">
                  {searchResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/products/${product.id}`}
                      onClick={() => {
                        setSearchQuery("");
                      }}
                      className="flex gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {product.category}
                        </p>
                        <p className="text-sm font-bold text-primary mt-1">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                // No results
                <div className="p-6 text-center text-sm text-gray-500">
                  No products found for &ldquo;{searchQuery}&rdquo;
                </div>
              )}
            </div>
          )}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-secondary transition-colors">
            <Heart className="w-6 h-6" />
          </button>
          <button className="text-gray-600 hover:text-secondary transition-colors relative">
            <ShoppingBag className="w-6 h-6" />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full">
              0
            </span>
          </button>
          <button className="flex items-center gap-2 text-gray-600 hover:text-secondary transition-colors">
            <User className="w-6 h-6" />
            <div className="hidden lg:flex flex-col items-start text-xs">
              <span className="text-gray-400">Hello</span>
              <Link href="/login" className="font-medium">
                Login/Sign Up
              </Link>
            </div>
          </button>
        </div>
      </div>

      {/* Navigation */}
      <div className="border-t border-gray-100">
        <div className="container mx-auto p-4">
          <div className="flex items-center justify-between h-12">
            {/* Browse Categories Button with Dropdown */}
            <div className="relative">
              <button
                onClick={toggleCategories}
                className="flex items-center text-sm gap-2 text-teal-800 font-bold bg-primary/10 px-6 py-2.5 rounded-full transition-colors"
              >
                <Menu className="w-5 h-5" />
                Browse Categories
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform ${
                    showCategories ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Categories Dropdown */}
              {showCategories && (
                <div
                  className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[220px] z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={`/shop/${category.name
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                    >
                      <span className="text-lg">
                        {category.icon === "Smartphone"
                          ? "📱"
                          : category.icon === "Shirt"
                          ? "👕"
                          : category.icon === "Home"
                          ? "🏠"
                          : category.icon === "Activity"
                          ? "⚽"
                          : "🎮"}
                      </span>
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.name} className="relative">
                  {link.hasDropdown ? (
                    <button
                      onClick={(e) =>
                        toggleDropdown(link.name, link.hasDropdown, e)
                      }
                      className={`text-sm cursor-pointer font-bold flex items-center gap-1 transition-colors ${
                        link.name === "Special Offer"
                          ? "text-secondary bg-secondary/10 px-6 py-2.5 rounded-full"
                          : openDropdown === link.name
                          ? "text-gray-700 bg-gray-100 px-6 py-2.5 rounded-full"
                          : "text-gray-700 hover:text-secondary"
                      }`}
                    >
                      {link.name === "Special Offer" && (
                        <Flame className="w-4 h-4 fill-current" />
                      )}
                      {link.name}
                      {link.hasDropdown && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-gray-400 transition-transform ${
                            openDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className={`text-sm font-bold flex items-center gap-1 transition-colors ${
                        link.name === "Special Offer"
                          ? "text-secondary bg-secondary/10 px-6 py-2.5 rounded-full"
                          : "text-gray-700 hover:text-secondary"
                      }`}
                      onClick={() => setOpenDropdown(null)}
                    >
                      {link.name === "Special Offer" && (
                        <Flame className="w-4 h-4 fill-current" />
                      )}
                      {link.name}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {link.hasDropdown && openDropdown === link.name && (
                    <div
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-100 py-2 min-w-[200px] z-50"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {"dropdownItems" in link &&
                        link.dropdownItems?.map((item) => (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-secondary transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
            <div className="w-24"></div> {/* Spacer for balance */}
          </div>
        </div>
      </div>
    </header>
  );
}
