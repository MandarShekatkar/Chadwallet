import { tokens } from "../data/tokens";
import Link from "next/link";


export default function TokenTicker() {
    return (
        <div className="w-full overflow-hidden bg-black text-white py-3">
            <div className="flex gap-8 min-w-max whitespace-nowrap animate-marquee">
                {[...tokens, ...tokens].map((token, index) => (
  <Link
    key={index}
    href={`/trade/${token.id}`}
    className="flex items-center gap-2 text-sm font-medium hover:text-green-400 transition"
  >
    <span>{token.name}</span>
    <span className="text-green-400">
      {token.change}
    </span>
  </Link>
))}
            </div>
        </div>
    );
}