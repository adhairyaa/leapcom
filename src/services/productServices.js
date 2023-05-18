import axios from "axios";
import { backendURL } from "../constants";

async function getProducts() {
  const response = await axios.get(`${backendURL}/products`);
  return response;
}

export { getProducts };
