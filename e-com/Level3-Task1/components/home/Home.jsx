// Home.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../home/home.module.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => setProducts(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
   
    <div className={styles.container}>
      
      {products.map((product) => (
        <article className={styles["card"]} key={product.id}>
          <div className={styles["card-img"]}>
            <div
              className={`${styles["card-imgs"]} ${styles["pv"]} ${styles["delete"]}`}
              style={{ backgroundImage: `url(${product.image})` }}
            ></div>
          </div>
          <div className={styles["project-info"]}>
            <div className={styles["flex"]}>
              <div className={styles["project-title"]}>{product.title}</div>
              
            </div>
            <span className={styles["tag"]}>{product.category}</span>
          </div>
        </article>
      ))}
    </div>
  );
}

export default Home;
