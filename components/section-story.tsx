import { story, stats } from "@/content";
import { Highlight, Pill, RedUnderline, Sparkle } from "./decor";
import { Reveal } from "./reveal";

export function Story() {
  return (
    <section id="story" className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Narrative */}
        <div>
          <Reveal>
            <Pill>{story.pill}</Pill>
          </Reveal>
          <Reveal delay={60}>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-black leading-[1.08] text-green sm:text-5xl">
              <Highlight text={story.heading} />
            </h2>
          </Reveal>

          <div className="mt-7 max-w-xl space-y-5 text-lg leading-relaxed text-charcoal/80">
            {story.paragraphs.map((p, i) => (
              <Reveal key={i} delay={120 + i * 80} as="p">
                {p}
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <blockquote className="mt-9 max-w-xl border-l-4 border-tomato pl-5">
              <p className="relative inline font-display text-2xl font-bold leading-snug text-green sm:text-3xl">
                <Highlight text={`[[${story.quote}]]`} />
              </p>
            </blockquote>
          </Reveal>
        </div>

        {/* Credibility stats */}
        <Reveal delay={120} className="lg:pt-16">
          <div className="grid gap-4 sm:grid-cols-2">
            {stats.items.map((s, i) => (
              <div
                key={s.value}
                className={`rounded-3xl border-2 p-6 ${
                  i % 3 === 0
                    ? "border-green bg-green text-cream"
                    : "border-green/12 bg-white text-green"
                }`}
              >
                <p className="flex items-start gap-1.5 font-display text-3xl font-black leading-none sm:text-[2.1rem]">
                  {s.value}
                  <Sparkle
                    className={`h-4 w-4 ${i % 3 === 0 ? "text-yellow" : "text-tomato"}`}
                  />
                </p>
                <p
                  className={`mt-2.5 text-sm leading-snug ${
                    i % 3 === 0 ? "text-cream/80" : "text-charcoal/65"
                  }`}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
          <p className="mt-5 flex items-center gap-2 pl-1 font-hand text-xl text-tomato">
            <span className="relative">
              Not a first attempt.
              <span className="absolute -bottom-2 left-0 block h-2 w-full">
                <RedUnderline />
              </span>
            </span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
