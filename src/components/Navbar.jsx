import React from "react";
import { AiOutlineShoppingCart } from "./icons";

export const Navbar = () => {
  return (
    <header className="w-full h-[10vh] bg-slate-300 flex">
      <nav className="flex w-[90%] m-auto justify-between">
        <h1 className="text-2xl font-bold">TeeRex Store</h1>
        <section className="flex gap-4">
          <h2 className="font-bold hover:underline underline-offset-8 cursor-pointer">
            Products
          </h2>
          <span className="flex">
            <AiOutlineShoppingCart size={32} className="cursor-pointer" />
            <span className="font-bold">1</span>
          </span>
        </section>
      </nav>
    </header>
  );
};
