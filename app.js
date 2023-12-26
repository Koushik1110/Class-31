"use strict";

const productsContainer = document.querySelector(".products_container");

//fetch api and get request
// fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     if (!response.ok)
//       throw new Error(
//         "Something went wrong. Please check your web address and reload."
//       );

//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

//CRUD Create,Read, Update, Delete

fetch("https://fakestoreapi.com/products")
  .then((res) => {
    if (!res.ok) throw new Error("An error has occurred.");

    return res.json();
  })
  .then((data) => {
    renderData(data.products);
  })
  .catch((err) => {
    console.log(err.message);
  });

function renderData(products) {
  products.forEach((product) => {
    const template = `<div>
      <h1>${product.id}</h1>
      <h1>${product.title}</h1>
      <h1>$${product.price}</h1>
      </div>`;

    productsContainer.insertAdjacentHTML("beforeend, template");
  });
}
