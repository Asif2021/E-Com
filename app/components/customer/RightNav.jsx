"use client";

import React from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "../../../Context/CartContext";
import ProductSummery from "./ProductSummery";
import { type } from "os";

export default function RightDrawer({ rightNavOpen, setRightNavOpen }) {
  const { state, dispatch } = useCart();

function handleClearCart() {
  dispatch({type:"CLEAR_CART"})
setRightNavOpen(!rightNavOpen)
}

  return (
    <>
      {/* drawer component */}
      <div
        className={`fixed top-0 right-0 z-40 h-screen  overflow-y-auto transform transition-transform duration-900 all ease-in-out ${
          rightNavOpen ? "translate-x-0" : "translate-x-full"
        } bg-white w-full md:w-2/4 dark:bg-gray-800`}
        tabIndex={-1}
        aria-labelledby="drawer-right-label">
          
        <h5
          id="drawer-right-label"
          className="inline-flex items-center text-base font-semibold text-gray-500 dark:text-gray-400 m-4">
          <ShoppingCart />
       <span className="ml-2">Your Cart</span>
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
        
        {state.items.length == 0 ? (
        <div className="text-2xl font-bold text-center">Your cart is empty</div>
      ) : (<>
        <div className="mt-8 border-t pt-4">
        <ProductSummery />
      </div>
      <div className="sticky bottom-0 w-full">
          <button className="w-1/2 bg-red-500 hover:bg-red-700 text-white p-3" onClick={handleClearCart}>Clear Cart</button>
          <button className="w-1/2 bg-green-500 p-3 hover:bg-green-700 text-white">CheckOut</button>
      </div>
        </>
      )}
       
      </div>
    </>
  );
}
