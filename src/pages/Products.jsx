import axios from "axios";
import React, { useEffect, useContext, useState } from "react";
import { Filters, ProductCard } from "../components";
import { FiFilter } from "../components/icons";
import { FilterStateContext } from "../Context/FilterContext";
import { ProductStateContext } from "../Context/ProductContext";
import {
  ACTION_TYPES,
  filterByPrice,
  filterByColor,
  filterByGender,
  filterByType,
  searchProds,
} from "../utils/helpers";

export const Products = () => {
  const [searchText, setSearchText] = useState("");
  const { productState, productDispatch } = useContext(ProductStateContext);
  const { filterState } = useContext(FilterStateContext);
  const { colors, genders, types, price } = filterState;
  const { PRODUCTS } = ACTION_TYPES;

  const getProds = async () => {
    const resp = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    productDispatch({ type: PRODUCTS, payload: resp.data });
  };

  useEffect(() => {
    getProds();
  }, []);
  const searchedProducts = searchProds(productState.products, searchText);
  const productsByPrice = filterByPrice(searchedProducts, price);
  const productsByColor = filterByColor(productsByPrice, colors);
  const productsByGender = filterByGender(productsByColor, genders);
  const finalproducts = filterByType(productsByGender, types);

  return (
    <main className="flex">
      <aside className="basis-[20rem] w-[20rem] h-[90vh] p-2  hidden md:block">
        <Filters />
      </aside>
      <div className="grow w-full h-[90vh] p-4 overflow-y-auto">
        <div className="flex p-4 justify-center gap-4">
          <input
            type="search"
            className="py-1 px-4 border-2"
            placeholder="Search Products here..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button className="p-2 px-3 rounded-md bg-slate-200 inline-flex  md:hidden ">
            <FiFilter />
          </button>
        </div>
        <section className="p-4  flex flex-wrap justify-center gap-4">
          {finalproducts.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </section>
      </div>
    </main>
  );
};
