import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import { betaCards } from "@/data/site";

export default function BetaSection() {
  return (
    <section className="sec sec-b" id="beta">
      <div className="wrap">
        <div className="sec-head">
          <div className="s-eyebrow">Beta</div>
          <h2 className="s-h2">Beta Overview</h2>
        </div>

        <InfiniteCarousel
          items={betaCards}
          variant="beta"
        />
      </div>
    </section>
  );
}