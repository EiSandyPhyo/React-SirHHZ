import Footer from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  const title = "Product Categories";
  const categories = [
    "electronics",
    "jewelry",
    "men's clothing",
    "women's clothing",
  ];
  return (
    <>
      <Header />
      <section id="category-section" className="p-5">
        <p className="text-2xl text-gray-500 mb-3">{title}</p>
        <div className="">
          {categories.map((category) => (
            <button
              className="border border-black px-4 py-2 me-2"
              key={category}
            >
              {category}
            </button>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
