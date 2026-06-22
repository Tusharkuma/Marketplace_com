import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "./components/Header.jsx";
import { HomePage } from "./pages/home/HomePage.jsx";
import { CheckOut } from "./pages/checkout/CheckOut.jsx";
import { Tracking } from "./pages/Tracking.jsx";
import { Orders } from "./pages/orders/Orders.jsx";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("/api/cart-items?expand=product").then((response) => {
      setCart(response.data);
    });
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage cart={cart} />} />
        <Route path="/checkout" element={<CheckOut cart={cart} />} />
        <Route path="/orders" element={<Orders cart={cart} />} />
        <Route path="/tracking" element={<Tracking cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
