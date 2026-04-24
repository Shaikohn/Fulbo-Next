import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import Presale from "@/components/home/Presale";
import GameplaySection from "@/components/home/GameplaySection";
import EconomySection from "@/components/home/EconomySection";
import BetaSection from "@/components/home/BetaSection";
import OfficialLinks from "@/components/home/OfficialLinks";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Presale />
        <GameplaySection />
        <EconomySection />
        <BetaSection />
        <OfficialLinks />
        <Footer />
      </main>
    </>
  );
}