import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productServices";
import "./Products.css";
import Loader from "../../components/loader/Loader";
import ProductCard from "../../components/productCard/ProductCard";
function Products() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await getProducts();
        setProducts(response.data.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="products-page">
      <div className="products-section">
        {products.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
