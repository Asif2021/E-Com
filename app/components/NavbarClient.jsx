"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Menu, X } from "lucide-react";
import { useCart } from "@/Context/CartContext";
import RightNav from "./customer/RightNav";
import LogoutModal from "./customer/LogoutModal";

export default function NavbarClient({ isLoggedIn, username }) {
  const { state } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [rightNavOpen, setRightNavOpen] = useState(false);

  const totalQuantity = state.items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="flex items-center gap-4">
      {/* Cart */}
      <div
        className="relative cursor-pointer"
        onClick={() => setRightNavOpen(!rightNavOpen)}
      >
        <ShoppingCart />
        {totalQuantity > 0 && (
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2">
            {totalQuantity}
          </div>
        )}
      </div>
      {rightNavOpen && (
        <RightNav rightNavOpen={rightNavOpen} setRightNavOpen={setRightNavOpen} />
      )}

      {/* Auth state */}
      {isLoggedIn ? (
        <div
          className="relative"
          onClick={() => setIsProfileOpen(!isProfileOpen)}
        >
          <button className="ml-4 uppercase">{username}</button>
          {isProfileOpen && (
            <div className="absolute right-0 px-2 py-2 w-24 bg-gray-100 rounded-md">
              <LogoutModal setIsProfileOpen={setIsProfileOpen} />
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

      {/* Mobile menu toggle */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="md:hidden p-2"
      >
        {isMenuOpen ? <X /> : <Menu />}
      </button>
    </div>
  );
}
