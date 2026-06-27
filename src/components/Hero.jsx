"use client";

import { usePrivy } from "@privy-io/react-auth";
import { useRouter } from "next/navigation";

export default function Hero() {
  const { authenticated, login } = usePrivy();
  const router = useRouter();

  const handleStartTrading = () => {
    if (!authenticated) {
      login();
      return;
    }

    router.push("/trade");
  };

  const handleDownload = () => {
    window.open(
      "https://play.google.com/store/apps/details?id=xyz.chadwallet.www",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <section className="px-6 py-16 text-center">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
        Trade Solana Tokens
        <br />
        Before Everyone Else
      </h1>

      <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Discover trending memecoins, track market movers,
        and manage your portfolio with ChadWallet.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={handleStartTrading}
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Start Trading
        </button>

        <button
          onClick={handleDownload}
          className="border px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Download App
        </button>
      </div>

      {/* Product Demo Video */}
      <div className="mt-12 flex justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-sm md:max-w-md rounded-2xl shadow-xl"
        >
          <source src="/chadwallet.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}