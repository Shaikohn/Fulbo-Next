import Link from "next/link";
import "./header.css";

export default function Header() {
  return (
    <header className="hdr">
      <div className="wrap hdr-row">
        <Link href="/" className="brand">
          Fulbo
        </Link>

        <nav className="hdr-nav">
          <a href="#presale">Pre-Sale</a>
          <a href="#game">Game</a>
          <a href="#crypto">Crypto</a>
          <a href="#beta">Beta</a>
          <a href="#links">Links</a>
        </nav>

        <div className="hdr-act">
          <Link className="btn" href="#">
            Docs
          </Link>
          <Link className="btn btn-g" href="#">
            App
          </Link>
        </div>
      </div>
    </header>
  );
}