import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Products from "../pages/products/Products";
import Cart from "../pages/cart/Cart";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Router;
