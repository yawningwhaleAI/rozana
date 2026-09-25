import { people } from "@/content";
import { Highlight, Pill, Sparkle } from "./decor";

function initials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .slice(0, 2)
    .join("");
}

export function People() {
  return (
    <section id="people" className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-3xl">
        <Pill>{people.pill}</Pill>
        <h2 className="mt-5 font-display text-3xl font-black leading-[1.12] text-green sm:text-4xl">
          <Highlight text={people.heading} />
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-charcoal/75">{people.sub}</p>
      </div>

      <ul className="mt-10 grid gap-6 md:grid-cols-3">
        {people.bios.map((bio) => (
          <li key={bio.name} className="rounded-3xl border-2 border-green/12 bg-white p-7">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-green font-display text-xl font-black text-cream">
                {initials(bio.name)}
              </span>
              <div>
                <h3 className="font-display text-xl font-bold leading-tight text-green">{bio.name}</h3>
                <p className="flex items-center gap-1.5 text-sm font-semibold text-tomato">
                  <Sparkle className="h-3.5 w-3.5" />
                  {bio.role}
                </p>
              </div>
            </div>
            <p className="mt-4 leading-relaxed text-charcoal/75">{bio.line}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
