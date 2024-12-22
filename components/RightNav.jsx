"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../Context/CartContext";
import ProductSummery from "../components/ProductSummery";

export default function RightDrawer({ rightNavOpen, setRightNavOpen }) {
  const { state, dispatch } = useCart();

  return (
    <>
      {/* drawer component */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen p-4 overflow-y-auto transform transition-transform duration-900 ease-in-out ${
          rightNavOpen ? "translate-x-0" : "translate-x-full"
        } bg-white w-full md:w-2/4 dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label"
      >
        <h5
          id="drawer-right-label"
          className="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
        >
          <ShoppingCart />
          Your Cart
        </h5>
        <button
          type="button"
          onClick={() => setRightNavOpen(!rightNavOpen)}
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white"
        >
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
            />
          </svg>
          <span className="sr-only">Close menu</span>
        </button>
        <div className="mt-8 border-t pt-8">
          <ProductSummery />
        </div>
      </div>
    </>
  );
}
