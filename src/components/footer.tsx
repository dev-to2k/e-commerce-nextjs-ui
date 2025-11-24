import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-teal-950 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Nex<span className="text-secondary">C</span>art
            </h3>
            <p className="text-primary-light text-sm mb-6 max-w-xs">
              We have expertise in building scalable, high performance
              e-commerce application.
            </p>

            <div className="mb-6">
              <h4 className="text-white font-bold mb-4">
                We Are Ready to help
              </h4>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full px-4 py-3 pr-28 rounded-lg text-sm bg-white/10 text-white placeholder:text-white/60 border border-white/20 focus:outline-none focus:border-secondary"
                />
                <button className="absolute right-1 top-1 bottom-1 bg-secondary hover:opacity-90 text-white px-6 rounded-lg font-medium text-sm transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4">Social Media</h4>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-sky-500 hover:bg-sky-600 flex items-center justify-center text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-pink-600 hover:bg-pink-700 flex items-center justify-center text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 flex items-center justify-center text-white transition-colors">
                  <span className="font-bold text-sm">Be</span>
                </button>
              </div>
            </div>
          </div>

          {/* Information Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Information</h4>
            <ul className="space-y-3 text-sm text-primary-light">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Become seller
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Vendor profile
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-bold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-primary-light">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Your Account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Return Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Purchase History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Latest News Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Advertise your products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Sell product
                </a>
              </li>
            </ul>
          </div>

          {/* My Accounts Column */}
          <div>
            <h4 className="font-bold text-white mb-6">My Accounts</h4>
            <ul className="space-y-3 text-sm text-primary-light">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  My account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Shopping Cart
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  International Orders
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Your account
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Your orders
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-light">
            © Copyright 2023. All rights reserved.{" "}
            <span className="text-secondary">Themetags</span>
          </p>
          <div className="flex gap-3">
            {/* Payment Icons */}
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-800 font-bold text-xs">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-red-600 font-bold text-xs">MC</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">Dis</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-900 font-bold text-xs">PP</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
