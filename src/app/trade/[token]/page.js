import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import buySellImg from "@/assets/flow/buy-sell-4.png";

import {
  fetchTokenOverview,
  fetchTrendingTokens,
} from "@/lib/birdeye";

export default async function TradePage({ params }) {
  const { token } = await params;

  // Fetch trending tokens for sidebar
  const trendingData = await fetchTrendingTokens();
  const tokens = trendingData.data.tokens;

  // Fetch selected token directly by its address
  const tokenData = await fetchTokenOverview(token);

  return (
    <>
     <Navbar />
     <main className="min-h-screen p-6">
      <div className="grid lg:grid-cols-[250px_1fr_350px] gap-6">

        {/* LEFT SIDEBAR */}
        <div className="border rounded-2xl p-5">
          <h2 className="text-2xl font-bold mb-6">
            Trending Tokens
          </h2>

          <div className="flex flex-col gap-4">
            {tokens.map((item) => (
              <Link
                key={item.address}
                href={`/trade/${item.address}`}
                className={`hover:text-green-500 transition ${
                  item.address === token
                    ? "text-green-500 font-bold"
                    : ""
                }`}
              >
                {item.symbol}
              </Link>
            ))}
          </div>
        </div>

        {/* CENTER CONTENT */}
        <div className="border rounded-2xl p-5">

          <div className="mb-6">
            <h1 className="text-5xl font-bold">
              {tokenData.data.name}
            </h1>

            <p className="text-xl text-gray-500 mt-2">
              Price: $
              {tokenData.data.price
                ? tokenData.data.price.toFixed(8)
                : "N/A"}
            </p>

            <p
              className={`font-semibold mt-2 ${
                (tokenData.data.priceChange24hPercent ?? 0) >= 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {tokenData.data.priceChange24hPercent != null
                ? `${tokenData.data.priceChange24hPercent.toFixed(2)}%`
                : "N/A"}
            </p>

            <p className="text-gray-500 mt-2">
              Market Cap: $
              {new Intl.NumberFormat("en-US").format(
                Math.round(tokenData.data.marketCap ?? 0)
              )}
            </p>

            <p className="text-gray-500">
              Holders:{" "}
              {new Intl.NumberFormat("en-US").format(
                tokenData.data.holder ?? 0
              )}
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

          {/* HOLDERS + VOLUME */}
          <div className="grid md:grid-cols-2 gap-4 mt-4">

            <div className="border rounded-2xl p-4">
              <h3 className="text-2xl font-bold mb-4">
                Top Holders
              </h3>

              <div className="space-y-2">
                <p>Total Holders</p>

                <p className="font-bold">
                  {new Intl.NumberFormat("en-US").format(
                    tokenData.data.holder ?? 0
                  )}
                </p>
              </div>
            </div>

            <div className="border rounded-2xl p-4">
              <h3 className="text-2xl font-bold mb-4">
                24H Volume
              </h3>

              <div className="space-y-2">
                <p>
                  $
                  {new Intl.NumberFormat("en-US").format(
                    Math.round(tokenData.data.v24hUSD ?? 0)
                  )}
                </p>

                <p
                  className={
                    (tokenData.data.v24hChangePercent ?? 0) >= 0
                      ? "text-green-500"
                      : "text-red-500"
                  }
                >
                  {tokenData.data.v24hChangePercent != null
                    ? `${tokenData.data.v24hChangePercent.toFixed(2)}%`
                    : "N/A"}
                </p>
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
    </>
    
  );
}