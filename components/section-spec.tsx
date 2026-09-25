import { spec } from "@/content";
import { Highlight, RedUnderline, Sparkle } from "./decor";

export function SpecPanel() {
  return (
    <section id="spec" className="bg-green text-cream">
      <div className="mx-auto grid max-w-content items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        {/* Copy */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-cream/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-yellow">
            <Sparkle className="h-3.5 w-3.5" />
            {spec.pill}
          </span>

          <h2 className="mt-5 font-display text-3xl font-black leading-[1.08] sm:text-5xl">
            <Highlight text={spec.heading} />
          </h2>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream/85">{spec.body}</p>

          <p className="mt-6 inline-flex items-center gap-2 font-hand text-2xl text-yellow">
            <span className="relative">
              {spec.panel.footnote}
              <span className="absolute -bottom-2 left-0 block h-2 w-full">
                <RedUnderline />
              </span>
            </span>
          </p>
        </div>

        {/* Mock pack label */}
        <div className="relative mx-auto w-full max-w-md">
          <Sparkle className="absolute -left-4 -top-6 h-8 w-8 text-yellow animate-sparkle-pop" />
          <div className="rotate-[-1.2deg] rounded-[1.75rem] border-4 border-cream bg-cream p-6 text-green shadow-[8px_10px_0_rgba(0,0,0,0.18)] sm:p-8">
            {/* label header */}
            <div className="flex items-end justify-between border-b-2 border-dashed border-green/25 pb-4">
              <div>
                <p className="font-display text-3xl font-black leading-none">{spec.panel.brand}</p>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-green/70">
                  {spec.panel.product}
                </p>
              </div>
              <p className="font-hand text-xl text-tomato">{spec.panel.tagline}</p>
            </div>

            {/* spec grid */}
            <dl className="mt-5 grid grid-cols-2 gap-3">
              {spec.panel.specs.map((s, i) => (
                <div
                  key={s.label}
                  className={`rounded-2xl border-2 p-4 ${
                    i === 0
                      ? "border-tomato bg-yellow/25"
                      : "border-green/15 bg-white"
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
        </div>
      </div>
    </section>
  );
}
