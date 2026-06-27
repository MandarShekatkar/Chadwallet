// import Navbar from "../components/Navbar";
// import Hero from "../components/Hero";
// import TokenTicker from "../components/TokenTicker";
// import Features from "@/components/Features";
// import TrendingTokens from "@/components/TrendingTokens";

// export default function Home() {
//   return (
//     <main>
//       <Navbar />
//       <Hero />
//       <TokenTicker />
//       <Features /> 
//       <TrendingTokens />
//     </main>
//   );
// }

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "@/components/Features";
import TrendingTokens from "@/components/TrendingTokens";

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
    </main>
  );
}