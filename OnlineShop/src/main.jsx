//import { createElement } from "react";
import "./index.css";
import { createRoot } from "react-dom/client";
//import App from "./App";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";

const root = document.querySelector("#root");

createRoot(root).render(<RouterProvider router={router}/>);


//view - react node
// const app = createElement(
//   "div",
//   { id: "category-section", className: "p-5" },
//   createElement(
//     "p",
//     { className: "text-2xl text-gray-500 mb-3" },
//     "Product Categories"
//   ),
//   createElement(
//     "div",
//     null,
//     ...categories.map((category) =>
//       createElement(
//         "button",
//         { className: "border border-black px-4 py-2 me-2" },
//         category
//       )
//     )
//   )
// );

// console.log(app);

// render
//createRoot(root).render(App());

// const title = document.createElement("p");
// title.innerText = "Product Categories";
// title.classList.add("text-2xl", "text-gray-500", "mb-3");

// root.append(title);

// const categoryButton = (categoryName) => {
//     const btn = document.createElement("button");
//     btn.innerText = categoryName;
//     btn.classList.add("bg-gray-300", "hover:bg-gray-400", "text-gray-800", "font-bold", "py-2", "px-4", "rounded", "me-3");
//     return btn;
// }
// categories.forEach((category) => root.append(categoryButton(category)));
