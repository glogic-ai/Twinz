import fs from "fs";
import path from "path";
import Image from "next/image";

type ServiceCard = {
  title: string;
  description: string;
  icon: string;
  folder: string;
  label: string;
};

const services: ServiceCard[] = [
  {
    title: "VINYL WRAPS",
    description: "Color change & custom wraps",
    icon: "/service-icons/vinyl-wraps.png",
    folder: "Vinyl Wrap",
    label: "FULL VINYL WRAP",
  },
  {
    title: "CERAMIC TINT",
    description: "Heat rejection & UV protection",
    icon: "/service-icons/ceramic-tint.png",
    folder: "Ceramic Tint",
    label: "WINDOW TINT",
  },
  {
    title: "PPF WRAP",
    description: "Protect your paint from damage",
    icon: "/service-icons/ppf-wrap.png",
    folder: "PPF Wrap",
    label: "PPF WRAP",
  },
  {
    title: "CERAMIC COATING",
    description: "Long-lasting shine & easy maintenance",
    icon: "/service-icons/ceramic-coating.png",
    folder: "Ceramic Coating",
    label: "CERAMIC COATING",
  },
  {
    title: "CUSTOM GRAPHICS",
    description: "Custom designs for any vehicle",
    icon: "/service-icons/custom-graphics.png",
    folder: "Custom Graphics",
    label: "CUSTOM GRAPHICS",
  },
];

function getFirstImageFromFolder(folderName: string) {
  const publicFolder = path.join(process.cwd(), "public", "recent-work", folderName);

  try {
    const files = fs
      .readdirSync(publicFolder)
      .filter((file) => /\.(png|jpe?g|webp|avif)$/i.test(file))
      .sort();

    if (files.length > 0) {
      return `/recent-work/${folderName}/${files[0]}`;
    }
  } catch {
    return null;
  }

  return null;
}

export default function ServicesAndWorkSection() {
  return (
    <section className="border-b border-[#1b1b1b] bg-[#070707] py-10 text-white">
      <div className="mx-auto grid max-w-[1600px] gap-8 px-6 xl:grid-cols-[1.05fr_1.2fr]">
        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#d3a55b]">
              Our Services
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => (
              <article
                key={service.title}
                className="rounded-xl border border-[#2a2a2a] bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.01))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]"
              >
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-lg border border-[#3a2a14] bg-black/30 p-3">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={52}
                    height={52}
                    className="h-11 w-11 object-contain"
                  />
                </div>
                <h3 className="text-sm font-extrabold uppercase tracking-[0.08em] text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-white/60">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#d3a55b]">
              Recent Work
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
            {services.map((service) => {
              const imagePath = getFirstImageFromFolder(service.folder);

              return (
                <article
                  key={service.folder}
                  className="overflow-hidden rounded-xl border border-[#4d3a1f] bg-[#111111] shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                >
                  <div className="relative aspect-[4/3] w-full bg-black">
                    {imagePath ? (
                      <Image
                        src={imagePath}
                        alt={service.label}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(180deg,#181818,#0f0f0f)] px-4 text-center text-sm font-semibold uppercase tracking-[0.08em] text-white/35">
                        Add one image to public/recent-work/{service.folder}
                      </div>
                    )}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/90 via-black/35 to-transparent" />
                    <p className="absolute bottom-3 left-3 right-3 text-center text-xs font-extrabold uppercase tracking-[0.12em] text-[#e5c389]">
                      {service.label}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
