import axios from "axios";

async function getProducts() {
  const response = await axios.get(
    "https://leapcom-backend.dhairyagulati.repl.co/products"
  );
  return response;
}

export { getProducts };
