import { Trash2 } from "lucide-react";
import { useCart } from "../../../Context/CartContext";
import Image from "next/image";
import { toast } from 'react-hot-toast';
import React from 'react'


const ProductSummery = () => {
  const { state, dispatch, } = useCart();
  
  // for counting grandTotal of the cart
  const grandTotal = state.items.reduce((acc, item) => acc + item.price * item.quantity, 0);


  // Delete from cart
  const handleDeleteCart = (id) => {
    dispatch({ type:"DELETE_FROM_CART", payload: id });
    toast.error('Product Removed from Cart!');}



  return (
         <div className="relative overflow-x-auto shadow-md sm:rounded-lg px-3">
          <h2 className="text-2xl font-bold mb-4">Cart Summary</h2>
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-16 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {state.items.map((item, index) => {
                const stock = item.stock
               return (
                <tr key={item.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="p-4">
                    <Image
                      src={item.image}
                      className="w-16 md:w-32 h-20 contain-size rounded-xl"
                      alt="Apple Watch"
                      width={200}
                      height={150}
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.title}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <button
                        className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-white bg-red-500 hover:bg-red-700 border border-gray-300 rounded-full focus:outline-none"
                        type="button"
                        onClick={()=>dispatch({type:"DECREASE_FROM_CART", payload:item.id})}>-</button>
                    
                      {item.quantity}

                      <button
                        className="inline-flex items-center justify-center h-6 w-6 p-1 ms-3 text-sm font-medium text-white bg-green-500 hover:bg-green-700 border border-gray-300 rounded-full"
                        type="button"
                        disabled={stock === 0}
                        onClick={()=>dispatch({type:"INCREASE_FROM_CART", payload:item.id})}>+</button>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                    {item.price * item.quantity}
                    <div className="normal-case text-gray-500 text-base">${item.price}/perItem</div>
                  </td>
                  <td className="px-6 py-4">
                    <button
                        className="font-medium text-red-500 hover:text-red-700"
                       onClick={() => handleDeleteCart(item.id)}
                    >
                      <Trash2 />
                    </button>
                  </td>
                </tr>)
                      })}
            </tbody>
          </table>
                    <div className="text-center font-bold text-2xl my-4">Grand Total = {grandTotal}</div>  
          </div>
  );
};
export default ProductSummery;
