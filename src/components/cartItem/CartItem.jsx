import React, { useState } from "react";
import "./CartItem.css";
import { deleteCartItem, updateCart } from "../../services/cartServices";
function CartItem({ product, quantity }) {
  const [itemQuantity, setItemQuantity] = useState(quantity);
  const [isLoading, setIsLoading] = useState(false);
  const { name, price, img, _id } = product;
  const totalPrice = price * itemQuantity;

  const handleQuantityUpdate = async (quantity) => {
    setIsLoading(true);
    const res = await updateCart({ productId: _id, quantity });
    if (res.data.success) {
      setIsLoading(false);
      setItemQuantity(quantity);
    }
  };
  console.log(isLoading);
  return (
    <div className="cart-items">
      <div className="cart-item-name">
        <img src={img} alt={name} />
        <p>{name}</p>
      </div>
      <p>{price}</p>
      <div className="cart-item-quantity">
        <button
          className={isLoading ? "disabled" : ""}
          onClick={() => handleQuantityUpdate(itemQuantity + 1)}
          disabled={isLoading}
        >
          +
        </button>
        <p>{itemQuantity}</p>
        <button
          className={isLoading || itemQuantity === 1 ? "disabled" : ""}
          onClick={() => handleQuantityUpdate(itemQuantity - 1)}
          disabled={isLoading || itemQuantity === 1}
        >
          -
        </button>
      </div>
      <div>
        <p>{totalPrice}</p>
        <button onClick={() => deleteCartItem(_id)}>X</button>
      </div>
    </div>
  );
}

export default CartItem;
