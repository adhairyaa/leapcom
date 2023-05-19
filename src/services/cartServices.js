import axios from "axios";
import { backendURL } from "../constants";

async function getCart() {
  const response = await axios.get(`${backendURL}/cart`);
  return response;
}
async function updateCart(product) {
  const res = await axios.post(`${backendURL}/cart`, product);
  return res;
}
async function deleteCartItem(productId) {
  const res = await axios.delete(`${backendURL}/cart`, {
    data: { productId },
  });
  return res;
}

export { getCart, updateCart, deleteCartItem };
