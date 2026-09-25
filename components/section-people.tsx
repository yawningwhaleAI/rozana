import { people } from "@/content";
import { Highlight, Pill, Sparkle } from "./decor";
import { Reveal } from "./reveal";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function People() {
  return (
    <section id="people" className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="max-w-3xl">
        <Pill>{people.pill}</Pill>
        <h2 className="mt-5 font-display text-4xl font-black leading-[1.1] text-green sm:text-5xl">
          <Highlight text={people.heading} />
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-charcoal/75">{people.sub}</p>
      </Reveal>

      <div className="mt-12 space-y-12">
        {people.groups.map((group, gi) => (
          <div key={group.label}>
            <Reveal className="mb-5 flex items-center gap-3">
              <span className="text-sm font-bold uppercase tracking-[0.14em] text-green">
                {group.label}
              </span>
              <span className="h-px flex-1 bg-green/15" />
            </Reveal>

            <ul className="grid gap-6 md:grid-cols-3">
              {group.members.map((bio, i) => (
                <Reveal as="li" key={bio.name} delay={i * 90}>
                  <div className="h-full rounded-3xl border-2 border-green/12 bg-white p-7 transition-transform hover:-translate-y-1">
                    <div className="flex items-center gap-4">
                      <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green font-display text-2xl font-black text-cream">
                        {initials(bio.name)}
                      </span>
                      <div>
                        <h3 className="font-display text-xl font-bold leading-tight text-green">
                          {bio.name}
                        </h3>
                        <p className="flex items-center gap-1.5 text-sm font-semibold uppercase tracking-wide text-tomato">
                          <Sparkle className="h-3.5 w-3.5" />
                          {bio.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-5 leading-relaxed text-charcoal/75">{bio.line}</p>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
