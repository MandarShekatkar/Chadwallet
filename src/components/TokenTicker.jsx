import Link from "next/link";
import { fetchTrendingTokens } from "@/lib/birdeye";

export default async function TokenTicker() {
  const trending = await fetchTrendingTokens();

  const tokens = trending.data.tokens;

  return (
    <div className="w-full overflow-hidden bg-black text-white py-3">
      <div className="flex gap-8 min-w-max whitespace-nowrap animate-marquee">
        {[...tokens, ...tokens].map((token, index) => (
          <Link
            key={`${token.address}-${index}`}
            href={`/trade/${token.symbol.toLowerCase()}`}
            className="flex items-center gap-2 text-sm font-medium hover:text-green-400 transition"
          >
            <span>{token.symbol}</span>

            <span
              className={
                token.price24hChangePercent >= 0
                  ? "text-green-400"
                  : "text-red-400"
              }
            >
              {token.price24hChangePercent?.toFixed(2)}%
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}