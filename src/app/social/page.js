"use client";

import Image from "next/image";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const socialLinks = [
  {
    number: "01",
    text: "Soundcloud",
    url: "https://soundcloud.com/supanovasounds",
    icon: "/soundcloud-white.png",
    alt: "Soundcloud icon",
  },
  {
    number: "02",
    text: "Instagram",
    url: "https://www.instagram.com/supanova.music/",
    icon: "/IG-white.png",
    alt: "Instagram icon",
  },
  {
    number: "03",
    text: "Facebook",
    url: "https://www.facebook.com/people/Supanova/61582109542271/",
    icon: "/fb-white.png",
    alt: "Facebook icon",
  },
];

export default function Socials() {
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
          SUPANOVA / SOCIAL
        </div>

        <div className="flex flex-1 flex-col pt-16 md:pt-0">
          <div className="grid gap-8 md:gap-12 2xl:grid-cols-[minmax(0,1.05fr)_minmax(25rem,0.8fr)] 2xl:items-start">
            <div className="hero-reveal flex flex-col gap-8">
              <div>
                <h1 className="mt-5 text-[clamp(3.75rem,12vw,9.5rem)] font-extrabold leading-[0.92] tracking-tight [text-shadow:0_0_24px_rgba(99,102,241,0.14)]">
                  CONNECT
                </h1>
                <p className="hero-copy-reveal mt-6 max-w-lg text-sm uppercase tracking-[0.35em] text-white/55 sm:text-base">
                  Tap into the signal. Follow the frequency. Stay in orbit.
                </p>
              </div>

              <div className="hero-copy-reveal text-[11px] uppercase tracking-[0.24em] text-white/52 sm:text-xs sm:tracking-[0.28em]">
                <div className="flex items-center gap-3 sm:hidden">
                  <span>@SUPANOVA</span>
                  <span className="text-white/25">/</span>
                  <span className="[font-variant:small-caps]">Alchemist of sound</span>
                </div>

                <div className="hidden sm:flex sm:items-center sm:gap-3">
                  <Image
                    src="/pfp.jpg"
                    alt="@supanova"
                    width={28}
                    height={28}
                    className="h-7 w-7 rounded-full object-cover"
                  />
                  <span>@SUPANOVA</span>
                  <span className="text-white/25">/</span>
                  <span>DJ / Producer</span>
                  <span className="text-white/25">/</span>
                  <span className="[font-variant:small-caps]">Alchemist of sound</span>
                </div>
              </div>
            </div>

            <div className="hero-copy-reveal 2xl:pt-10">
              <div className="mb-5 hidden 2xl:flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-white/42">
                <span>Connect</span>
                <span>Live channels</span>
              </div>

              <div className="grid gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.text}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between rounded-[1.6rem] border border-white/10 bg-white/[0.04] px-5 py-4 text-white/86 shadow-[0_18px_45px_rgba(0,0,0,0.28)] backdrop-blur-md transition duration-200 hover:border-white/18 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs uppercase tracking-[0.32em] text-white/35">
                        {link.number}
                      </span>
                      <Image
                        src={link.icon}
                        alt={link.alt}
                        width={22}
                        height={22}
                        className="h-[22px] w-[22px] object-contain opacity-90"
                      />
                      <span className="text-sm uppercase tracking-[0.28em] sm:text-base">
                        {link.text}
                      </span>
                    </div>
                    <span className="text-white/35 transition duration-200 group-hover:translate-x-1 group-hover:text-white/65">
                      ↗
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
