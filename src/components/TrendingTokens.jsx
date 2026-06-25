import Link from "next/link";
import { fetchTrendingTokens } from "@/lib/birdeye";

export default async function TrendingTokens() {
  const data = await fetchTrendingTokens();

  const tokens = data.data.tokens;

  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">
        Trending Tokens
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Click any token to view its trading page.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {tokens.map((token) => (
          <Link
            key={token.address}
            href={`/trade/${token.address}`}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold">
              {token.name}
            </h3>

            <p className="text-gray-500 mt-2">
  $
  {token.price
    ? token.price.toFixed(8)
    : "N/A"}
</p>

<p
  className={`font-semibold mt-2 ${
    (token.price24hChangePercent ?? 0) >= 0
      ? "text-green-500"
      : "text-red-500"
  }`}
>
  {token.price24hChangePercent != null
    ? `${token.price24hChangePercent.toFixed(2)}%`
    : "N/A"}
</p>
          </Link>
        ))}
      </div>
    </section>
  );
}