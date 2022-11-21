import React from "react";

export const ProductCard = ({ product }) => {
  return (
    <div className="bg-slate-100 rounded-lg">
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-[15rem] h-4/6 p-2 rounded-2xl"
      />
      <div className="p-2 flex flex-col">
        <h3 className="font-semibold">{product.name}</h3>
        <p className="text-sm">RS. {product.price}</p>
        <button className="bg-blue-400 p-2 rounded-md">Add to cart</button>
      </div>
    </div>
  );
};
