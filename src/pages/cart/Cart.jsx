import React, { useState } from "react";
import "./Cart.css";
import Loader from "../../components/loader/Loader";
import CartItem from "../../components/cartItem/CartItem";
import { useCartContext } from "../../contexts/CartProvider";
function Cart() {
  const [toastStatus, setTaustStatus] = useState("toast");
  const { productsInCart, isCartLoading } = useCartContext();

  let totalPrice = 0;
  productsInCart?.forEach(({ product, quantity }) => {
    totalPrice += product.price * quantity;
  });
  const handleToast = () => {
    setTaustStatus("show");
    setTimeout(function () {
      setTaustStatus("toast");
    }, 5000);
  };
  return isCartLoading ? (
    <Loader />
  ) : productsInCart.length === 0 ? (
    <h1>Your Cart is Empty 🥺</h1>
  ) : (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-headings">
        <h4>product</h4>
        <h4>price</h4>
        <h4>quantity</h4>
        <h4>total</h4>
      </div>
      {productsInCart.map(({ product, quantity }) => (
        <CartItem product={product} quantity={quantity} key={product._id} />
      ))}

      <div className="cart-page-total">
        <p>${totalPrice}</p>
        <button onClick={() => handleToast()}>Place Order</button>
        <div className={toastStatus}>order has been placed</div>
      </div>
    </div>
  );
}

export default Cart;
