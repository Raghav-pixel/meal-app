"use client";

import { createContext, useContext, useEffect, useReducer } from 'react';
import data from '../../data';
import { cartReducer } from '@/app/app/reducers/cartReducer';

const Cart = createContext();

const Context = ({ children }) => {

    const [ state, dispatch ] = useReducer(cartReducer, {
        meals: data,
        cart: [],
        totalAmount: 0
    })

  return (
    <Cart.Provider value={{ state, dispatch }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}