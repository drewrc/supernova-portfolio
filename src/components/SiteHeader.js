"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  {
    number: "01",
    label: "Home",
    href: "/",
    external: false,
  },
  {
    number: "02",
    label: "Contact",
    href: "/contact",
    external: false,
  },
  {
    number: "03",
    label: "Social media",
    href: "/social",
    external: false,
  },
  {
    number: "04",
    label: "Music",
    href: "https://soundcloud.com/supanovasounds",
    external: true,
  },
];

function NavItem({ item, className, onClick, showNumber = false }) {
  const content = (
    <>
      <span>{item.label}</span>
      {showNumber ? (
        <span aria-hidden="true" className="text-white/35">
          {item.number}
        </span>
      ) : null}
    </>
  );

  if (item.external) {
    return (
      <a
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={item.href} className={className} onClick={onClick}>
      {content}
    </Link>
  );
}

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="site-header-wrap sticky top-0 z-40">
      <header className="site-header">
        <div className="site-header-panel flex items-center justify-between rounded-[1.75rem] px-2 py-3 md:px-3 md:py-4">
          <div className="fade-in-logo text-xl font-bold tracking-wide">
            <Link href="/">
              <Image
                src="/supanova-logo.png"
                alt="Supanova logo"
                width={176}
                height={56}
                className="h-12 w-auto md:h-14"
              />
            </Link>
          </div>

          <button
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/10 bg-white/[0.03] focus:outline-none"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <div className="flex flex-col gap-1.5">
              <span className="h-[2px] w-5 bg-white"></span>
              <span className="h-[2px] w-5 bg-white"></span>
              <span className="h-[2px] w-5 bg-white"></span>
            </div>
          </button>

          <nav className="site-nav-shell fade-in-nav hidden rounded-full px-5 py-3 md:flex items-center gap-8 text-sm uppercase tracking-[0.28em]">
            {navItems.map((item) => (
              <NavItem key={item.label} item={item} className="site-nav-link" />
            ))}
          </nav>
        </div>
      </header>

      {menuOpen && (
        <div className="mobile-menu md:hidden absolute left-0 right-0 top-full z-50">
          <nav className="mobile-menu-panel mt-1 rounded-[1rem] px-6 py-2 text-sm uppercase tracking-[0.28em]">
            {navItems.map((item, index) => (
              <NavItem
                key={item.label}
                item={item}
                className={`mobile-menu-link ${index === 0 ? "border-t-0" : ""}`}
                onClick={() => setMenuOpen(false)}
                showNumber
              />
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}
