import Image from "next/image";
import { hero } from "@/content";
import { Highlight, Sparkle } from "./decor";
import { WaitlistForm } from "./forms";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="waitlist" className="relative overflow-hidden">
      {/* decorative wash */}
      <div aria-hidden className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-yellow/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-[-4rem] h-96 w-96 rounded-full bg-tomato/10 blur-3xl" />

      <div className="mx-auto grid max-w-content items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:gap-10 lg:pb-24 lg:pt-16">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-green/20 bg-white/60 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-green">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-tomato opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-tomato" />
              </span>
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-6 font-display text-[2.9rem] font-black leading-[1.02] tracking-tight text-green sm:text-6xl lg:text-[4.4rem]">
              <Highlight text={hero.headline} />
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/80 sm:text-xl">
              {hero.sub}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 max-w-xl">
              <WaitlistForm variant="hero" />
              <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-charcoal/70">
                <span className="flex items-center gap-2">
                  <Sparkle className="h-4 w-4 text-tomato" />
                  {hero.perk}
                </span>
              </div>
              <p className="mt-4 flex items-center gap-2 border-t border-green/10 pt-4 text-sm font-semibold text-green/80">
                <CheckSeal className="h-5 w-5 shrink-0 text-green" />
                {hero.trust}
              </p>
            </div>
          </Reveal>
        </div>

        {/* Hero product shot */}
        <Reveal delay={160} className="relative">
          <div className="relative rotate-[1.5deg]">
            <div className="overflow-hidden rounded-[2.25rem] border-[6px] border-white shadow-[10px_14px_0_rgba(20,81,47,0.14)]">
              <Image
                src="/products/hero.png"
                alt={hero.imageAlt}
                width={1400}
                height={933}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* single floating spec chip — reinforces "specs on the front" */}
          <div className="absolute -bottom-4 -left-2 rotate-[3deg] rounded-2xl border-2 border-green bg-cream px-4 py-2.5 shadow-[3px_4px_0_rgba(20,81,47,0.18)] sm:-left-5">
            <p className="font-display text-lg font-black leading-none text-green">GSM 150</p>
            <p className="text-[0.65rem] font-bold uppercase tracking-wide text-tomato">On the front</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CheckSeal({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M12 2l2.4 1.8 3-.2 1 2.8 2.4 1.7-.9 2.9.9 2.9-2.4 1.7-1 2.8-3-.2L12 22l-2.4-1.8-3 .2-1-2.8L3.2 16l.9-2.9L3.2 10l2.4-1.7 1-2.8 3 .2z" />
      <path d="M8.5 12l2.3 2.3 4.7-4.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
