import "./officialLinks.css";
import Link from "next/link";

export default function OfficialLinks() {
  return (
    <section className="links-sec" id="links">
      <div className="wrap">
        <div className="s-eyebrow">Links</div>
        <h2 className="s-h2 links-title-dark">Official Links</h2>

        <div className="links-grid">
          <article className="lk-card">
            <h3>Discord</h3>
            <p>
              Join the Discord to participate in community games, engage in
              events, exchange strategies and ideas, and follow the development
              of Fulbo as the project grows.
            </p>
            <div>
              <Link className="btn btn-g btn-lg" href="#">
                Join Discord
              </Link>
            </div>
          </article>

          <article className="lk-card">
            <h3>X / Twitter</h3>
            <p>
              Follow Fulbo on X to stay updated with announcements, product
              evolution, development milestones, and key ecosystem updates.
            </p>
            <div>
              <Link className="btn btn-lg" href="#">
                Follow on X
              </Link>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}