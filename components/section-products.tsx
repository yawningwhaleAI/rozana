import Image from "next/image";
import { products } from "@/content";
import { Highlight, Pill } from "./decor";
import { Reveal } from "./reveal";

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-content px-4 py-20 sm:px-6 lg:py-28">
      <Reveal className="max-w-2xl">
        <Pill>{products.pill}</Pill>
        <h2 className="mt-5 font-display text-4xl font-black leading-tight text-green sm:text-5xl">
          <Highlight text={products.heading} />
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-charcoal/75">{products.sub}</p>
      </Reveal>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.items.map((p, i) => (
          <Reveal as="li" key={p.name} delay={(i % 3) * 90}>
            <div className="group h-full overflow-hidden rounded-[1.75rem] border-2 border-green/12 bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-green/30 hover:shadow-[6px_8px_0_rgba(20,81,47,0.12)]">
              <div className="relative aspect-[4/3] overflow-hidden bg-cream">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading={i < 3 ? "eager" : "lazy"}
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-cream/90 px-3 py-1 text-xs font-bold text-green backdrop-blur">
                  0{i + 1}
                </span>
              </div>
              <div className="flex items-start justify-between gap-3 p-6">
                <div>
                  <h3 className="font-display text-xl font-bold text-green">{p.name}</h3>
                  <p className="mt-1 font-hand text-xl text-tomato">{p.tagline}</p>
                </div>
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-green/20 text-green transition-colors group-hover:border-green group-hover:bg-green group-hover:text-cream">
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M7 17L17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
