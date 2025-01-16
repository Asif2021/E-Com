import Link from "next/link";
import Image from "next/image";
import { useCart } from "../../../Context/CartContext";
import {  ShoppingCart, Trash } from "lucide-react";
import { toast } from 'react-hot-toast';


const ProductCard = ({product}) => {
  const { state, dispatch } = useCart();

  
  // dispatch product to cart
  const handleDispatchProduct = ()=>{
    dispatch({ type: 'ADD_TO_CART', payload: product });
    toast.success('Product Added to Cart!');}
    
    // check if product is in cart...
    const isProductInCart = state.items.some(item => item.id === product.id);
    
    // remove product from cart
    const handleRemoveProduct = ()=>{
      dispatch({type:"DELETE_FROM_CART", payload:product.id});
      toast.error('Product Removed from Cart!')}
      

   return (
    <div className="max-w-xs h-[20rem] bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:shadow-lg">
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

        {/* <div className="flex items-center mt-2.5 mb-5">
        <div className="flex items-center space-x-1 rtl:space-x-reverse">
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-yellow-300"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          <svg
            className="w-4 h-4 text-gray-200 dark:text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        </div>
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
          5.0
        </span>
      </div> */}

        <p className="truncate text-sm md:text-base my-3">
          {product?.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg md:text-2xl font-bold text-gray-900 dark:text-white">
           $ {product?.price}
          </span>

          {/* Desktop view */}
          {/* if product is not in the cart then show add-to-cart button else show remove-from-cart button */}
          {!isProductInCart ? <button
            onClick={handleDispatchProduct}
            className="hidden md:block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to cart
          </button> : <button
            onClick={handleRemoveProduct}
            className="hidden md:block text-red-700 border border-red-300 hover:bg-red-200 font-medium rounded-lg text-sm px-3 py-2 text-center"
          >
            Remove from Cart
          </button> }

          {/* Mobile view */}
          {/* if product is not in the cart then show add-to-cart button else show remove-from-cart button */}
         {
          !isProductInCart ? <button 
          onClick={handleDispatchProduct}
          className="block md:hidden text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          <ShoppingCart />
          </button> : 
          <button 
          onClick={handleRemoveProduct}
          className="block md:hidden text-red-700 border border-red-700 hover:bg-red-200 font-medium rounded-lg text-sm px-3 py-2 text-center">
          <Trash />
          </button>
         }
          
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
