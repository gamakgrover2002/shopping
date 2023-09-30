import React from "react";
import Shopping from "./pages/Shopping";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Help from "./pages/Help";
import MainLayout from "./Layouts/MainLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Review from "./pages/Review";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/help" element={<Help />} />
            <Route path="/review" element={<Review />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
