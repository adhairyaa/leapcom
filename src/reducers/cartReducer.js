export function CartReducer(state, action) {
  switch (action.type) {
    case "UPDATE_QUANTITY":
      return (state = {
        ...state,
        productsInCart: state.productsInCart.map((item) => {
          if (item.product._id === action.payload.productId) {
            return {
              ...item,
              quantity: action.payload.quantity,
            };
          }
          return item;
        }),
      });
    case "DELETE_ITEM":
      return (state = {
        ...state,
        productsInCart: state.productsInCart.filter((item) => {
          return item.product._id !== action.payload.productId;
        }),
      });
    case "ADD_TO_CART":
      return (state = {
        ...state,
        productsInCart: [...state.productsInCart, action.payload],
      });
    case "INITIALIZE_CART":
      return (state = {
        ...state,
        productsInCart: action.payload,
        isCartLoading: false,
      });
    default:
      return state;
  }
}
