import React, { useContext } from "react";
import { ProductStateContext } from "../Context/ProductContext";
import { ACTION_TYPES } from "../utils/helpers";
import { toast } from "react-toastify";

export const Cart = () => {
  const { productState, productDispatch } = useContext(ProductStateContext);
  const { cart } = productState;
  const { INCREMENTPRODUCTQUANTITY, DECREMENTPRODUCTQUANTITY, REMOVEFROMCART } =
    ACTION_TYPES;

  const totalCartPrice = cart.reduce((acc, curr) => {
    return (acc = acc + Number(curr.price) * Number(curr.orderQuantity));
  }, 0);

  return (
    <main className="p-4">
      {cart.length === 0 ? (
        <p className="text-center p-4 text-lg font-semibold">
          Your Cart is Empty
        </p>
      ) : (
        <section className="w-[95%]  md:w-[60%] m-auto">
          <h1 className="text-lg font-bold">Shopping Cart</h1>
          <div className="p-4 flex flex-col gap-2">
            {cart.map((prod) => (
              <div
                key={prod.id}
                className="flex flex-col w-full border-2 p-4 rounded-md bord md:flex-row  md:justify-between"
              >
                <div className="w-full justify-between flex md:justify-start md:gap-3">
                  <img
                    src={prod.imageURL}
                    alt={prod.name}
                    className="w-[7rem]"
                  />
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
                        disabled={prod.orderQuantity === prod.quantity}
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
                      toast.info(`${prod.name} removed`);
                    }}
                  >
                    Remove from Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <hr />
            <h2 className="text-right p-4">
              Total Price: Rs. {totalCartPrice}
            </h2>
            <button className="w-full rounded-md border border-gray-300 bg-[#e5e7eb] py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2">
              Place Order
            </button>
          </div>
        </section>
      )}
    </main>
  );
};
