import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/productServices";
import "./Products.css";
import Loader from "../../components/loader/Loader";
import { updateCart } from "../../services/cartServices";
import { useCartContext } from "../../contexts/CartProvider";
function Products() {
  const [products, setProducts] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { dispatch } = useCartContext();
  useEffect(() => {
    (async () => {
      const response = await getProducts();
      setProducts(response.data.data);
      setIsLoading(false);
    })();
  }, []);

  const handleAddToCart = async (product) => {
    const res = await updateCart({
      productId: product._id,
      quantity: 1,
    });
    if (res.data.success) {
      dispatch({
        type: "ADD_TO_CART",
        payload: { product: product, quantity: 1 },
      });
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="products-page">
      <div className="products-section">
        {products.map((product) => (
          <div className="product-card">
            <img src={product.img} alt="product-img" loading="lazy"></img>
            <div className="product-card-options">
              <div className="product-card-details">
                <p>{product.name}</p>
                <p>{product.price}</p>
              </div>
              <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
