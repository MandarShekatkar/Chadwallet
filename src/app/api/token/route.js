export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const address = searchParams.get("address");

    if (!address) {
      return Response.json(
        {
          success: false,
          message: "Token address is required",
        },
        { status: 400 }
      );
    }

    const response = await fetch(
      `https://public-api.birdeye.so/defi/token_overview?address=${address}`,
      {
        headers: {
          "x-api-key": process.env.BIRDEYE_API_KEY,
          "x-chain": "solana",
        },
        cache: "no-store",
      }
    );

    const data = await response.json();

    return Response.json(data);
  } catch (error) {
    return Response.json(
      {
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}