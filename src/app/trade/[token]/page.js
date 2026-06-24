import Link from "next/link";
import Image from "next/image";

import { tokens } from "@/data/tokens";

import buySellImg from "@/assets/flow/buy-sell-4.png";

export default async function TradePage({ params }) {
  const { token } = await params;

  const currentToken = tokens.find(
    (item) => item.id === token
  );

  if (!currentToken) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        Token Not Found
      </div>
    );
  }

  return (
    <main className="min-h-screen p-6">
      <div className="grid lg:grid-cols-[250px_1fr_350px] gap-6">

        {/* LEFT SIDEBAR */}
        <div className="border rounded-2xl p-5">
          <h2 className="text-2xl font-bold mb-6">
            Trending Tokens
          </h2>

          <div className="flex flex-col gap-4">
            {tokens.map((token) => (
              <Link
                key={token.id}
                href={`/trade/${token.id}`}
                className="hover:text-green-500 transition"
              >
                {token.name}
              </Link>
            ))}
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="border rounded-2xl p-5">

          <div className="mb-6">
            <h1 className="text-5xl font-bold">
              {currentToken.name}
            </h1>

            <p className="text-xl text-gray-500 mt-2">
              Price: {currentToken.price}
            </p>

            <p className="text-green-500 font-semibold mt-2">
              {currentToken.change}
            </p>
          </div>

          {/* CHART IMAGE */}
          <div className="h-72 border rounded-2xl overflow-hidden">
            <Image
              src={buySellImg}
              alt="Trading Chart"
              className="w-full h-full object-cover"
            />
          </div>

          {/* HOLDERS + TRADES */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <div className="border rounded-2xl p-4">
              <h3 className="text-2xl font-bold mb-4">
                Top Holders
              </h3>

              <div className="space-y-2">
                <p>Wallet #1</p>
                <p>Wallet #2</p>
                <p>Wallet #3</p>
              </div>
            </div>

            <div className="border rounded-2xl p-4">
              <h3 className="text-2xl font-bold mb-4">
                Recent Trades
              </h3>

              <div className="space-y-2">
                <p>BUY $120</p>
                <p>SELL $80</p>
                <p>BUY $450</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="border rounded-2xl p-5">
          <h2 className="text-2xl font-bold mb-6">
            Buy / Sell
          </h2>

          <div className="flex flex-col gap-4">
            <button className="bg-green-500 text-white py-3 rounded-xl font-semibold">
              Buy
            </button>

            <button className="bg-red-500 text-white py-3 rounded-xl font-semibold">
              Sell
            </button>
          </div>

          <div className="mt-8">
            <p className="text-lg">
              Position Coming Soon
            </p>
          </div>
        </div>

      </div>
    </main>
  );
}