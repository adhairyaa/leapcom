import React, { useEffect, useState } from "react";
import "./Cart.css";
import { getCart } from "../../services/cartServices";
import Toast from "../../components/toast/Toast";
import Loader from "../../components/loader/Loader";
import CartItem from "../../components/cartItem/CartItem";
function Cart() {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [cart, setCart] = useState();
  useEffect(() => {
    (async () => {
      const response = await getCart();
      setCart(response.data.data);
      setIsLoading(false);
      console.log(response);
    })();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-headings">
        <h3>product</h3>
        <h3>price</h3>
        <h3>quantity</h3>
        <h3>total</h3>
      </div>
      {cart.map(({ productId, quantity }) => (
        <CartItem product={productId} quantity={quantity} />
      ))}

      <div className="cart-page-total">
        <p>800</p>
        <button onClick={() => setIsOrderPlaced(true)}>Place Order</button>
      </div>
      {isOrderPlaced && <Toast />}
    </div>
  );
}

export default Cart;
