"use client";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="page-shell bg-black text-white font-sans relative flex flex-col">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="starfield-texture absolute inset-0" />
        <div className="ambient-shift absolute left-1/2 top-[18%] h-[24rem] w-[24rem] -translate-x-1/2 rounded-full bg-indigo-500/14 blur-3xl sm:h-[32rem] sm:w-[32rem]" />
        <div className="ambient-shift absolute right-[8%] top-[10%] h-[18rem] w-[18rem] rounded-full bg-violet-700/12 blur-3xl sm:h-[24rem] sm:w-[24rem]" />
        <div className="ambient-shift absolute left-[12%] top-[38%] h-[16rem] w-[16rem] rounded-full bg-purple-300/6 blur-3xl sm:h-[22rem] sm:w-[22rem]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_26%,rgba(109,40,217,0.04)_68%,transparent)]" />
      </div>

      <SiteHeader />

      <main className="relative z-10 flex flex-1 flex-col pt-8 pb-16 md:px-8 md:block md:pt-24 md:pb-0">
        <div className="text-[11px] uppercase tracking-[0.34em] text-white/42 sm:text-xs">
          SUPANOVA / HOME
        </div>

        <div className="flex flex-1 flex-col pt-16 md:block md:pt-0">
          <h1 className="hero-reveal mt-4 max-w-5xl text-[clamp(3.5rem,15vw,14rem)] font-extrabold leading-[0.9] tracking-tight [text-shadow:0_0_24px_rgba(99,102,241,0.14)]">
            SUPANOVA <br/> MUSIC
          </h1>
          <p className="hero-copy-reveal mt-6 max-w-lg text-sm uppercase tracking-[0.35em] text-white/55 sm:text-base">
            Elevating the future of sound.
          </p>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
