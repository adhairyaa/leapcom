import React from "react";
import "./CartItem.css";
function CartItem({ product, quantity }) {
  const { name, price, img } = product;
  const totalPrice = price * quantity;
  return (
    <div className="cart-items">
      <div className="cart-item-name">
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
      <p>{price}</p>
      <div className="cart-item-quantity">
        <button>+</button>
        <p>{quantity}</p>
        <button>-</button>
      </div>
      <p>{totalPrice}</p>
    </div>
  );
}

export default CartItem;
