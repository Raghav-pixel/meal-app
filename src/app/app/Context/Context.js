"use client";

import { createContext, useContext, useEffect, useReducer, useState } from 'react';
import data from '../../data';
import axios from 'axios';
import { cartReducer } from '@/app/app/reducers/cartReducer';

const Cart = createContext();

const Context = ({ children }) => {

  const [ categoryData, setCategoryData ] = useState([]);

  // useEffect(() => {
  //   axios.get('https://api.spoonacular.com/recipes/complexSearch?type=dessert&apiKey=64f62f7b598341dfb2b5edefec0816b9')
  //     .then((data) => {
  //       console.log(data, '[category][res]');
  //       setCategoryData(data.data.results);
  //     })
  // }, []);

    const [ state, dispatch ] = useReducer(cartReducer, {
        meals: data,
        cart: [],
        totalAmount: 0
    })

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