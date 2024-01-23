import { useEffect, useState } from "react";
import { Hero } from "../components/Hero.jsx";
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
  const [promoGame, setPromoGame] = useState({});

  useEffect(() => {
    fetchProducts()
      .then((json) => {
        setPromoGame(
          json.data
            .filter(
              (product) => product.category === "Games" && product.discount > 0
            )
            .sort((a, b) => b.discount - a.discount)[0]
        );
      })
      .catch((error) => console.error(error.message));
  }, []);

  console.log(promoGame);

  return (
    <>
      <Hero promoGame={promoGame} />

      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
    </>
  );
}
