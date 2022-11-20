import React, { createContext, useReducer } from "react";

const StateContext = createContext();

export const ProductContext = ({ children }) => {
  const initialState = {
    products: [],
    cart: [],
  };
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

  return <StateContext.Provider>{children}</StateContext.Provider>;
};
