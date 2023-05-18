import React, { useState } from "react";
import "./CartItem.css";
import { deleteCartItem, updateCart } from "../../services/cartServices";
import { useCartContext } from "../../contexts/CartProvider";
function CartItem({ product, quantity }) {
  const [isLoading, setIsLoading] = useState(false);
  const { name, price, img, _id } = product;
  const { dispatch } = useCartContext();
  const totalPrice = price * quantity;

  const handleQuantityUpdate = async (quantity) => {
    setIsLoading(true);
    const res = await updateCart({ productId: _id, quantity });
    if (res.data.success) {
      setIsLoading(false);
      dispatch({ type: "UPDATE_CART", payload: { productId: _id, quantity } });
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
          onClick={() => handleQuantityUpdate(quantity + 1)}
          disabled={isLoading}
        >
          +
        </button>
        <p>{quantity}</p>
        <button
          className={isLoading || quantity === 1 ? "disabled" : ""}
          onClick={() => handleQuantityUpdate(quantity - 1)}
          disabled={isLoading || quantity === 1}
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
