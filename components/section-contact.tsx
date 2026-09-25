import { contact } from "@/content";
import { Pill, Sparkle } from "./decor";
import { ContactForm } from "./forms";
import { Reveal } from "./reveal";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:py-28">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <Reveal className="lg:pt-6">
          <Pill>{contact.pill}</Pill>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-green sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/80">{contact.sub}</p>

          <ul className="mt-7 space-y-3">
            {contact.audience.map((item) => (
              <li key={item} className="flex items-center gap-3 text-charcoal/80">
                <Sparkle className="h-4 w-4 shrink-0 text-tomato" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-8 rounded-2xl border-2 border-dashed border-green/25 bg-white/60 p-4 text-sm text-charcoal/70">
            Institutional buyers are roughly a third of our first-year plan — so this
            form goes straight to us, not into a void.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
