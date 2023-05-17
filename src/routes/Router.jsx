import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/home";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default Router;
