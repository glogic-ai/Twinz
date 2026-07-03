export default function InstagramWindow() {
  return (
    <article className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-5 shadow-2xl shadow-black/20 backdrop-blur-sm">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
            Instagram
          </p>
          <h3 className="mt-2 text-xl font-semibold text-white">Visual portfolio</h3>
        </div>
        <a
          href="https://www.instagram.com/twins_customs_jax/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold text-white/75 transition hover:border-white/20 hover:text-white"
        >
          Open Profile
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-orange-500/15 via-pink-500/10 to-cyan-500/10 p-4"
          >
            <div className="aspect-square rounded-[1.25rem] border border-white/10 bg-black/20" />
            <p className="mt-3 text-sm font-semibold text-white">Featured transformation</p>
            <p className="mt-1 text-sm leading-6 text-white/65">
              Replace this card with an Instagram embed, recent post image, or custom gallery tile.
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}
