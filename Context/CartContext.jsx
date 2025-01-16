"use client"

import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [], 
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        item => item.id === action.payload.id
      )
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 } : item
          ),
        }
      } else {
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
         }
      }

    
    case "INCREASE_FROM_CART":
    return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
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
              ? { ...item, quantity: item.quantity - 1 }
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
