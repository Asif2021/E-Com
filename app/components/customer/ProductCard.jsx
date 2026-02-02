import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../../Context/CartContext";
import {  ShoppingCart, X, } from "lucide-react";
import { toast } from 'react-hot-toast';
import React from "react";

const ProductCard = ({product}) => {
  const { state, dispatch } = useCart();

 
  // dispatch product to cart
  const handleDispatchProduct = () => {
    if (product.stock > 0) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      toast.success('Product Added to Cart!');
    } else {
      toast.error('Product is out of stock!');
    }
  }
    
    
// Find the product in the cart to get the updated stock
const cartItem = state.items.find(item => item.id === product.id);

// If product is in the cart, use its stock from the context, otherwise use productData stock
const stock = cartItem ? cartItem.stock : product.stock;
      

   return (
    <div className="w-full bg-white border border-gray-200 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg">
      <Link href={`/product/${product?.id}`}>
        <Image
          className="rounded-t-lg w-full h-48"
          src={product?.image}
          width={500}
          height={500}
          alt="product image"
        />
      </Link>

      <div className="px-5 pb-5">
        <h5 className="text-base md:text-xl mt-2 truncate font-semibold tracking-tight text-gray-900 dark:text-white">
          {product?.title}
        </h5>
        <p className="truncate text-sm md:text-base my-3">
          {product?.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
           $ {product?.price}
          </span>

          {/* Desktop view */}
          <button
            onClick={handleDispatchProduct}
            disabled={stock === 0}
            className={`hidden md:block text-white ${stock === 0 ? "bg-red-500 hover:bg-red-700" : "bg-blue-500 hover:bg-blue-700"} focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
          >
             {stock === 0 ? "Out of Stock" : "Add to Cart"}
          </button> 

          {/* Mobile view */}
          <button 
          onClick={handleDispatchProduct}
          disabled={stock === 0}
          className={`block md:hidden ${stock === 0 ? "bg-red-700" : "bg-blue-500 hover:bg-blue-700"} text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
          {stock === 0 ? <X/> : <ShoppingCart  />}
          </button>
          
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
