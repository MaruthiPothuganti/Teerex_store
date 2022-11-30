import React, { createContext, useReducer } from "react";
import { filterReducer } from "../Reducers/FilterReducer";

export const FilterStateContext = createContext();

export const filterInitialState = {
  colors: [],
  genders: [],
  types: [],
  price: { min: "", max: "" },
};

export const FilterContext = ({ children }) => {
  const [filterState, filterDispatch] = useReducer(
    filterReducer,
    filterInitialState
  );

  return (
    <FilterStateContext.Provider value={{ filterState, filterDispatch }}>
      {children}
    </FilterStateContext.Provider>
  );
};
