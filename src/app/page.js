import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "@/components/Features";
import TrendingTokens from "@/components/TrendingTokens";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      {/* Top ticker */}
      <TrendingTokens />

      <Hero />

      <Features />

      {/* Bottom ticker */}
      <TrendingTokens />

<Footer />
    </main>
  );
}