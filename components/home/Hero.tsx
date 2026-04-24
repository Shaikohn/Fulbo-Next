import Image from "next/image";
import "./hero.css";

export default function Hero() {
  return (
    <section className="intro">
      <div className="intro-img">
        <Image
          src="https://fulbo42.wordpress.com/wp-content/uploads/2026/03/portada-fulbo.fun_-1.png?w=1200"
          alt="Fulbo"
          fill
          priority
          sizes="(max-width: 960px) 100vw, 50vw"
          style={{ objectFit: "cover", objectPosition: "center 20%" }}
        />
      </div>

      <div className="intro-txt">
        <span className="eyebrow">Pre-sale live — Beta available</span>

        <h1>
          Build your club.
          <br />
          <em>Own the system.</em>
        </h1>

        <p>
          A football management platform built around strategy, competition,
          and a structured ownership layer.
        </p>

        <button className="btn btn-g btn-hero">Enter Beta</button>
      </div>
    </section>
  );
}