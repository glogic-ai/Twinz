import Image from "next/image";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      {/* 1. Hero */}
      <section id="hero" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-12 md:grid-cols-[1.1fr_0.9fr]">
          {/* Left: headline + CTA */}
          <div className="flex flex-col justify-center">
            {/* Match mockup text and CTA here */}
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
              Custom tint & vinyl
            </p>
            <h1 className="mt-3 max-w-xl text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
              Premium window tint, vinyl wraps, PPF and more in Jacksonville.
            </h1>
            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300">
              Hero copy that matches your mockup: a clear statement about Twins Customs,
              followed by a brief description of services and why visitors should request a quote.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="#gallery"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-sm hover:bg-cyan-400"
              >
                View recent work
              </a>
              <a
                href="#updates"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2.5 text-xs font-semibold text-slate-50 hover:border-cyan-400 hover:text-cyan-300"
              >
                See latest specials
              </a>
            </div>
          </div>

          {/* Right: mockup / hero image placeholder */}
          <div className="flex items-center justify-center">
            <div className="relative w-full max-w-md overflow-hidden rounded-[1.75rem] border border-white/12 bg-slate-900/80 p-3 shadow-2xl shadow-black/40">
              {/* Window chrome: colored dots etc., matching mockup */}
              <div className="mb-3 flex items-center gap-2 px-1">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="relative overflow-hidden rounded-[1.5rem] border border-slate-700/70 bg-black/50">
                <Image
                  src="/twins-home-mockup.jpg" // place this in public/
                  alt="Twins Customs homepage mockup"
                  width={640}
                  height={480}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Our Services */}
      <section id="services" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Our services
              </p>
              <h2 className="mt-3 text-xl font-semibold">
                Tint, vinyl, PPF, ceramic coat and custom graphics.
              </h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-5">
            {[
              "Tint",
              "Vinyl",
              "PPF",
              "Ceramic Coat",
              "Custom Graphics",
            ].map((service) => (
              <div
                key={service}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/80 p-4 text-xs"
              >
                <div className="mb-3 h-16 w-full rounded-xl bg-slate-800" />
                {/* later: use real thumbnails from public/ */}
                <p className="text-xs font-semibold">{service}</p>
                <p className="mt-1 text-[0.7rem] leading-5 text-slate-300">
                  Short description that matches the card style in your mockup.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Recent Work Gallery */}
      <section id="gallery" className="border-b border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Recent work gallery
              </p>
              <h2 className="mt-3 text-xl font-semibold">
                Example jobs grouped under tint, vinyl, PPF, ceramic coat and graphics.
              </h2>
            </div>
          </div>

          {/* One big image row for tint/vinyl/PPF etc., matching mockup’s gallery */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {/* Tint gallery tile */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Tint
              </p>
              <div className="mt-2 h-32 rounded-xl bg-slate-800" />
              {/* later: <Image src="/service-tint.jpg" ... /> */}
            </div>

            {/* Vinyl gallery tile */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Vinyl
              </p>
              <div className="mt-2 h-32 rounded-xl bg-slate-800" />
            </div>

            {/* PPF / Ceramic / Graphics gallery tile (you can split further later) */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                PPF / Ceramic / Graphics
              </p>
              <div className="mt-2 h-32 rounded-xl bg-slate-800" />
            </div>
          </div>
        </div>
      </section>

      {/* 4. Latest Updates (specials & events) */}
      <section id="updates" className="border-b border-slate-800 bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Latest updates
              </p>
              <h2 className="mt-3 text-xl font-semibold">Specials & events.</h2>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {/* Specials card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Summer special
              </p>
              <p className="mt-2 text-sm font-semibold">
                Placeholder text matching your specials area in the mockup.
              </p>
            </div>

            {/* Events card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-950/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Events
              </p>
              <p className="mt-2 text-sm font-semibold">
                Placeholder text for meetups, car shows, or shop events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5–7. Social + Google reviews strip */}
      <section id="social" className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-4 md:grid-cols-3">
            {/* Instagram card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Follow us on Instagram
              </p>
              <p className="mt-2 text-sm font-semibold">@twins_customs_jax</p>
              <p className="mt-1 text-xs text-slate-300">
                Card styling that matches the mockup; later replace with live embed or carousel.
              </p>
              <a
                href="https://www.instagram.com/twins_customs_jax/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-full bg-cyan-500 px-4 py-1.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400"
              >
                View Instagram
              </a>
            </div>

            {/* Facebook card */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Like us on Facebook
              </p>
              <p className="mt-2 text-sm font-semibold">Twins Customs Tint & Vinyl</p>
              <p className="mt-1 text-xs text-slate-300">
                Match the mockup’s Facebook card; later embed the page plugin.
              </p>
              <a
                href="https://www.facebook.com/p/TwinsCustoms-61556407475850/"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex rounded-full bg-[#1877F2] px-4 py-1.5 text-xs font-semibold text-white hover:bg-[#1b6de0]"
              >
                View Facebook
              </a>
            </div>

            {/* Google reviews section */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/90 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Google reviews
              </p>
              <p className="mt-2 text-sm font-semibold">Real customer feedback.</p>
              <p className="mt-1 text-xs text-slate-300">
                For step 1, this is static placeholder content. Later you can populate
                reviews from the Google Business Profile API or a manual feed.
              </p>
              <div className="mt-3 space-y-2 text-xs text-slate-300">
                <p>★★★★★ “Placeholder review text matching your mockup.”</p>
                <p>★★★★★ “Another review tile, styled like the mockup’s card.”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}