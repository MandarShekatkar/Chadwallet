import Link from "next/link";
import Navbar from "@/components/Navbar";
import BuySellPanel from "@/components/BuySellPanel";
import {
  fetchTokenOverview,
  fetchTrendingTokens,
  fetchTokenTrades,
} from "@/lib/birdeye";

import TradingChart from "@/components/TradingChart";

export default async function TradePage({ params }) {
  const { token } = await params;

  const trendingData = await fetchTrendingTokens();
  const tokens = trendingData.data.tokens;

  const tokenData = await fetchTokenOverview(token);

  const tradesData = await fetchTokenTrades(token);
  const trades = tradesData?.data?.items || [];

  return (
    <>
      <Navbar />

      <main className="min-h-screen p-4 md:p-6 overflow-x-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)_350px] gap-6">

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

          {/* CENTER */}
          <div className="border rounded-2xl p-5">

            <div className="mb-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-6">
                {tokenData.data.name}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

                <div>
                  <p className="text-gray-500 text-sm">
                    Price
                  </p>

                  <p className="text-2xl font-bold">
                    ${tokenData.data.price.toFixed(8)}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Market Cap
                  </p>

                  <p className="text-2xl font-bold">
                    $
                    {new Intl.NumberFormat().format(
                      Math.round(tokenData.data.marketCap)
                    )}
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    24H Change
                  </p>

                  <p
                    className={`text-2xl font-bold ${
                      tokenData.data.priceChange24hPercent >= 0
                        ? "text-green-500"
                        : "text-red-500"
                    }`}
                  >
                    {tokenData.data.priceChange24hPercent?.toFixed(2)}%
                  </p>
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Holders
                  </p>

                  <p className="text-2xl font-bold">
                    {new Intl.NumberFormat().format(
                      tokenData.data.holder
                    )}
                  </p>
                </div>

              </div>
            </div>

            {/* CHART */}
            <div className="h-[350px] md:h-[500px] border rounded-2xl overflow-hidden">
              <TradingChart
                symbol={tokenData.data.symbol}
              />
            </div>

            {/* HOLDERS + VOLUME */}
            <div className="grid md:grid-cols-2 gap-4 mt-4">

              <div className="border rounded-2xl p-4">
                <h3 className="text-2xl font-bold mb-4">
                  Top Holders
                </h3>

                <p>Total Holders</p>

                <p className="font-bold">
                  {new Intl.NumberFormat().format(
                    tokenData.data.holder ?? 0
                  )}
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <h3 className="text-2xl font-bold mb-4">
                  24H Volume
                </h3>

                <p>
                  $
                  {new Intl.NumberFormat().format(
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

            {/* LIVE TRADES */}

            <div className="border rounded-2xl p-4 mt-4">

              <h3 className="text-2xl font-bold mb-4">
                Live Trades
              </h3>

              {trades.length === 0 ? (

                <p className="text-gray-500">
                  No recent trades found.
                </p>

              ) : (

                <div className="space-y-3">

                  {trades.map((trade,index) => (

                    <div
                      key={`${trade.txHash}-${index}`}
                      className="flex justify-between items-center border-b pb-3"
                    >

                      <div>

                        <p
                          className={`font-bold ${
                            trade.side === "buy"
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {trade.side.toUpperCase()}
                        </p>

                        <p className="text-xs text-gray-500">
                          {trade.owner.slice(0, 6)}...
                          {trade.owner.slice(-4)}
                        </p>

                      </div>

                      <div className="text-right">

                        <p className="font-semibold">
                          {trade.to.uiAmount.toLocaleString(
                            undefined,
                            {
                              maximumFractionDigits: 2,
                            }
                          )}{" "}
                          {trade.to.symbol}
                        </p>

                        <p className="text-xs text-gray-500">
                          {new Date(
                            trade.blockUnixTime * 1000
                          ).toLocaleTimeString()}
                        </p>

                      </div>

                    </div>

                  ))}

                </div>

              )}

            </div>

          </div>

          {/* RIGHT PANEL */}
          <BuySellPanel token={tokenData.data} />

        </div>
      </main>
    </>
  );
}