import { problem } from "@/content";
import { Highlight, Pill } from "./decor";
import { Reveal } from "./reveal";

export function Problem() {
  return (
    <section id="problem" className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:py-24">
      <Reveal className="max-w-2xl">
        <Pill>{problem.pill}</Pill>
        <h2 className="mt-5 font-display text-4xl font-black leading-tight text-green sm:text-5xl">
          <Highlight text={problem.heading} />
        </h2>
      </Reveal>

      <ol className="mt-12 grid gap-5 md:grid-cols-3">
        {problem.cards.map((card, i) => (
          <Reveal as="li" key={card.title} delay={i * 100}>
            <div className="h-full rounded-3xl border-2 border-green/12 bg-white p-7 transition-transform hover:-translate-y-1">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-yellow font-display text-xl font-black text-green">
                {i + 1}
              </span>
              <h3 className="mt-5 font-display text-xl font-bold text-green">{card.title}</h3>
              <p className="mt-2 leading-relaxed text-charcoal/75">{card.body}</p>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
