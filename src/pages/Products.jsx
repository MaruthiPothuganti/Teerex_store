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
import { toast } from "react-toastify";

const { PRODUCTS } = ACTION_TYPES;

export const getProds = async (productDispatch) => {
  try {
    const resp = await axios.get(
      "https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json"
    );
    if (resp.status === 200) {
      productDispatch({ type: PRODUCTS, payload: resp.data });
      return resp.data;
    }
  } catch (error) {
    toast.warn("Something went wrong");
    if (axios.isAxiosError(error)) {
      const serverError = error;
      if (serverError && serverError.response) {
        return serverError.response.data;
      }
    }
    console.log(error);
    return { errorMessage: "something went wrong!" };
  }
};

export const Products = () => {
  const [searchText, setSearchText] = useState("");
  const [filterVisible, setFilterVisible] = useState(false);
  const { productState, productDispatch } = useContext(ProductStateContext);
  const { filterState } = useContext(FilterStateContext);
  const { colors, genders, types, price } = filterState;

  useEffect(() => {
    getProds(productDispatch);
  }, []);
  const searchedProducts = searchProds(productState.products, searchText);
  const productsByPrice = filterByPrice(searchedProducts, price);
  const productsByColor = filterByColor(productsByPrice, colors);
  const productsByGender = filterByGender(productsByColor, genders);
  const finalproducts = filterByType(productsByGender, types);

  const filterClass = `absolute bg-slate-50 left-[-100rem] w-full p-4 h-[90vh] md:basis-[20rem] md:h-[90vh] md:p-2 md:static md:m-0`;

  return (
    <main className="flex relative">
      <aside
        className={filterClass}
        style={{ left: filterVisible ? "0rem" : "-100rem" }}
      >
        <Filters setFilterVisible={setFilterVisible} />
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
          <button
            className="p-2 px-3 rounded-md bg-slate-200 inline-flex md:hidden"
            onClick={() => setFilterVisible((prev) => !prev)}
          >
            <FiFilter />
          </button>
        </div>
        <h2>
          Showing <span className="font-bold">{finalproducts.length}</span> of
          30 products
        </h2>
        <section className="p-4 flex flex-wrap justify-center gap-4">
          {finalproducts.length !== 0 ? (
            finalproducts.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))
          ) : (
            <h1 className="text-xl font-semibold p-4">
              Sorry No Luck. Try Something else.
            </h1>
          )}
        </section>
      </div>
    </main>
  );
};
