import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "./icons";
import { Link } from "react-router-dom";
import { ProductStateContext } from "../Context/ProductContext";

export const Navbar = () => {
  const { productState } = useContext(ProductStateContext);

  return (
    <header className="w-full h-[10vh] bg-slate-300 flex">
      <nav className="flex w-[90%] m-auto justify-between">
        <h1 className="text-2xl font-bold">TeeRex Store</h1>
        <section className="flex gap-4">
          <Link to="/products">
            <h2 className="font-bold hover:underline underline-offset-8 cursor-pointer">
              Products
            </h2>
          </Link>
          <Link to="/cart">
            <span className="flex">
              <AiOutlineShoppingCart size={32} className="cursor-pointer" />
              <span className="font-bold">{productState.cart.length}</span>
            </span>
          </Link>
        </section>
      </nav>
    </header>
  );
};
