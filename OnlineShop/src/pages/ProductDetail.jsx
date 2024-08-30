/* eslint-disable no-unused-vars */
import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Container from "../components/Container";
import Rating from "../components/Rating";
import Breadcrumb from "../components/Breadcrumb";
import Button from "../components/Button";

const ProductDetail = () => {
  const { productID } = useParams();
  // console.log(productID);
  // console.log(useParams());

  const currentProduct = products.find((product) => product.id == productID);
  console.log(currentProduct);

  return (
    <section className="px-5 p-5">
      <Container>
      <Breadcrumb currentPageTitle="Product Detail" />
        <div className=" border border-black p-10">
          <div className="grid grid-cols-2 ">
            <div className="col-span-1">
              <img
                src={currentProduct.image}
                className="w-3/4 lg:w-1/2 block mx-auto"
                alt=""
              />
            </div>
            <div className="col-span-1 flex flex-col gap-5 sm:pe-0 md:pe-5 lg:pe-20 items-start">
              <h3 className="text-3xl font-bold">{currentProduct.title}</h3>
              <span className="bg-gray-200 text-gray-700 px-5 py-1">
                {currentProduct.category}
              </span>
              <span>{currentProduct.description}</span>
              <span>
                <Rating rate={currentProduct.rating.rate} />
              </span>
              <div className="flex justify-between items-center w-full">
                <p className="">Price ($ {currentProduct.price})</p>
                <Button currentButtonName={"add cart"}/>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductDetail;
