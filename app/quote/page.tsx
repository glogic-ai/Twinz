export default function QuotePage() {
  const services = [
    {
      name: "Window Tint",
      short: "Heat rejection & UV protection.",
      details:
        "High-performance films in multiple shades to keep your interior cooler, protect your upholstery, and reduce glare while driving.",
    },
    {
      name: "Vinyl Wrap",
      short: "Color change & custom designs.",
      details:
        "Full or partial wraps, color flips, and custom graphics that transform the look of your vehicle while protecting factory paint.",
    },
    {
      name: "PPF Wrap",
      short: "Paint Protection Film (PPF).",
      details:
        "Clear, self-healing film that defends against chips, scratches, and road debris on high-impact areas or full body.",
    },
    {
      name: "Ceramic Coating",
      short: "Long-lasting shine & protection.",
      details:
        "Professional-grade ceramic coating that adds gloss, depth, and hydrophobic protection for easier washes and better resale value.",
    },
    {
      name: "Custom Graphics",
      short: "Logos, stripes & branding.",
      details:
        "Custom decals, striping, and branding for personal vehicles and business fleets to keep you on-brand and eye-catching.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="border-b border-[#1b1b1b] bg-[radial-gradient(circle_at_top,rgba(0,183,214,0.16),transparent_55%),#050505]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-10 px-6 py-12 lg:flex-row lg:py-16">
          {/* LEFT: Quote form (same structure as ContactAndFooterSection) */}
          <div className="w-full max-w-[440px] rounded-2xl border border-[#2a2a2a] bg-[linear-gradient(180deg,#101010,#050505)] p-6 lg:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d3a55b]">
              Get a detailed quote
            </p>
            <h1 className="mt-3 text-2xl font-extrabold uppercase tracking-[0.08em]">
              Tell us about your vehicle
            </h1>
            <p className="mt-2 text-sm text-white/75">
              Share a few details about your ride and the service you are looking for.
              We will follow up with pricing, options, and available dates.
            </p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  Name
                  <input
                    className="mt-2 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00b7d6] focus:outline-none"
                    placeholder="Your name"
                  />
                </label>
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  Phone
                  <input
                    className="mt-2 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00b7d6] focus:outline-none"
                    placeholder="(904) 000-0000"
                  />
                </label>
              </div>

              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Email
                <input
                  type="email"
                  className="mt-2 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00b7d6] focus:outline-none"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Service
                <select
                  className="mt-2 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white focus:border-[#00b7d6] focus:outline-none"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  <option>Window Tint</option>
                  <option>Vinyl Wrap</option>
                  <option>PPF Wrap</option>
                  <option>Ceramic Coating</option>
                  <option>Custom Graphics</option>
                  <option>Not Sure Yet</option>
                </select>
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  Vehicle Type
                  <select
                    className="mt-2 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white focus:border-[#00b7d6] focus:outline-none"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select Vehicle Type
                    </option>
                    <option>Sedan</option>
                    <option>Truck</option>
                    <option>SUV</option>
                    <option>Other</option>
                  </select>
                </label>

                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  Year / Make / Model
                  <input
                    type="text"
                    className="mt-2 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00b7d6] focus:outline-none"
                    placeholder="e.g. 2023 Tesla Model 3"
                  />
                </label>
              </div>

              <label className="block text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                Project details
                <textarea
                  className="mt-2 min-h-[120px] w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00b7d6] focus:outline-none"
                  placeholder="Which windows or panels, preferred shade or color, budget, timeline, and any special requests."
                />
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-[#00b7d6] px-5 py-3.5 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#0cc6e7]"
              >
                Submit Quote Request
              </button>
              <p className="pt-1 text-center text-[0.75rem] text-white/55">
                Fast response • No obligation • Custom recommendations
              </p>
            </form>
          </div>

          {/* RIGHT: Services list and descriptions */}
          <div className="flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#d3a55b]">
              Services overview
            </p>
            <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-[0.08em]">
              What Twins Customs can do for your vehicle
            </h2>
            <p className="mt-2 max-w-xl text-sm text-white/75">
              Every service is built around premium materials, expert installers, and a
              focus on long-term protection for your paint and interior.
            </p>

            <div className="mt-6 space-y-4">
              {services.map((service) => (
                <div
                  key={service.name}
                  className="flex flex-col gap-2 rounded-2xl border border-[#2a2a2a] bg-[linear-gradient(180deg,#101010,#050505)] px-4 py-4 sm:flex-row sm:items-start sm:gap-4"
                >
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f4c76a]">
                      {service.name}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {service.short}
                    </p>
                    <p className="mt-1 text-sm text-white/70">{service.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}