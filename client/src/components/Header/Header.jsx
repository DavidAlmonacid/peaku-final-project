import logoBig from "../../assets/game-store-logo-big.png";
import logoShort from "../../assets/game-store-logo-short.png";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <picture className="logo">
        <img src={logoBig} alt="game store logo big" className="logo--big" />
        <img
          src={logoShort}
          alt="game store logo short"
          className="logo--short"
        />
      </picture>
    </header>
  );
}
