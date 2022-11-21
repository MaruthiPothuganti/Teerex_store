import React from "react";

const filterTypes = [
  {
    name: "Colour",
    types: ["Red", "Blue", "Green"],
  },
  {
    name: "Gender",
    types: ["Male", "Women"],
  },
  {
    name: "Price",
    types: ["0-Rs250", "Rs251-450", "Rs450"],
  },
  {
    name: "Type",
    types: ["Polo", "Hoodie", "Basic"],
  },
];

export const Filters = () => {
  return (
    <section className="m-4">
      <div className="flex justify-between my-4">
        <h2 className="font-bold text-xl">Filters</h2>
        <span>Clear</span>
      </div>

      {filterTypes.map((category) => (
        <div key={category.name}>
          <ul>
            <h2 className="font-semibold text-lg">{category.name}</h2>
            {category.types.map((item) => (
              <li className="px-2" key={item}>
                <input type="checkbox" name={item} id={item} />
                <label htmlFor={item}> {item}</label>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
