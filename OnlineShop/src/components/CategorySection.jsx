import React from "react"; // eslint-disable-line no-unused-vars
import CategoryButton from "./CategoryButton";
import Container from "./Container";

const CategorySection = () => {
  const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <section id="category-section" className="p-5">
      <Container>
        <p className="text-xl text-gray-500 mb-3">{title}</p>
        <div className=" flex overflow-scroll category-button-group">
          <CategoryButton categoryName={"all"} current={true} />
          {categories.map((category) => (
            <CategoryButton
              key={category}
              categoryName={category}
              current={false}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CategorySection;
