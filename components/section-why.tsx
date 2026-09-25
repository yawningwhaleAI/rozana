import { why } from "@/content";
import { Highlight, Pill } from "./decor";
import { whyIcons } from "./icons";
import { Reveal } from "./reveal";

export function WhyDifferent() {
  return (
    <section className="border-y-2 border-green/10 bg-white/50">
      <div className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:py-28">
        <Reveal className="max-w-2xl">
          <Pill>{why.pill}</Pill>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-green sm:text-5xl">
            <Highlight text={why.heading} />
          </h2>
        </Reveal>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.points.map((point, i) => {
            const Icon = whyIcons[point.icon as keyof typeof whyIcons];
            return (
              <Reveal as="li" key={point.title} delay={(i % 4) * 90}>
                <div className="group h-full rounded-3xl border-2 border-green/12 bg-cream p-6 transition-colors hover:border-green/30">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green text-yellow transition-transform group-hover:-rotate-6">
                    <Icon className="h-8 w-8" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold leading-snug text-green">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{point.body}</p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
