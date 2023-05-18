import axios from "axios";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productServices";
import "./Products.css";
import Loader from "../../components/loader/Loader";
function Products() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response.data.data);
      setIsLoading(false);
    })();
  }, []);
  console.log(products);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="products-page">
      <div className="products-section">
        {products.map((product) => (
          <div className="product-card">
            <img src={product.img} alt="product-img"></img>
            <div className="product-card-options">
              <div className="product-card-details">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
