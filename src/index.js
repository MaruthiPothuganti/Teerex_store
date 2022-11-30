import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ProductContext, FilterContext } from "./Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ProductContext>
        <FilterContext>
          <App />
        </FilterContext>
      </ProductContext>
    </BrowserRouter>
  </React.StrictMode>
);
