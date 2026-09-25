import { problem } from "@/content";
import { Pill } from "./decor";

export function Problem() {
  return (
    <section id="problem" className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <Pill>{problem.pill}</Pill>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight text-green sm:text-4xl">
          {problem.heading}
        </h2>
      </div>

      <ol className="mt-10 grid gap-5 md:grid-cols-3">
        {problem.cards.map((card, i) => (
          <li
            key={card.title}
            className="rounded-3xl border-2 border-green/12 bg-white p-7 transition-transform hover:-translate-y-1"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-yellow font-display text-lg font-black text-green">
              {i + 1}
            </span>
            <h3 className="mt-5 font-display text-xl font-bold text-green">{card.title}</h3>
            <p className="mt-2 leading-relaxed text-charcoal/75">{card.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
