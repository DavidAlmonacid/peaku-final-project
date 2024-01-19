import { useState } from "react";
import { Link } from "react-router-dom";
import logoBig from "../assets/game-store-logo-big.png";
import logoShort from "../assets/game-store-logo-short.png";
import Login from "./Login";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-sm">
      <Link to="/" className="[&>picture>img]:max-h-8">
        <picture className="hidden xs:block">
          <img src={logoBig} alt="game store logo big" />
        </picture>

        <picture className="xs:hidden">
          <img src={logoShort} alt="game store logo short" />
        </picture>
      </Link>

      <div className="flex gap-x-4 *:py-2 *:px-6 *:rounded-xl *:text-sm *:font-medium">
        <button
          onClick={handleClick}
          className="bg-primary-royal-blue text-accent-antiflash-white"
        >
          Login
        </button>

        <Link
          to="/signup"
          className="ring-2 ring-inset ring-primary-royal-blue text-primary-royal-blue bg-primary-ruddy-blue/10"
        >
          Sign Up
        </Link>
      </div>

      {isOpen && <Login />}
    </header>
  );
}
