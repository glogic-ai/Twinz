export default function SocialsSection() {
  return (
    <section className="border-b border-[#1b1b1b] bg-[#050505] py-12 text-white">
      <div className="mx-auto max-w-[1600px] px-6 space-y-8">
        {/* Row: Latest updates + Insta + FB + Reviews */}
        <div className="grid gap-6 xl:grid-cols-[1.3fr_1.1fr_1.1fr_1.2fr]">
          {/* Latest Updates – Instagram Stories style */}
          <article className="rounded-xl border border-[#2a2a2a] bg-[linear-gradient(180deg,#101010,#050505)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <h2 className="text-sm font-bold uppercase tracking-[0.28em] text-[#d3a55b]">
              Latest Updates
            </h2>

            <div className="mt-5 flex items-center gap-4 overflow-x-auto pb-2">
              {[
                "New wrap • Audi RS7",
                "Stealth PPF • Cybertruck",
                "Behind the scenes",
                "Customer pick‑up",
                "New color • Iced Teal",
                "Satin black • SUV",
              ].map((caption, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-[#d3a55b] bg-black/60">
                    <div className="h-[3.9rem] w-[3.9rem] rounded-full bg-[radial-gradient(circle_at_center,#333,#000)]" />
                    {/* later: replace inner div with Instagram story thumbnail from API/embed */}
                  </div>
                  <p className="w-24 text-center text-[0.65rem] leading-4 text-white/80">
                    {caption}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[0.7rem] text-white/45">
              Placeholder for latest Instagram stories. Later you can replace each circle
              with the most recent story thumbnails pulled from Instagram or a widget.
            </p>
          </article>

          {/* Follow us on Instagram */}
          <article className="rounded-xl border border-[#2a2a2a] bg-[linear-gradient(180deg,#101010,#050505)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-[0.28em] text-[#d3a55b]">
                Follow us on Instagram
              </h2>
              <span className="text-[0.7rem] text-white/55">@twins_customs_jax</span>
            </div>

            {/* 3x2 thumbnail grid */}
            <div className="mt-4 grid grid-cols-3 gap-1.5 rounded-lg border border-white/6 bg-black/60 p-1.5">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="aspect-square rounded-[0.35rem] bg-[radial-gradient(circle_at_center,#333,#000)]"
                />
                // later: drop in real insta post images or embed widget here
              ))}
            </div>

            <button
              type="button"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-[#f4c76a] px-4 py-2.5 text-[0.7rem] font-extrabold uppercase tracking-[0.16em] text-black transition hover:bg-[#ffdd92]"
            >
              Follow on Instagram
            </button>

            <p className="mt-2 text-[0.7rem] text-white/55">
              Link this button to your Instagram profile. Later, you can replace the grid
              above with a live Instagram feed or embed. [Insta embed/API placeholder]
            </p>
          </article>

          {/* Like us on Facebook */}
          <article className="rounded-xl border border-[#2a2a2a] bg-[linear-gradient(180deg,#101010,#050505)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-[0.28em] text-[#d3a55b]">
                Like us on Facebook
              </h2>
            </div>

            <div className="mt-4 overflow-hidden rounded-lg border border-white/6 bg-black/70">
              {/* Placeholder card styled like a FB page preview */}
              <div className="relative h-32 bg-[radial-gradient(circle_at_center,#262626,#050505)]" />
              <div className="flex items-center gap-3 px-4 py-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f4c76a] text-xs font-black text-black">
                  TC
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold">Twins Customs</p>
                  <p className="text-[0.7rem] text-white/55">
                    Automotive customization shop
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 bg-[#111111] px-4 py-2.5">
                <button className="rounded-sm bg-[#1877f2] px-3 py-1.5 text-[0.7rem] font-semibold text-white">
                  Like Page
                </button>
                <p className="text-[0.7rem] text-white/65">Latest FB story embed here</p>
              </div>
            </div>

            <p className="mt-2 text-[0.7rem] text-white/55">
              This card is a design placeholder. Later you can drop in Facebook&apos;s Page
              Plugin or an embedded post showing the latest story. [FB embed placeholder]
            </p>
          </article>

          {/* Google reviews */}
          <article className="rounded-xl border border-[#2a2a2a] bg-[linear-gradient(180deg,#101010,#050505)] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-bold uppercase tracking-[0.28em] text-[#d3a55b]">
                What our customers say
              </h2>
              {/* optional View all reviews button could go here later */}
            </div>

            <div className="space-y-3">
              {[
                {
                  name: "Jason M.",
                  car: "2023 BMW M4",
                  text: "Amazing work! The tint looks perfect and the heat rejection is no joke. Highly recommend Twins Customs!",
                },
                {
                  name: "Kevin T.",
                  car: "2022 Ford F‑150",
                  text: "Wrapped my truck and it completely transformed the look. Super clean work and great customer service.",
                },
              ].map((review) => (
                <div
                  key={review.name}
                  className="rounded-lg border border-white/6 bg-black/60 p-3"
                >
                  <div className="flex items-center gap-1 text-[0.7rem] text-[#f4c76a]">
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i}>{star}</span>
                    ))}
                  </div>
                  <p className="mt-2 text-[0.78rem] leading-5 text-white/80">
                    “{review.text}”
                  </p>
                  <p className="mt-3 text-[0.7rem] font-semibold text-white/85">
                    — {review.name}
                  </p>
                  <p className="text-[0.65rem] text-white/55">{review.car}</p>
                </div>
              ))}
            </div>

            <p className="mt-3 text-[0.7rem] text-white/55">
              Replace this block with a live Google Reviews widget or Places API data
              once you&apos;re ready to integrate your Google Business Profile. [Google
              reviews placeholder]
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}