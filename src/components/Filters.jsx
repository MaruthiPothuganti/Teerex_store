import React, { useContext } from "react";
import { FilterStateContext } from "../Context/FilterContext";
import { toast } from "react-toastify";

export const Filters = () => {
  const { filterDispatch, filterState } = useContext(FilterStateContext);
  const { colors, genders, types, price } = filterState;

  const filterTypes = [
    {
      name: "Colour",
      types: ["Red", "Blue", "Green", "Pink", "Grey", "White"],
      checkState: colors,
    },
    {
      name: "Gender",
      types: ["Men", "Women"],
      checkState: genders,
    },
    {
      name: "Type",
      types: ["Polo", "Hoodie", "Basic"],
      checkState: types,
    },
  ];

  return (
    <section className="m-4">
      <div className="flex justify-between my-4">
        <h2 className="font-bold text-xl">Filters</h2>
        <span>
          <button
            onClick={() => {
              filterDispatch({ type: "RESET" });
              toast.info("Filters cleared");
            }}
          >
            Clear
          </button>
        </span>
      </div>

      {filterTypes.map((category) => (
        <div key={category.name}>
          <ul>
            <h2 className="font-semibold text-lg">{category.name}</h2>
            {category.types.map((item) => (
              <li className="px-2" key={item}>
                <input
                  type="checkbox"
                  name={item}
                  id={item}
                  onChange={() => {
                    filterDispatch({
                      type: category.name,
                      payload: item,
                    });
                  }}
                  checked={category.checkState.includes(item)}
                />
                <label htmlFor={item}> {item}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <div>
        <ul>
          <h2 className="font-semibold text-lg">Price</h2>
          <li className="px-2">
            <input
              type="radio"
              name="price"
              id="0-Rs250"
              min="0"
              max="250"
              onChange={(e) => {
                filterDispatch({
                  type: "Price",
                  payload: { min: e.target.min, max: e.target.max },
                });
              }}
              checked={price.min === "0" && price.max === "250"}
            />
            <label htmlFor="0-Rs250"> 0-Rs250</label>
          </li>
          <li className="px-2">
            <input
              type="radio"
              name="price"
              id="Rs250-450"
              min="251"
              max="449"
              onChange={(e) => {
                filterDispatch({
                  type: "Price",
                  payload: { min: e.target.min, max: e.target.max },
                });
              }}
              checked={price.min === "251" && price.max === "449"}
            />
            <label htmlFor="Rs250-450"> Rs251-450</label>
          </li>
          <li className="px-2">
            <input
              type="radio"
              name="price"
              id="Rs450"
              min="450"
              max="1000"
              onChange={(e) => {
                filterDispatch({
                  type: "Price",
                  payload: { min: e.target.min, max: e.target.max },
                });
              }}
              checked={price.min === "450" && price.max === "1000"}
            />
            <label htmlFor="Rs450"> Rs450</label>
          </li>
        </ul>
      </div>
    </section>
  );
};
