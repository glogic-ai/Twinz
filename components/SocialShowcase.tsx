import FacebookWindow from "@/components/FacebookWindow";
import InstagramWindow from "@/components/InstagramWindow";

export default function SocialShowcase() {
  return (
    <section id="social" className="border-b border-white/10 bg-slate-950 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-400">
              Social windows
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Let your Facebook and Instagram updates work like live proof.
            </h2>
            <p className="mt-4 text-lg leading-8 text-white/70">
              The homepage can feature two branded content windows so visitors see real work,
              recent posts, and active customer engagement without leaving your site.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/65">
            Start with embeds now, upgrade to API-driven feeds later.
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          <FacebookWindow />
          <InstagramWindow />
        </div>
      </div>
    </section>
  );
}
