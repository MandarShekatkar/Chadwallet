// import Link from "next/link";
// import Marquee from "react-fast-marquee";
// import { fetchTrendingTokens } from "@/lib/birdeye";

// export default async function TrendingTokens() {
//   const data = await fetchTrendingTokens();

//   const tokens = data.data.tokens;

//  return (
//   <section id="trending">
//     <div className="py-3 border-y bg-black text-white">
//       <Marquee
//         speed={45}
//         gradient={false}
//       >
//         {tokens.map((token) => (
//           <Link
//             key={token.address}
//             href={`/trade/${token.address}`}
//             className="mx-8 flex items-center gap-2 hover:text-green-400 transition"
//           >
//             <span className="font-bold">
//               {token.symbol}
//             </span>

//             <span>
//               $
//               {token.price
//                 ? token.price.toFixed(6)
//                 : "0"}
//             </span>

//             <span
//               className={
//                 (token.price24hChangePercent ?? 0) >= 0
//                   ? "text-green-400"
//                   : "text-red-400"
//               }
//             >
//               {token.price24hChangePercent
//                 ? token.price24hChangePercent.toFixed(2)
//                 : "0"}
//               %
//             </span>
//           </Link>
//         ))}
//       </Marquee>
//     </div>
//   </section>
// );
// }




import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function TrendingTokens({ tokens }) {
  return (
    <section id="trending">
      <div className="py-3 border-y bg-black text-white">
        <Marquee
          speed={45}
          gradient={false}
        >
          {tokens.map((token) => (
            <Link
              key={token.address}
              href={`/trade/${token.address}`}
              className="mx-8 flex items-center gap-2 hover:text-green-400 transition"
            >
              <span className="font-bold">
                {token.symbol}
              </span>

              <span>
                $
                {token.price
                  ? token.price.toFixed(6)
                  : "0"}
              </span>

              <span
                className={
                  (token.price24hChangePercent ?? 0) >= 0
                    ? "text-green-400"
                    : "text-red-400"
                }
              >
                {token.price24hChangePercent != null
                  ? token.price24hChangePercent.toFixed(2)
                  : "0"}
                %
              </span>
            </Link>
          ))}
        </Marquee>
      </div>
    </section>
  );
}