"use client";

import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import data from '../../data';
import axios from 'axios';
import { cartReducer } from '@/app/app/reducers/cartReducer';
import { favouriteReducer } from '../reducers/favouriteReducer';

const Cart = createContext();

const Context = ({ children }) => {

  function combineReducers(reducers) {  
    return (state = {}, action) => {
      const newState = {};
      for (let key in reducers) {
        newState[key] = reducers[key](state[key], action);
      }
      return newState;
    }
  }

  const [ state, dispatch ] = useReducer(combineReducers({
    cart: cartReducer,
    favourite: favouriteReducer
  }), {
      meals: data,
      cart: [],
      favourite: [],
      totalAmount: 0
  });

  return (
    <Cart.Provider value={{ state, dispatch, data }}>
      {children}
    </Cart.Provider>
  );
}

export default Context;

export const CartState = () => {
    return useContext(Cart);
}