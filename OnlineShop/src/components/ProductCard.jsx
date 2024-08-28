import React from "react";
import Rating from "./Rating";

const ProductCard = ({
  product: {
    image,
    title,
    price,
    description,
    rating: { rate },
  },
}) => {
  return (
    <section className=" border border-black p-5 flex flex-col items-start gap-5">
      <img src={image} alt={description} className="h-40" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>{price}</p>
        <button className="border border-black px-3 py-1 capitalize">
          add cart
        </button>
      </div>
    </section>
  );
};

export default ProductCard;
