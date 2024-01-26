import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./product.module.css";

function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      {products.map((product) => (
        <div key={product.id}>
          <img
            src={product.image}
            alt={product.title}
            style={{ maxWidth: "100px", maxHeight: "100px" }}
          />

          <h3>{product.title}</h3>
          <h3>{product.category}</h3>
          <p>{product.description}</p>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;


/**<article class="card">
<div class="card-img">
<div class="card-imgs pv delete"></div>
</div>
<div class="project-info">
<div class="flex">
  <div class="project-title">Moi</div>
  <span class="tag">description</span>
</div>
<span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </span>
</div>
</article>
**/

