import { waitlist } from "@/content";
import { Highlight, Sparkle } from "./decor";
import { WaitlistForm } from "./forms";

export function WaitlistBand() {
  return (
    <section className="mx-auto max-w-content px-4 py-8 sm:px-6">
      <div className="relative overflow-hidden rounded-[2rem] bg-yellow px-6 py-12 sm:px-12">
        <Sparkle className="absolute right-8 top-6 h-10 w-10 text-tomato/70" />
        <div className="relative mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-green/70">
            {waitlist.pill}
          </p>
          <h2 className="mt-3 font-display text-3xl font-black leading-tight text-green sm:text-4xl">
            <Highlight text={waitlist.heading} />
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal/80">{waitlist.sub}</p>
          <div className="mx-auto mt-6 max-w-lg text-left">
            <WaitlistForm variant="band" />
          </div>
          <p className="mt-3 text-sm font-medium text-green/80">{waitlist.perk}</p>
        </div>
      </div>
    </section>
  );
}
