import "./presale.css";

export default function Presale() {
  return (
    <section className="sec sec-a" id="presale">
      <div className="wrap">
        <div className="presale-block">
          <div className="s-eyebrow">Pre-Sale</div>

          <h2 className="s-h2">Pre-Sale Structure</h2>

          <p className="presale-lead">
            Fulbo&apos;s pre-sale is structured in multiple stages, designed to
            create progressive entry conditions. Early participation allows
            stronger positioning within the system, while later stages become
            more competitive and less favorable.
          </p>

          <div className="presale-cols">
            <div className="presale-col">
              <h4>Each stage includes</h4>
              <ul className="glow-list">
                <li>Fixed allocation</li>
                <li>Increasing entry level</li>
                <li>Higher demand as the sale advances</li>
              </ul>
            </div>

            <div className="presale-col">
              <h4>Funds are directed toward</h4>
              <ul className="glow-list">
                <li>Product development</li>
                <li>Gameplay systems expansion</li>
                <li>Infrastructure</li>
                <li>Ecosystem growth</li>
              </ul>
            </div>
          </div>

          <a className="btn btn-g btn-lg" href="#">
            Go to Pre-Sale
          </a>
        </div>
      </div>
    </section>
  );
}