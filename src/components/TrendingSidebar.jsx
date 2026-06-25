import Link from "next/link";

async function getTrendingTokens() {
  const res = await fetch("http://localhost:3000/api/trending", {
    cache: "no-store",
  });

  if (!res.ok) {
    return [];
  }

  const data = await res.json();

  return data.data.tokens;
}

export default async function TrendingSidebar() {
  const tokens = await getTrendingTokens();

  return (
    <div className="border rounded-2xl p-5">
      <h2 className="text-2xl font-bold mb-6">
        Trending Tokens
      </h2>

      <div className="flex flex-col gap-4">
        {tokens.map((token) => (
          <Link
            key={token.address}
            href={`/trade/${token.symbol.toLowerCase()}`}
            className="hover:text-green-500 transition"
          >
            {token.symbol}
          </Link>
        ))}
      </div>
    </div>
  );
}