export default function ContactAndFooterSection() {
  return (
    <section id="contact" className="border-t border-[#1b1b1b] bg-black text-white">
      <div className="mx-auto max-w-[1600px] px-6 py-12 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          {/* Left: contact details */}
          <div className="rounded-2xl border border-[#2a2a2a] bg-[linear-gradient(180deg,#101010,#050505)] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d3a55b]">
              Contact & hours
            </p>

            <h2 className="mt-3 text-2xl font-extrabold uppercase tracking-[0.06em] text-white">
              Visit, call, or message Twins Customs
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-7 text-white/70">
              Stop by the shop, give us a call, or head to the quote page for pricing
              on window tint, vinyl wraps, PPF, ceramic coating, and custom graphics.
            </p>

            <div className="mt-6 space-y-4 text-sm text-white/80">
              <div className="rounded-xl border border-[#242424] bg-black/30 p-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f4c76a]">
                  Phone
                </p>
                <a
                  href="tel:+1602twin2020"
                  className="mt-2 inline-block text-base font-semibold text-[#00b7d6] hover:text-[#0cc6e7]"
                >
                  (602) TWIN-2020
                </a>
              </div>

              <div className="rounded-xl border border-[#242424] bg-black/30 p-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f4c76a]">
                  Email
                </p>
                <a
                  href="mailto:info@twinscustoms.com"
                  className="mt-2 inline-block break-all text-base font-semibold text-[#00b7d6] hover:text-[#0cc6e7]"
                >
                  info@twinscustoms.com
                </a>
              </div>

              <div className="rounded-xl border border-[#242424] bg-black/30 p-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f4c76a]">
                  Address
                </p>
                <p className="mt-2 text-base font-semibold text-white">
                  8810 Corporate Square Ct suite 103
                </p>
                <p className="text-white/70">Jacksonville, FL 32216</p>
              </div>

              <div className="rounded-xl border border-[#242424] bg-black/30 p-4">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#f4c76a]">
                  Hours
                </p>
                <p className="mt-2 text-white/80">
                  Mon – Sat: 9:00AM – 6:00PM
                </p>
                <p className="text-white/60">Closed Sunday</p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="/quote"
                className="inline-flex items-center justify-center rounded-md bg-[#00b7d6] px-5 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#0cc6e7]"
              >
                Get a Quote
              </a>
              <a
                href="tel:+19047191240"
                className="inline-flex items-center justify-center rounded-md border border-[#b78545] px-5 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-white transition hover:bg-[#b78545]/10"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="rounded-2xl border border-[#2a2a2a] bg-[linear-gradient(180deg,#101010,#050505)] p-6">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d3a55b]">
              Location map
            </p>

            <div className="mt-4 overflow-hidden rounded-xl border border-[#2a2a2a]">
              <iframe
                title="Twins Customs location map"
                src="https://www.google.com/maps?q=8810%20Corporate%20Square%20Ct%20suite%20103%2C%20Jacksonville%2C%20FL%2032216&z=15&output=embed"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-sm text-white/70">
                <p className="font-semibold text-white">
                  8810 Corporate Square Ct suite 103
                </p>
                <p>Jacksonville, FL 32216</p>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=8810+Corporate+Square+Ct+suite+103,+Jacksonville,+FL+32216"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md border border-[#00b7d6] px-5 py-3 text-[0.78rem] font-extrabold uppercase tracking-[0.14em] text-[#00b7d6] transition hover:bg-[#00b7d6] hover:text-black"
              >
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer className="border-t border-[#1b1b1b] bg-black/95">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 px-6 py-4 text-[0.7rem] text-white/55 md:flex-row">
          <p>© 2026 Twins Customs. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-4">
            <p>Premium Window Tint • Vinyl Wraps • PPF • Ceramic Coating • Custom Graphics</p>
          </div>
        </div>
      </footer>
    </section>
  );
}