"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const pathname = usePathname();

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  const isLinkActive = (href) => pathname === href;

  return (
    <nav className="bg-white shadow-lg mb-5 uppercase">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between">
            {/* Logo displaying in both Mobile and Desktop  */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Logo
              </Link>
            </div>

            {/* Search Bar showing on top in mobile view and hidden in Desktop */}
            <div className="relative flex md:hidden mx-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {/* shopping cart in mobile view  */}
            <div className="relative cursor-pointer md:hidden mx-2">
              <ShoppingCart />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">10</div>
              </div>

            {/* Desktop View  */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className={clsx(
                    "text-gray-800 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium",
                    isLinkActive("/")
                      ? "text-blue-500 font-extrabold"
                      : "text-gray-800 hover:text-gray-900"
                  )}
                >
                  Home
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link
                    href="/categories"
                    className={clsx(
                      "text-gray-800 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center",
                      isLinkActive("/categories")
                        ? "text-blue-500 font-extrabold"
                        : "text-gray-800 hover:text-gray-900"
                    )}
                  >
                    Catagories
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  {isProductsOpen && (
                    <div
                    onMouseEnter={() => setIsProductsOpen(true)}
                    onMouseLeave={() => setIsProductsOpen(false)}
                      className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    >
                      <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                      >
                        <Link
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Shoes
                        </Link>
                        <Link
                          href="/"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          role="menuitem"
                        >
                          Cloths
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative mr-2">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
              <div className="relative cursor-pointer">
              <ShoppingCart />
              <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">10</div>
              </div>
              <button className="ml-4">LogIn</button>
              <button className="ml-4">SignUp</button>
            </div>
          </div>

          {/* Mobile View  */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className={clsx(
                "text-gray-600 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium",
                isLinkActive("/")
                  ? "text-blue-500 font-extrabold"
                  : "text-gray-800 hover:text-gray-900"
              )}
            >
              Home
            </Link>
            <div>
              <button
                onClick={toggleProducts}
                className={clsx(
                  "text-gray-800 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center",
                  isLinkActive("/caegories")
                    ? "text-blue-500 font-extrabold"
                    : "text-gray-800 hover:text-gray-900"
                )}>
                Catagories
                <ChevronDown
                  className={`h-4 w-4 transform ${
                    isProductsOpen ? "rotate-180" : ""
                  } transition-transform duration-200`}
                />
              </button>
              {isProductsOpen && (
                <div className="pl-4">
                  <Link
                    href="/products/software"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Software
                  </Link>
                  <Link
                    href="/products/hardware"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Hardware
                  </Link>
                  <Link
                    href="/products/services"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Services
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="px-2 pt-2 pb-3 sm:px-3">
            <div className="px-2">
              <button>LogIn</button>
            </div>
            <div className="px-2 pt-2">
              <button>SignUp</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
