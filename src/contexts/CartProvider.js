import { createContext, useContext, useReducer } from "react";
import { getCart } from "../services/cartServices";
import { CartReducer } from "../reducers/cartReducer";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const initialState = {
    productsInCart: null,
    isCartLoading: true,
  };

  const [{ productsInCart, isCartLoading }, dispatch] = useReducer(
    CartReducer,
    initialState
  );

  const getData = async () => {
    try {
      const response = await getCart();
      dispatch({ type: "INITIALIZE_CART", payload: response.data.data });
    } catch (err) {
      console.log(err);
    }
  };
  productsInCart === null && getData();
  return (
    <CartContext.Provider value={{ isCartLoading, productsInCart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => useContext(CartContext);

export { CartProvider, useCartContext };
