"use client";

import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-[#1f1f1f] bg-black/95 text-white backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Left: logo + nav */}
        <div className="flex items-center gap-8">
          {/* Logo image from /public/twinz.jpg */}
          <div className="flex items-center gap-3">
            <div className="relative h-10 w-32">
              <Image
                src="/twinz.jpg"
                alt="Twins Customs logo"
                fill
                className="object-contain"
                sizes="128px"
                priority
              />
            </div>
          </div>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 text-[0.7rem] font-semibold tracking-[0.18em] sm:flex">
            {navItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative pb-1 uppercase ${
                  index === 0
                    ? "text-[#f4c76a]"
                    : "text-slate-100/80 hover:text-white"
                }`}
              >
                {item.label}
                {index === 0 && (
                  <span className="absolute left-0 top-full mt-1 h-[2px] w-full bg-[#f4c76a]" />
                )}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: hours, phone, CTA */}
        <div className="flex items-center gap-4 text-[0.7rem] font-semibold">
          <div className="hidden items-center gap-2 text-[#f4c76a] sm:flex">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#f4c76a]/40 text-[0.65rem]">
              ⏱
            </span>
            <span>Mon - Sat: 9AM - 6PM</span>
          </div>

          <div className="hidden items-center gap-2 text-[#f4c76a] sm:flex">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-[#f4c76a]/40 text-[0.65rem]">
              ☎
            </span>
            <a href="tel:+19047191240" className="hover:text-[#ffd88d]">
              (904) 719-1240
            </a>
          </div>

          <a
            href="/quote"
            className="inline-flex min-w-[220px] items-center justify-center rounded-md bg-[#00b7d6] px-8 py-4 text-base font-extrabold uppercase tracking-[0.12em] text-white transition hover:bg-[#0cc6e7]"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </header>
  );
}