import axios from "axios";
import { backendURL } from "../constants";

async function getCart() {
  try {
    const response = await axios.get(`${backendURL}/cart`);
    return response;
  } catch (err) {
    console.log(err);
  }
}
async function updateCart(product) {
  try {
    const res = await axios.post(`${backendURL}/cart`, product);
    return res;
  } catch (err) {
    console.log(err);
  }
}
async function deleteCartItem(productId) {
  try {
    const res = await axios.delete(`${backendURL}/cart`, {
      data: { productId },
    });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export { getCart, updateCart, deleteCartItem };
