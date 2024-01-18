import { Link } from "react-router-dom";
import logoBig from "../assets/game-store-logo-big.png";
import logoShort from "../assets/game-store-logo-short.png";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-4">
      <Link to="/" className="[&>picture>img]:max-h-6">
        <picture className="hidden xs:block">
          <img src={logoBig} alt="game store logo big" />
        </picture>

        <picture className="xs:hidden">
          <img src={logoShort} alt="game store logo short" />
        </picture>
      </Link>

      <div className="flex gap-x-4 *:py-2 *:px-6 *:rounded-xl *:text-sm *:font-medium">
        <button className="bg-primary-royal-blue">Login</button>
        <Link
          to="/signup"
          className="ring-2 ring-inset ring-primary-ruddy-blue text-primary-ruddy-blue"
        >
          Sign Up
        </Link>
      </div>
    </header>
  );
}
