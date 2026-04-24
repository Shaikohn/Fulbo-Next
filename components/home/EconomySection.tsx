import "./economySection.css";
import Accordion from "@/components/ui/Accordion";
import { economyItems } from "@/data/site";

export default function EconomySection() {
  return (
    <section className="sec sec-a" id="crypto">
      <div className="wrap">
        <div className="sec-head">
          <div className="s-eyebrow">Crypto</div>
          <h2 className="s-h2">Game Economy</h2>
        </div>

        <Accordion items={economyItems} />
      </div>
    </section>
  );
}