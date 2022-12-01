import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductStateContext } from "../Context/ProductContext";
import { ACTION_TYPES } from "../utils/helpers";
import { checkProdInCart } from "../utils/helpers";

export const ProductCard = ({ product }) => {
  const { productState, productDispatch } = useContext(ProductStateContext);
  const { ADDTOCART } = ACTION_TYPES;

  return (
    <div className="bg-slate-300 rounded-lg max-w-[15rem]">
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-full h-[4/6] p-2 rounded-2xl"
      />
      <div className="p-2 flex flex-col gap-4">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm">RS. {product.price}</p>

        {checkProdInCart(productState.cart, product) ? (
          <button className="rounded-md border border-gray-300 bg-slate-400 py-2 px-3 text-sm font-medium leading-4 text-white shadow-sm hover:bg-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
            <Link to="/cart">Go to Cart</Link>
          </button>
        ) : (
          <button
            className="rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
            onClick={() => {
              productDispatch({
                type: ADDTOCART,
                payload: product,
              });
            }}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};
