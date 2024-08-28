/* eslint-disable no-unused-vars */
import React from "react";

const Header = () => {
  return (
    <header className="px-5 mt-5">
      <div className=" flex justify-between items-center">
        <h1 className="text-4xl font-bold">Online Shop</h1>
        <button className=" relative border border-black px-4 py-2">
          My Cart
          <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-3 py-2 text-xs">
            1
          </span>
        </button>
      </div>
    </header>
  );
};

export default Header;
