import Image from "next/image";

const benefits = [
  {
    title: "Premium Quality",
    text: "Top brands. Premium materials.",
    icon: "/benefit-icons/premium-quality.png",
  },
  {
    title: "Expert Installers",
    text: "Certified & experienced pros.",
    icon: "/benefit-icons/expert-installers.png",
  },
  {
    title: "Satisfaction Guaranteed",
    text: "We stand behind our work.",
    icon: "/benefit-icons/satisfaction.png",
  },
  {
    title: "Locally Owned",
    text: "Proudly serving our community.",
    icon: "/benefit-icons/localowned.png",
  },
];

export default function BenefitsStrip() {
  return (
    <section className="border-y border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row">
        <div className="grid flex-1 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {benefits.map((item) => (
            <div
              key={item.title}
              className="flex items-center gap-4 border-white/10 px-6 py-5 xl:border-r"
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={64}
                height={64}
                className="h-14 w-auto shrink-0"
              />

              <div className="min-w-0">
                <h3 className="text-sm font-extrabold uppercase tracking-[0.16em] text-[#c89b3c]">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm text-white/75">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 px-6 py-5 lg:min-w-[280px] lg:border-l lg:border-t-0">
          <p className="text-sm uppercase tracking-[0.14em] text-[#c89b3c]">
            Have questions? Call us now!
          </p>
          <a
            href="tel:9047191240"
            className="mt-2 block text-2xl font-bold text-white"
          >
            (904) 719-1240
          </a>
          <a
            href="#quote"
            className="mt-4 inline-flex rounded-full border border-[#c89b3c] px-5 py-2 text-sm font-semibold text-[#c89b3c] transition hover:bg-[#c89b3c] hover:text-black"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
}