import React, { useState } from "react";
import "./Cart.css";
import Toast from "../../components/toast/Toast";
import Loader from "../../components/loader/Loader";
import CartItem from "../../components/cartItem/CartItem";
import { useCartContext } from "../../contexts/CartProvider";
function Cart() {
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const { productsInCart, isCartLoading } = useCartContext();
  let totalPrice = 0;
  productsInCart?.forEach(({ product, quantity }) => {
    totalPrice += product.price * quantity;
  });
  return isCartLoading ? (
    <Loader />
  ) : productsInCart.length === 0 ? (
    <h1>Your Cart is Empty 🥺</h1>
  ) : (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-headings">
        <h3>product</h3>
        <h3>price</h3>
        <h3>quantity</h3>
        <h3>total</h3>
      </div>
      {console.log(productsInCart)}
      {productsInCart.map(({ product, quantity }) => (
        <CartItem product={product} quantity={quantity} />
      ))}

      <div className="cart-page-total">
        <p>{totalPrice}</p>
        <button onClick={() => setIsOrderPlaced(true)}>Place Order</button>
      </div>
      {isOrderPlaced && <Toast />}
    </div>
  );
}

export default Cart;
