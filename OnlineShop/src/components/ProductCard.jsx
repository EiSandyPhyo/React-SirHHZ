/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import Button from "./Button";
import carts from "../data/carts";

const ProductCard = ({
  product: {
    id,
    image,
    title,
    price,
    description,
    rating: { rate },
  },
}) => {
  return (
    <Link to={`/product-detail/${id}`} className=" border border-black p-5 flex flex-col items-start gap-5">
      <img src={image} alt={description} className="h-40" />
      <p className="font-bold line-clamp-2">{title}</p>
      <Rating rate={rate} />
      <div className="flex justify-between w-full items-end">
        <p>{price}</p>
        {carts.find((cart) => cart.product.id === id) ? (
          <Button currentButtonName={"added"} className={"bg-black text-white"}/>
        ) :
        <Button currentButtonName={"add cart"}/>
      }
      </div>
    </Link>
  );
};

export default ProductCard;
