export default function Hero() {
  return (
    <section className="px-6 py-16 text-center">
      <h1 className="text-5xl font-bold mb-6">
        Trade Solana Tokens
        <br />
        Before Everyone Else
      </h1>

      <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
        Discover trending memecoins, track market movers,
        and manage your portfolio with ChadWallet.
      </p>

      <div className="flex justify-center gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg">
          Start Trading
        </button>

        <button className="border px-6 py-3 rounded-lg">
          Download App
        </button>
      </div>

      {/* Product Demo Video */}
      <div className="mt-12 flex justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full max-w-md rounded-2xl shadow-xl"
        >
          <source src="/chadwallet.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}