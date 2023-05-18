import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { getCart } from "../services/cartServices";
import { CartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    productsInCart: [],
    isCartLoading: true,
  };

  const [{ productsInCart, isCartLoading }, dispatch] = useReducer(
    CartReducer,
    initialState
  );

  const getData = async () => {
    const response = await getCart();
    dispatch({ type: "INITIALIZE_CART", payload: response.data });
    console.log(response);
  };
  getData();
  return (
    <CartContext.Provider value={{ isCartLoading, productsInCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
