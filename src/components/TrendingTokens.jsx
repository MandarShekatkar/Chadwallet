import Link from "next/link";
import { tokens } from "@/data/tokens";

export default function TrendingTokens() {
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
            key={token.id}
            href={`/trade/${token.id}`}
            className="border rounded-2xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-bold">
              {token.name}
            </h3>

            <p className="text-gray-500 mt-2">
              {token.price}
            </p>

            <p className="text-green-500 font-semibold mt-2">
              {token.change}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}