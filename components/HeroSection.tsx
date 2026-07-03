export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-[#1b1b1b] bg-black"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 28%, rgba(0,0,0,0.38) 55%, rgba(0,0,0,0.72) 82%, rgba(0,0,0,0.92) 100%),
          url('/backgroundride.png')
        `,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,180,216,0.08),transparent_28%),radial-gradient(circle_at_right,rgba(212,175,55,0.08),transparent_24%)]" />

      <div className="relative mx-auto grid min-h-[560px] max-w-[1600px] gap-0 lg:grid-cols-[1.05fr_0.95fr_0.55fr]">
        {/* Left content */}
        <div className="flex min-h-[560px] flex-col justify-center px-8 py-14 lg:px-14">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-4">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-[#d3a55b]">
                Elevate Your Ride
              </p>
              <span className="h-px w-16 bg-[#d3a55b]" />
            </div>

            <h1 className="mt-5 text-5xl font-black uppercase leading-[0.95] tracking-tight text-white xl:text-7xl">
              Premium Window Tint
              <br />
              <span className="text-[#d3a55b]">&amp;</span> Vinyl Wraps
            </h1>

            <p className="mt-6 text-2xl text-white/90">
              Style. Protection. Performance.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 text-sm font-semibold uppercase tracking-[0.14em] text-white/85">
              <span>Premium Materials</span>
              <span className="text-[#d3a55b]">|</span>
              <span>Expert Installation</span>
              <span className="text-[#d3a55b]">|</span>
              <span>Satisfaction Guaranteed</span>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-w-[220px] items-center justify-center rounded-md bg-[#00b7d6] px-8 py-4 text-base font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#0cc6e7]"
              >
                Get a Quote
              </a>

              <a
                href="tel:+19047191240"
                className="inline-flex min-w-[200px] items-center justify-center rounded-md border border-[#b78545] bg-transparent px-8 py-4 text-base font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#b78545]/10"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* Center spacer */}
        <div className="hidden lg:block" />

        {/* Right quote card */}
        <div className="flex min-h-[560px] items-center justify-center px-6 py-10 lg:px-8">
          <div className="w-full max-w-[320px] rounded-2xl border border-[#7a5a2d] bg-[#111111]/88 p-6 backdrop-blur-[2px] shadow-[0_0_30px_rgba(0,0,0,0.45)]">
            <div className="mb-5 flex items-center gap-4">
              <div>
                <h2 className="text-xl font-extrabold uppercase tracking-[0.08em] text-[#f4c76a]">
                  Get a Quick Quote
                </h2>
                <p className="mt-2 text-sm leading-6 text-white/75">
                  Tell us about your vehicle and what you need.
                </p>
              </div>
            </div>

            <form className="space-y-3">
              <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                Service
                <select
                  className="mt-1 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white focus:border-[#00b7d6] focus:outline-none"
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

              <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                Vehicle Type
                <select
                  className="mt-1 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white focus:border-[#00b7d6] focus:outline-none"
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

              <label className="block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-white/70">
                Year / Make / Model
                <input
                  type="text"
                  className="mt-1 w-full rounded-md border border-white/10 bg-[#1a1a1a] px-3 py-2 text-sm text-white placeholder:text-white/40 focus:border-[#00b7d6] focus:outline-none"
                  placeholder="e.g. 2023 Tesla Model 3"
                />
              </label>

              <button
                type="submit"
                className="mt-2 w-full rounded-md bg-[#00b7d6] px-5 py-4 text-sm font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#0cc6e7]"
              >
                Get My Quote
              </button>

              <p className="pt-1 text-center text-xs text-white/55">
                Fast response • No obligation
              </p>
            </form>
          </div>
        </div>
      </div>

      {/* Slider dots */}
      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#c9a15d]" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/45" />
      </div>
    </section>
  );
}