import InfiniteCarousel from "@/components/ui/InfiniteCarousel";
import { gameplayCards } from "@/data/site";

export default function GameplaySection() {
  return (
    <section className="sec sec-b" id="game">
      <div className="wrap">
        <div className="sec-head">
          <div className="s-eyebrow">Game</div>
          <h2 className="s-h2">Core Gameplay</h2>
        </div>

        <InfiniteCarousel
          items={gameplayCards}
          variant="game"
        />
      </div>
    </section>
  );
}