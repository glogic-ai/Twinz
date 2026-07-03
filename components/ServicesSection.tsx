const services = [
  {
    title: "Window Tinting",
    description:
      "Highlight tint packages, UV protection, heat reduction, and style upgrades with clear call-to-action buttons.",
  },
  {
    title: "Vinyl Wraps",
    description:
      "Showcase custom wraps, stripes, branding jobs, and before/after transformations with image-driven cards.",
  },
  {
    title: "Commercial Graphics",
    description:
      "Add a section for business vehicles, fleet branding, storefront graphics, and quote-driven lead capture.",
  },
];

export default function ServicesSection() {
  return (
    <section className="border-b border-white/10 bg-neutral-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-orange-400">
            Core sections
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Give visitors a clear path from interest to quote.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            This starter layout keeps the homepage focused on what sells: clear services,
            recent work, social proof, and fast contact options.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Service
              </div>
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
