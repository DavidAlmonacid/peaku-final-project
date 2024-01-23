import { useState } from "react";
import { Link } from "react-router-dom";

import { CartIcon } from "./Icons";
import { Login } from "./Login";
import { SettingsUser } from "./SettingsUser";

import { useUser } from "../hooks/useUser";

import logoBig from "../assets/game-store-logo-big.png";
import logoShort from "../assets/game-store-logo-short.png";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useUser();

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

      {!user?.isLoggedIn ? (
        <>
          <section className="flex gap-x-4 *:py-2 *:px-6 *:rounded-xl *:text-sm *:font-medium">
            <button
              onClick={() => setIsOpen((prevState) => !prevState)}
              className="bg-primary-royal-blue text-accent-antiflash-white"
            >
              Login
            </button>

            <Link
              to="/signup"
              className="ring-1 ring-inset ring-primary-royal-blue text-primary-royal-blue bg-accent-antiflash-white"
            >
              Sign Up
            </Link>
          </section>

          {isOpen && <Login />}
        </>
      ) : (
        <section className="flex items-center gap-x-3">
          <span className="font-medium">{user.email}</span>
          <CartIcon />
          <SettingsUser />
        </section>
      )}
    </header>
  );
}
