/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <footer className="px-5 bg-black text-white mx-5 py-3 text-center mt-auto">
      &copy; {date.getFullYear()}{" "}
      <a href="https://mms-it.com/" className="underline text-gray-300">
        MMS-IT
      </a>
      . All rights reserved.
    </footer>
  );
};

export default Footer;
