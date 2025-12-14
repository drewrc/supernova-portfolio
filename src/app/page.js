"use client";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-[100svh] bg-black text-white font-sans relative overflow-hidden px-safe pb-20 md:pb-0">
      

      <header className="flex items-center justify-between px-4 py-4 md:px-8 md:py-6 sticky top-0 bg-black z-40">
        <div className="text-xl font-bold tracking-wide">
           <Link href="/"><img
              src="/supanova-logo.png"
              alt="Supanova logo"
              className="h-14 w-auto"
            /></Link> 
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 focus:outline-none"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
          <a href="https://soundcloud.com/supanovasounds" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            Music
          </a>
          <Link href="/contact" className="hover:opacity-70">
           Contact
          </Link>
          <a href="https://calendly.com/supanovamusic/new-meeting" target="_blank"className="hover:opacity-70">
          Learn
          </a>
          <Link href="/social" className="hover:opacity-70">
            Social media
          </Link>
        </nav>
      </header>

      {menuOpen && (
        <div className="md:hidden absolute top-[72px] left-0 w-full bg-black border-t border-white/10 z-50">
          <nav className="flex flex-col px-6 py-6 gap-6 text-sm uppercase tracking-widest">
            <a
              href="https://soundcloud.com/supanovasounds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              Music
            </a>

            <Link
              href="/contact"
              className="hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>

            <a
              href="https://calendly.com/supanovamusic/new-meeting"
              target="_blank"
              className="hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              Learn
            </a>

            <Link
              href="/social"
              className="hover:opacity-70"
              onClick={() => setMenuOpen(false)}
            >
              Social Media
            </Link>
          </nav>
        </div>
      )}

      <main className="px-4 md:px-8">
        <h1 className="mt-24  text-[clamp(4rem,15vw,14rem)] font-extrabold leading-[0.9] tracking-tight">
          SUPANOVA <br/> MUSIC
        </h1>
      </main>

      <div className="absolute bottom-4 left-4 text-[10px] sm:text-xs uppercase tracking-widest opacity-70 max-w-[60%] sm:max-w-none">
        Free your mind ✨
      </div>

      <div className="absolute bottom-4 right-4 text-[10px] sm:text-sm uppercase tracking-widest opacity-70 text-right max-w-[60%] sm:max-w-none">
        Elevating the future of sound
      </div>
    </div>
  );
}

