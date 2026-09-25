import Image from "next/image";
import { hero } from "@/content";
import { Highlight, Pill, Sparkle, SparkLines } from "./decor";
import { WaitlistForm } from "./forms";

export function Hero() {
  return (
    <section id="waitlist" className="relative overflow-hidden">
      {/* soft decorative blobs */}
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-yellow/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-tomato/10 blur-3xl" />

      <div className="mx-auto grid max-w-content items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:pb-24 lg:pt-16">
        <div className="animate-fade-up">
          <Pill>{hero.eyebrow}</Pill>

          <h1 className="mt-5 font-display text-[2.6rem] font-black leading-[1.04] tracking-tight text-green sm:text-6xl">
            <Highlight text={hero.headline} />
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-charcoal/80">
            {hero.sub}
          </p>

          <div className="mt-8 max-w-xl">
            <WaitlistForm variant="hero" />
            <p className="mt-3 flex items-center gap-2 text-sm font-medium text-charcoal/70">
              <Sparkle className="h-4 w-4 text-tomato" />
              {hero.perk}
            </p>
          </div>
        </div>

        {/* Hero product shot */}
        <div className="relative animate-fade-up [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-[2rem] border-4 border-white shadow-[6px_8px_0_rgba(20,81,47,0.12)]">
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

          {/* sticky-note callout */}
          <div className="absolute -left-3 -top-4 rotate-[-4deg] sm:-left-6">
            <span className="sticky-note inline-block text-xl font-bold">
              {hero.stickyNote}
            </span>
          </div>
          <SparkLines className="absolute -right-2 top-6 h-10 w-10 rotate-12" />
        </div>
      </div>
    </section>
  );
}
