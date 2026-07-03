export default function QuoteSection() {
  return (
    <section id="quote" className="bg-neutral-950 px-6 py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
            Lead capture
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Make it easy to ask for a quote in under a minute.
          </h2>
          <p className="mt-4 text-lg leading-8 text-white/70">
            This section can connect to Supabase later so every request gets saved in a dashboard,
            emailed to the business, and handed to the chatbot for follow-up.
          </p>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm text-white/80">
              Name
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/30" placeholder="Your name" />
            </label>
            <label className="text-sm text-white/80">
              Phone
              <input className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/30" placeholder="Best contact number" />
            </label>
            <label className="text-sm text-white/80 sm:col-span-2">
              Service Needed
              <select className="mt-2 w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0">
                <option>Window Tint</option>
                <option>Vinyl Wrap</option>
                <option>Commercial Graphics</option>
                <option>Not Sure Yet</option>
              </select>
            </label>
            <label className="text-sm text-white/80 sm:col-span-2">
              Project Details
              <textarea className="mt-2 min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none ring-0 placeholder:text-white/30" placeholder="Vehicle type, goals, timeline, preferred look, etc." />
            </label>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-400"
          >
            Send Quote Request
          </button>
        </form>
      </div>
    </section>
  );
}
