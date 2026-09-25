import { why } from "@/content";
import { Pill } from "./decor";
import { whyIcons } from "./icons";

export function WhyDifferent() {
  return (
    <section className="border-y-2 border-green/10 bg-white/60">
      <div className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <Pill>{why.pill}</Pill>
          <h2 className="mt-5 font-display text-3xl font-black leading-tight text-green sm:text-4xl">
            {why.heading}
          </h2>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.points.map((point) => {
            const Icon = whyIcons[point.icon as keyof typeof whyIcons];
            return (
              <li key={point.title} className="rounded-3xl border-2 border-green/12 bg-cream p-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green text-yellow">
                  <Icon className="h-8 w-8" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold leading-snug text-green">
                  {point.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-charcoal/75">{point.body}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
