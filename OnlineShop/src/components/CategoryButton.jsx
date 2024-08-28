/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const CategoryButton = ({ categoryName, current }) => {
  return (
    <button className={`${current && 'bg-black text-white'} border border-black px-4 py-2 me-2 text-nowrap capitalize`}>
      {categoryName}
    </button>
  );
};

export default CategoryButton;
