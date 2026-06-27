import { redirect } from "next/navigation";
import { fetchTrendingTokens } from "@/lib/birdeye";

export default async function Trade() {
  const data = await fetchTrendingTokens();

  const tokens = data?.data?.tokens || [];

  if (tokens.length === 0) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <h1 className="text-3xl font-bold">
          No Trending Tokens Found
        </h1>
      </main>
    );
  }

  redirect(`/trade/${tokens[0].address}`);
}