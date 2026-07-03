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
    icon: "/benefit-icons/satisfaction-guaranteed.png",
  },
  {
    title: "Locally Owned",
    text: "Proudly serving our community.",
    icon: "/benefit-icons/locally-owned.png",
  },
];

export default function BenefitsStrip() {
  return (
    <section className="border-b border-[#1b1b1b] bg-[#050505] py-4 text-white">
      <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-6 lg:flex-row lg:items-center lg:justify-between">
        {/* Left: four benefits */}
        <div className="flex flex-1 flex-wrap items-center gap-6">
          {benefits.map((item) => (
            <div key={item.title} className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#4a3416] bg-black/50 p-2">
                {/* Placeholder icon; replace with your rendered benefit icons */}
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={28}
                  height={28}
                  className="h-7 w-7 object-contain"
                />
              </div>
              <div>
                <p className="text-[0.75rem] font-extrabold uppercase tracking-[0.18em] text-[#f4c76a]">
                  {item.title}
                </p>
                <p className="text-[0.7rem] text-white/70">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="hidden h-10 w-px bg-white/10 lg:block" />

        {/* Right: call and CTA */}
        <div className="flex flex-col items-start gap-3 lg:flex-row lg:items-center lg:gap-6">
          <div className="text-left lg:text-right">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-[#f4c76a]">
              Have questions? Call us now!
            </p>
            <p className="text-lg font-extrabold tracking-wide text-[#f4c76a]">
              (904) 719‑1240
            </p>
          </div>
            <a
            href="/quote"
            className="inline-flex items-center justify-center rounded-sm border border-[#00b7d6] px-5 py-2.5 text-[0.7rem] font-extrabold uppercase tracking-[0.18em] text-[#00b7d6] hover:bg-[#00b7d6] hover:text-black"
            >
            Get a Quote
            </a>
        </div>
      </div>
    </section>
  );
}