import Image from "next/image";
import tokenImg from "@/assets/app store/token.png";
import launchImg from "@/assets/app store/launch.png";
import discoverImg from "@/assets/app store/discover.png";
import portfolioImg from "@/assets/app store/portfolio.png";

export default function Features() {
    return (
        <section className="py-20 px-6">
            <h2 className="text-4xl font-bold text-center mb-4">
                Buy & Sell Trending Tokens
            </h2>

            <p className="text-center text-gray-600 mb-12">
                Discover trending memecoins and trade before everyone else.
            </p>
{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"> */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="h-[500px] border rounded-2xl p-4 flex items-center justify-center overflow-hidden">
                    <Image
                        src={tokenImg}
                        alt="Token Screen"
                        className="h-full w-auto object-contain rounded-xl"
                    />
                </div>
                <div className="h-[500px] border rounded-2xl p-4 flex items-center justify-center overflow-hidden">
  <Image
    src={launchImg}
    alt="Launch Screen"
    className="h-full w-auto object-contain rounded-xl"
  />
</div>

<div className="h-[500px] border rounded-2xl p-4 flex items-center justify-center overflow-hidden">
  <Image
    src={discoverImg}
    alt="Discover Screen"
    className="h-full w-auto object-contain rounded-xl"
  />
</div>

<div className="h-[500px] border rounded-2xl p-4 flex items-center justify-center overflow-hidden">
  <Image
    src={portfolioImg}
    alt="Portfolio Screen"
    className="h-full w-auto object-contain rounded-xl"
  />
</div>
            </div>
        </section>
    );
}