"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Search, ShoppingCart, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import LogoutModal from "./customer/LogoutModal";
import { useCart } from "../../Context/CartContext";
import RightNav from "./customer/RightNav";
import MenuLinks from './customer/MenuLinks'
import React from "react";


export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [username, setUsername] = useState();
  const [rightNavOpen, setRightNavOpen] = useState(false);
  const pathname = usePathname();
  const { state } = useCart();

  // get the total quantity to show on Cart icon in 
  const totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);

  // Fetch auth status from the API
  useEffect(() => {
    const fetchAuthStatus = async () => {
      const res = await fetch("/api/auth/status");
      const data = await res.json();
      setIsLoggedIn(data.isLoggedIn);
      setUsername(data.username);
    };
    fetchAuthStatus();
  }, []);

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <nav className={pathname == "/login" || pathname == "/signUp" ? "hidden" : "block bg-white shadow-lg uppercase"}>
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

            {/* Desktop View  */}
            <div className="hidden md:block">
              {/* <MenuLinks/> */}
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
              <div className="relative cursor-pointer" onClick={() => setRightNavOpen(!rightNavOpen)}>
                <ShoppingCart />
                <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
                  {totalQuantity}
                </div>
              </div>
              {rightNavOpen && (
                <RightNav
                  rightNavOpen={rightNavOpen}
                  setRightNavOpen={setRightNavOpen}
                />
              )}

              {/* if user is loggedIn then display username in desktop else displaying Links of Login and SignUp */}
              {isLoggedIn ? (
                <div
                  className="relative"
                  onClick={() => setIsProfileOpen(true)}
                >
                  <button className="ml-4 uppercase">{username}</button>
                  {isProfileOpen && (
                    <div
                      onMouseLeave={() => setIsProfileOpen(false)}
                      className="absolute right-0 px-2 py-2 w-24 text-sm text-gray-700 bg-gray-100 hover:bg-gray-400 rounded-md font-medium items-center text-center"
                    >
                      <LogoutModal setIsProfileOpen={setIsProfileOpen} isProductsOpen={isProductsOpen} />
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <Link href="/login" className="ml-4 uppercase">
                    LogIn
                  </Link>
                  <Link href="/signUp" className="ml-4 uppercase">
                    SignUp
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile View  */}
          {/* shopping cart in mobile view  */}
          <div
            className="relative cursor-pointer md:hidden mx-2"
            onClick={() => setRightNavOpen(!rightNavOpen)}>
            <ShoppingCart />
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
              {totalQuantity}
            </div>
          </div>
          {rightNavOpen && (
            <RightNav
              rightNavOpen={rightNavOpen}
              setRightNavOpen={setRightNavOpen}
            />
          )}
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
          <div className="block md:hidden">
            <MenuLinks />
          </div>
          {/* if user is loggedIn then display username in Mobile View else displaying Links of Login and SignUp */}
          {isLoggedIn ? (
            <div className="relative" onClick={() => setIsProfileOpen(true)}>
              <button className="ml-4 uppercase">{username}</button>
              {isProfileOpen && (
                <div
                  onMouseLeave={() => setIsProfileOpen(false)}
                  className="absolute left-0 px-2 py-2 w-24 text-sm text-gray-700 bg-gray-100 hover:bg-gray-400 rounded-md font-medium items-center text-center"
                >
                  <LogoutModal
                    setIsProfileOpen={setIsProfileOpen}
                    isProductsOpen={false}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="px-2 pt-2 pb-3 sm:px-3">
              <div className="px-2">
                <Link href="/login" className="uppercase">
                  LogIn
                </Link>
              </div>
              <div className="px-2 pt-2">
                <Link href="/signUp" className="uppercase">
                  SignUp
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}