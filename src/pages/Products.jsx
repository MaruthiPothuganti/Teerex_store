import axios from "axios";
import React, { useEffect, useState } from "react";
import { Filters, ProductCard } from "../components";
import { AiOutlineSearch, FiFilter } from "../components/icons";

export const Products = () => {
  const [prods, setProds] = useState([]);

  const getProds = async () => {
    const resp = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    setProds(resp.data);
  };

  useEffect(() => {
    getProds();
  }, []);

  return (
    <main className="flex">
      <aside className="basis-[15%] w-[15%] h-[90vh]  hidden md:block">
        <Filters />
      </aside>
      <div className="grow w-full h-[90vh] p-4 overflow-y-auto">
        <div className="flex p-4 justify-center gap-4">
          <input
            type="search"
            className="py-1 px-4 border-2"
            placeholder="Search Products here..."
          />
          <button className="p-2 px-3 rounded-md bg-slate-200">
            <AiOutlineSearch />
          </button>
          <button className="p-2 px-3 rounded-md bg-slate-200 inline-flex  md:hidden ">
            <FiFilter />
          </button>
        </div>
        <section className="p-4  flex flex-wrap justify-center gap-4">
          {prods.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </section>
      </div>
    </main>
  );
};
