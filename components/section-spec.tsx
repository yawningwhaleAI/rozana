import { spec } from "@/content";
import { Highlight, RedUnderline, Sparkle } from "./decor";
import { Reveal } from "./reveal";

export function SpecPanel() {
  return (
    <section id="spec" className="relative overflow-hidden bg-green text-cream">
      {/* faint oversized GSM watermark */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-6 top-1/2 hidden -translate-y-1/2 select-none font-display text-[16rem] font-black leading-none text-cream/[0.04] lg:block"
      >
        150
      </span>

      <div className="mx-auto grid max-w-content items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        {/* Copy */}
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-yellow">
            <Sparkle className="h-3.5 w-3.5" />
            {spec.pill}
          </span>

          <h2 className="mt-5 font-display text-4xl font-black leading-[1.06] sm:text-6xl">
            <Highlight text={spec.heading} />
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream/85">{spec.body}</p>

          <p className="mt-7 inline-flex items-center gap-2 font-hand text-2xl text-yellow">
            <span className="relative">
              {spec.panel.footnote}
              <span className="absolute -bottom-2 left-0 block h-2 w-full">
                <RedUnderline />
              </span>
            </span>
          </p>
        </Reveal>

        {/* Mock pack label */}
        <Reveal delay={140} className="relative mx-auto w-full max-w-md">
          <Sparkle className="absolute -left-4 -top-6 h-8 w-8 text-yellow animate-sparkle-pop" />
          <div className="rotate-[-1.4deg] rounded-[1.75rem] border-4 border-cream bg-cream p-6 text-green shadow-[10px_12px_0_rgba(0,0,0,0.22)] sm:p-8">
            <div className="flex items-end justify-between border-b-2 border-dashed border-green/25 pb-4">
              <div>
                <p className="font-display text-3xl font-black leading-none">{spec.panel.brand}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-green/70">
                  {spec.panel.product}
                </p>
              </div>
              <p className="font-hand text-xl text-tomato">{spec.panel.tagline}</p>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3">
              {spec.panel.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl border-2 p-4 ${
                    i === 0 ? "border-tomato bg-yellow/25" : "border-green/15 bg-white"
                  }`}
                >
                  <dt className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-green/60">
                    {s.label}
                  </dt>
                  <dd className="mt-1 font-display text-3xl font-black leading-none text-green">
                    {s.value}
                  </dd>
                  <p className="mt-1.5 text-[0.72rem] leading-tight text-charcoal/60">{s.note}</p>
                </div>
              ))}
            </dl>

            <p className="mt-5 flex items-center justify-center gap-2 rounded-full bg-green py-2 text-xs font-bold uppercase tracking-[0.14em] text-cream">
              <Sparkle className="h-3.5 w-3.5 text-yellow" />
              Printed on the front
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
