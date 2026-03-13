"use client";

import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Contact() {
  return (
    <div className="page-shell bg-black text-white font-sans relative flex flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="starfield-texture absolute inset-0" />
        <div className="ambient-shift absolute left-1/2 top-[16%] h-[22rem] w-[22rem] -translate-x-1/2 rounded-full bg-indigo-500/14 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
        <div className="ambient-shift absolute right-[10%] top-[12%] h-[18rem] w-[18rem] rounded-full bg-violet-700/12 blur-3xl sm:h-[24rem] sm:w-[24rem]" />
        <div className="ambient-shift absolute left-[10%] top-[44%] h-[16rem] w-[16rem] rounded-full bg-purple-300/6 blur-3xl sm:h-[20rem] sm:w-[20rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_24%,rgba(109,40,217,0.04)_70%,transparent)]" />
      </div>

      <SiteHeader />

      <main className="relative z-10 flex flex-1 flex-col pt-8 md:px-8 md:pt-24">
        <div className="text-[11px] uppercase tracking-[0.34em] text-white/42 sm:text-xs">
          SUPANOVA / CONTACT
        </div>

        <div className="flex flex-1 flex-col pt-16 md:pt-0">
          <div className="grid gap-6 md:gap-12 2xl:grid-cols-[minmax(0,1.05fr)_minmax(25rem,0.8fr)] 2xl:items-start">
            <div className="hero-reveal flex flex-col gap-8">
              <div>
                <h1 className="mt-4 text-[clamp(3.25rem,15vw,9.5rem)] font-extrabold leading-[0.92] tracking-tight [text-shadow:0_0_24px_rgba(99,102,241,0.14)]">
                  INQUIRIES
                </h1>
                <p className="hero-copy-reveal mt-4 max-w-lg text-sm uppercase tracking-[0.35em] text-white/55 sm:mt-6 sm:text-base">
                  DJ bookings, live sets, and production inquiries.
                </p>
              </div>
            </div>

            <div className="hero-copy-reveal mt-4 max-w-xl 2xl:mt-0 2xl:pt-10">
              <div className="mb-5 hidden 2xl:flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/42">
                <span>Booking Contact</span>
                <span>Availability</span>
              </div>

              <div className="rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-5 py-5 text-white/86 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md sm:px-6 sm:py-6">
                <div className="text-[11px] uppercase tracking-[0.26em] text-white/42 sm:tracking-[0.3em]">
                  Initializing Contact...
                </div>
                <div className="mt-4 h-px w-full bg-white/8" />
                <div className="mt-4 text-sm uppercase tracking-[0.2em] text-white/88 sm:text-base sm:tracking-[0.22em]">
                  <a
                    href="mailto:supanovasoundz@gmail.com"
                    className="break-words text-white transition hover:text-white/75"
                  >
                    supanovasoundz@gmail.com
                  </a>
                </div>
                <p className="mt-5 max-w-lg text-sm uppercase tracking-[0.22em] text-white/48 sm:tracking-[0.24em]">
                  Available for club sets, events, collaborations, and original production work.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
