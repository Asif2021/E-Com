"use client"

import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext(undefined);

const initialState = {
  items: [], 
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      );

      if (existingItem) {
        // Update quantity and reduce stock
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { 
                  ...item, 
                  quantity: item.quantity + 1, 
                  stock: item.stock > 0 ? item.stock - 1 : item.stock // Ensure stock is never negative
                }
              : item
          ),
        };
      } else {
        // Add new item to cart and reduce its stock
        return {
          ...state,
          items: [
            ...state.items, 
            { 
              ...action.payload, 
              quantity: 1, 
              stock: action.payload.stock > 0 ? action.payload.stock - 1 : action.payload.stock // Reduce stock when adding new item
            }
          ],
        };
      }
 
     
    case "INCREASE_FROM_CART":
    return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1, 
              stock: item.stock > 0 ? item.stock - 1 : 0, // Reduce stock, ensuring it doesn’t go below 0
            }
            : item
        )
    }

    case "DECREASE_FROM_CART":
        const itemToRemove = state.items.find(item => item.id === action.payload);
        if (!itemToRemove || itemToRemove.quantity === 1) return state;
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1, 
                stock:  item.stock + 1 
               }
              : item
          )
        };

    case "DELETE_FROM_CART":
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
        };

    case "CLEAR_CART":
        return{
          items:[]
        }
        
    default:
      return state
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)
 
  return (
    <CartContext.Provider value={{ state, dispatch}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  return context
}
