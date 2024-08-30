/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Button = ({ currentButtonName, className }) => {
  return (
    <button className={`border border-black px-3 py-1 capitalize ${className}`}>
      {currentButtonName}
    </button>
  );
};

export default Button;
