import { contact } from "@/content";
import { Pill, Sparkle } from "./decor";
import { ContactForm } from "./forms";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="lg:pt-6">
          <Pill>{contact.pill}</Pill>
          <h2 className="mt-5 font-display text-4xl font-black leading-tight text-green sm:text-5xl">
            {contact.heading}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-charcoal/80">{contact.sub}</p>

          <ul className="mt-7 space-y-3">
            {[
              "Hotels, cafés & cloud kitchens",
              "Offices & caterers",
              "Retail stocking & partnerships",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-charcoal/80">
                <Sparkle className="h-4 w-4 shrink-0 text-tomato" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}
