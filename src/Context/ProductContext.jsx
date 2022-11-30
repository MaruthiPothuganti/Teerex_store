import React, { createContext, useReducer } from "react";
import { productReducer } from "../Reducers/ProductReducer";

export const ProductStateContext = createContext();

export const ProductContext = ({ children }) => {
  const initialState = {
    products: [],
    cart: [],
  };
  const [productState, productDispatch] = useReducer(
    productReducer,
    initialState
  );

  return (
    <ProductStateContext.Provider value={{ productState, productDispatch }}>
      {children}
    </ProductStateContext.Provider>
  );
};
