import React, { useEffect } from "react";
import "./Cart.css";
import { getCart } from "../../services/cartServices";
function Cart() {
  useEffect(() => {
    (async () => {
      const response = await getCart();
      //   setProducts(response.data.data);
      //   setIsLoading(false);
      console.log(response);
    })();
  }, []);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-headings">
        <h3>product</h3>
        <h3>price</h3>
        <h3>quantity</h3>
        <h3>total</h3>
      </div>
      <div className="cart-items">
        <div className="cart-item-name">
          <img src="https://cdn.shopify.com/s/files/1/0275/7361/6751/products/AirBird_Product_736x480.jpg?v=1637580490"></img>
          <p>Bird eye</p>
        </div>
        <p>800</p>
        <div className="cart-item-quantity">
          <button>+</button>
          <p>1</p>
          <button>-</button>
        </div>
        <p>800</p>
      </div>
      <div className="cart-page-total">
        <p>800</p>
        <button>Place Order</button>
      </div>
    </div>
  );
}

export default Cart;
