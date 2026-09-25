import Image from "next/image";
import { products } from "@/content";
import { Pill } from "./decor";

export function Products() {
  return (
    <section id="products" className="mx-auto max-w-content px-4 py-16 sm:px-6 lg:py-24">
      <div className="max-w-2xl">
        <Pill>{products.pill}</Pill>
        <h2 className="mt-5 font-display text-3xl font-black leading-tight text-green sm:text-4xl">
          {products.heading}
        </h2>
        <p className="mt-3 text-lg leading-relaxed text-charcoal/75">{products.sub}</p>
      </div>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.items.map((p, i) => (
          <li
            key={p.name}
            className="group overflow-hidden rounded-3xl border-2 border-green/12 bg-white transition-transform hover:-translate-y-1"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-cream">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                loading={i < 3 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-green">{p.name}</h3>
              <p className="mt-1 font-hand text-xl text-tomato">{p.tagline}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
