import React from "react";
import { Filters } from "../components";
import { AiOutlineSearch, FiFilter } from "../components/icons";

export const Products = () => {
  return (
    <main className="flex h-[90vh]">
      <aside className="basis-[15%]  hidden md:block">
        <Filters />
      </aside>
      <div className="grow p-4">
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
        <section className="p-4 overflow-y-auto">
          <h1>Bello</h1>
        </section>
      </div>
    </main>
  );
};
