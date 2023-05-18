import axios from "axios";
import { backendURL } from "../constants";

async function getCart() {
  const response = await axios.get(`${backendURL}/cart`);
  return response;
}

export { getCart };
