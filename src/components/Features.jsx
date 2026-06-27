import Image from "next/image";
import tokenImg from "@/assets/app store/token.png";
import launchImg from "@/assets/app store/launch.png";
import discoverImg from "@/assets/app store/discover.png";
import portfolioImg from "@/assets/app store/portfolio.png";

const features = [
  {
    image: tokenImg,
    alt: "Token Screen",
  },
  {
    image: launchImg,
    alt: "Launch Screen",
  },
  {
    image: discoverImg,
    alt: "Discover Screen",
  },
  {
    image: portfolioImg,
    alt: "Portfolio Screen",
  },
];

export default function Features() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-4xl font-bold text-center mb-4">
        Buy & Sell Trending Tokens
      </h2>

      <p className="text-center text-gray-600 mb-12">
        Discover trending memecoins and trade before everyone else.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="h-[500px] md:h-[620px] border rounded-2xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <Image
              src={feature.image}
              alt={feature.alt}
              className="w-full h-full object-fill"
              priority={index === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}