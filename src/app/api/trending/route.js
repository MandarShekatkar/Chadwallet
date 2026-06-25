import { fetchTrendingTokens } from "@/lib/birdeye";

export async function GET() {
  try {
    const data = await fetchTrendingTokens();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}