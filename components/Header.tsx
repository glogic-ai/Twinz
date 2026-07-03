"use client";

import { useState } from "react";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/quote" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src="/twinz.jpg"
            alt="Twinz Customs"
            width={140}
            height={48}
            className="h-10 w-auto sm:h-12"
            priority
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-[#c89b3c]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="tel:9047191240"
            className="text-sm font-semibold text-white transition hover:text-[#c89b3c]"
          >
            (904) 719-1240
          </a>
          <a
            href="#quote"
            className="inline-flex rounded-full border border-[#c89b3c] px-5 py-2 text-sm font-semibold text-[#c89b3c] transition hover:bg-[#c89b3c] hover:text-black"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md border border-white/15 p-2 text-white transition hover:border-[#c89b3c] hover:text-[#c89b3c] lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-white/10 bg-black lg:hidden">
          <nav className="mx-auto flex w-full max-w-7xl flex-col px-4 py-4 sm:px-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="border-b border-white/10 py-3 text-sm font-medium text-white/85 transition hover:text-[#c89b3c]"
              >
                {item.label}
              </a>
            ))}

            <a
              href="tel:9047191240"
              className="mt-4 text-sm font-semibold text-white"
            >
              (904) 719-1240
            </a>

            <a
              href="#quote"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full border border-[#c89b3c] px-5 py-3 text-sm font-semibold text-[#c89b3c] transition hover:bg-[#c89b3c] hover:text-black"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}