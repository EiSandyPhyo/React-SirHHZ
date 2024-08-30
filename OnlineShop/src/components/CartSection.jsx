/* eslint-disable no-unused-vars */
import React from "react";
import products from "../data/products";
import Cart from "./Cart";
import Container from "./Container";
import Button from "./Button";
import carts from "../data/carts";

const CartSection = () => {
  return (
    <div className="flex flex-col gap-3">
      {carts.map((cart) => (
        <Cart key={cart.id} cart={cart} />
      ))}
      <div className="absolute bottom-0 left-0 w-full h-52">
      <Container>
        <div className="border-t border-black flex justify-end gap-10 py-2 text-end">
            <div className="">
                <p className=" text-gray-700">Total ($)</p>
                <p className="font-bold">66.9</p>
            </div>
            <div className="">
                <p className=" text-gray-700">Tax (10%)</p>
                <p className="font-bold">6.9</p>
            </div>
            <div className="">
                <p className=" text-gray-700">Net Total ($)</p>
                <p className="font-bold text-2xl">73.8</p>
            </div>
        </div>
        <div className="text-end">
        <Button currentButtonName={"Order Now"} className={"px-7"}/>
        </div>
      </Container>
      </div>
    </div>
  );
};

export default CartSection;
