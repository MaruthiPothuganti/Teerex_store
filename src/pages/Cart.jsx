import React, { useContext, useState } from "react";
import { ProductStateContext } from "../Context/ProductContext";
import { ACTION_TYPES } from "../utils/helpers";

export const Cart = () => {
  const { productState, productDispatch } = useContext(ProductStateContext);
  const { cart, totalCartPrice } = productState;
  console.log("cart", cart);
  const { INCREMENTPRODUCTQUANTITY, DECREMENTPRODUCTQUANTITY, REMOVEFROMCART } =
    ACTION_TYPES;

  return (
    <main className="p-4">
      <section className="w-[95%]  md:w-[60%] m-auto">
        <h1 className="text-lg font-bold">Shopping Cart</h1>
        <div className="p-4 flex flex-col gap-2">
          {cart.map((prod) => (
            <div
              key={prod.id}
              className="flex flex-col w-full border-2 p-4 rounded-md bord md:flex-row  md:justify-between"
            >
              <div className="w-full justify-between flex md:justify-start md:gap-3">
                <img src={prod.imageURL} alt={prod.name} className="w-[7rem]" />
                <div className="px-2">
                  <h2 className="text-md font-bold">{prod.name}</h2>
                  <p className="text-sm font-bold">Rs.{prod.price}</p>
                  <div className="flex gap-4 items-center mt-2">
                    <button
                      className="rounded-md border border-gray-300 bg-[#e5e7eb] py-2 px-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                      disabled={prod.orderQuantity === 1}
                      onClick={() => {
                        productDispatch({
                          type: DECREMENTPRODUCTQUANTITY,
                          payload: prod,
                        });
                      }}
                    >
                      -
                    </button>
                    <span>{prod.orderQuantity}</span>
                    <button
                      className=" rounded-md border border-gray-300 bg-[#e5e7eb] py-2 px-2 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                      onClick={() => {
                        productDispatch({
                          type: INCREMENTPRODUCTQUANTITY,
                          payload: prod,
                        });
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center py-4">
                <button
                  className="w-full rounded-md border border-gray-300 bg-[#e5e7eb] py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                  onClick={() => {
                    productDispatch({
                      type: REMOVEFROMCART,
                      payload: prod,
                    });
                  }}
                >
                  Remove from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
