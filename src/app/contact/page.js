import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      

      <header className="flex items-center justify-between px-8 py-6">
        <div className="text-xl font-bold tracking-wide">
        <Link href="/"><img
                src="/supanova-logo.png"
                alt="Supanova logo"
                className="h-14 w-auto"
                /></Link> 
        </div>

        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-widest">
          <a href="https://soundcloud.com/supanovasounds" target="_blank" rel="noopener noreferrer" className="hover:opacity-70">
            Music
          </a>
          <Link href="/social" className="hover:opacity-70">
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

      <main className="px-8">
        <h1 className="mt-24 text-[clamp(4rem,15vw,14rem)] font-extrabold leading-[0.9] tracking-tight">
          CONTACT
        </h1>

        <ul className="mt-16 ml-16 text-white list-none text-left text-lg space-y-4">
          <li>Inquiries and Booking: supanovasoundz@gmail.com</li>
        </ul>
      </main>

      <div className="absolute bottom-8 left-8 text-xs uppercase tracking-widest opacity-70">
        Free your mind ✨
      </div>

      <div className="absolute bottom-8 right-8 text-sm uppercase tracking-widest opacity-70">
        Elevating the next gen of sound
      </div>
    </div>
  );
}
