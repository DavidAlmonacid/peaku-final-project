import { useEffect, useState } from "react";
import spidermanHero from "../assets/spiderman-hero.png";
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
      {/* Start Hero */}
      <div className="px-5 py-12">
        <div className="flex flex-col xs:flex-row items-end mx-auto max-w-3xl xs:max-h-52 bg-accent-timberwolf rounded-2xl">
          <section className="flex-auto flex flex-col gap-y-6 p-6 xs:w-1/2">
            <h2 className="text-3xl font-bold">
              {promoGame?.name?.split(" - ")[1]}
            </h2>
            <p className="line-clamp-5 text-pretty">{promoGame.description}</p>
            <section>
              <button>Buy now</button>
              <button>Add to cart</button>
            </section>
          </section>

          <picture className="flex-auto px-6 pt-10 pb-11 xs:w-1/2 xs:h-64">
            <img
              src={spidermanHero}
              alt="Spiderman"
              className="h-full object-scale-down shadow-black drop-shadow-xl"
            />
          </picture>
        </div>
      </div>
      {/* Finish Hero */}

      {/* <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul> */}
    </>
  );
}
