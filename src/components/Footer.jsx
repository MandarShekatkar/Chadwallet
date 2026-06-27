import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              ChadWallet
            </h2>

            <p className="text-gray-500 mt-3">
              Trade Solana tokens faster with real-time market data,
              secure authentication, and a modern trading experience.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Quick Links
            </h3>

            <div className="flex flex-col gap-2">

              <Link href="/">
                Home
              </Link>

              <Link href="/trade">
                Trade
              </Link>

              <a
                href="https://play.google.com/store/apps/details?id=xyz.chadwallet.www"
                target="_blank"
                rel="noopener noreferrer"
              >
                Play Store
              </a>

              <a
                href="https://apps.apple.com/us/app/chadwallet/id6757367474"
                target="_blank"
                rel="noopener noreferrer"
              >
                App Store
              </a>

            </div>
          </div>

          {/* Tech */}
          <div>
            <h3 className="font-semibold text-lg mb-3">
              Built With
            </h3>

            <div className="space-y-2 text-gray-500">

              <p>Next.js</p>

              <p>Tailwind CSS</p>

              <p>BirdEye API</p>

              <p>Privy Authentication</p>

              <p>Solana</p>

            </div>
          </div>

        </div>

        <div className="border-t mt-10 pt-6 text-center text-gray-500">
          © 2026 ChadWallet. Built for the ChadWallet Frontend Assignment.
        </div>

      </div>
    </footer>
  );
}