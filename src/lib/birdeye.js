const BASE_URL = "https://public-api.birdeye.so";

export async function fetchTokenOverview(address) {
  const res = await fetch(
    `${BASE_URL}/defi/token_overview?address=${address}`,
    {
      headers: {
        "x-api-key": process.env.BIRDEYE_API_KEY,
        "x-chain": "solana",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorText = await res.text();

    console.error("BirdEye Error:", res.status, errorText);

    throw new Error(`BirdEye Error ${res.status}`);
  }

  return res.json();
}

export async function fetchTrendingTokens() {
  const res = await fetch(
    `${BASE_URL}/defi/token_trending?sort_by=rank&sort_type=asc&offset=0&limit=10`,
    {
      headers: {
        "x-api-key": process.env.BIRDEYE_API_KEY,
        "x-chain": "solana",
      },
      cache: "no-store",
    }
  );

  if (!res.ok) {
    const errorText = await res.text();

    console.error("BirdEye Trending Error:", res.status, errorText);

    throw new Error(`BirdEye Trending Error ${res.status}`);
  }

  return res.json();
}