import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "@/components/Features";
import TrendingTokens from "@/components/TrendingTokens";
import Footer from "@/components/Footer";

import { fetchTrendingTokens } from "@/lib/birdeye";

export default async function Home() {
  const data = await fetchTrendingTokens();

  const tokens = data.data.tokens;

  return (
    <main>
      <Navbar />

      {/* Top Ticker */}
      <TrendingTokens tokens={tokens} />

      <Hero />

      <Features />

      {/* Bottom Ticker */}
      <TrendingTokens tokens={tokens} />

      <Footer />
    </main>
  );
}