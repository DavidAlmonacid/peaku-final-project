import { Link } from "react-router-dom";
import logoBig from "../assets/game-store-logo-big.png";
import logoShort from "../assets/game-store-logo-short.png";

export default function Header() {
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
        <button className="bg-primary-royal-blue text-accent-antiflash-white">
          Login
        </button>
        <Link
          to="/signup"
          className="ring-2 ring-inset ring-primary-royal-blue text-primary-royal-blue"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
