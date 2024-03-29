import { useEffect, useState } from "react";
import { Hero } from "../components/Hero.jsx";
import { TrendingGames } from "../components/TrendingGames.jsx";
import { BASE_URL } from "../config.js";

async function fetchProducts() {
  const response = await fetch(`${BASE_URL}/api/products`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
}

export function Home() {
  const [games, setGames] = useState([]);
  const [promoGame, setPromoGame] = useState({});

  useEffect(() => {
    async function getProducts() {
      try {
        const { data: products } = await fetchProducts();

        const filteredGames = products
          .filter((product) => product.category === "Games")
          .sort((a, b) => b.discount - a.discount);

        setPromoGame(filteredGames[0]);
        setGames(filteredGames.slice(1));
      } catch (error) {
        console.error(error.message);
      }
    }

    getProducts();
  }, []);

  return (
    <>
      <Hero promoGame={promoGame} />
      <TrendingGames games={games} />
    </>
  );
}
