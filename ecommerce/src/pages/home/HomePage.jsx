import axios from "axios";
import { Header } from "../../components/Header.jsx";
import { useState, useEffect } from "react";
import { HomeProductGrid } from "./HomeProductGrid.jsx";
import "./HomePage.css";

export function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/api/products").then((response) => {
      setProducts(response.data);
    });
  }, []); //empty depentance array mean it runs once if the component restarts or updates

  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <HomeProductGrid products={products} />
      </div>
    </>
  );
}
