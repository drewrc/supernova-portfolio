export default function SiteFooter() {
  return (
    <div className="footer-reveal relative z-10 mt-12 pb-2">
      <div className="h-px w-full bg-gradient-to-r from-white/18 via-white/8 to-transparent" />
      <div className="mt-4 flex items-center justify-between gap-4 px-4 text-[11px] uppercase tracking-[0.28em] text-white/58">
        <div className="flex items-center gap-1">
          <span className="text-white [font-variant:small-caps]">SUPANOVA ✨</span>
        </div>
        <div className="text-right leading-relaxed">
          <span className="[font-variant:small-caps]">Free your mind</span>
        </div>
      </div>
    </div>
  );
}
