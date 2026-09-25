import { nav, site } from "@/content";
import { RedUnderline } from "./decor";

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-green/10 bg-cream/85 backdrop-blur-md">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-content items-center justify-between gap-4 px-4 py-3 sm:px-6"
      >
        <a href="#top" className="relative shrink-0 font-display text-2xl font-black leading-none text-green">
          {site.name}
          <span className="pointer-events-none absolute -bottom-1 left-0 block h-2 w-full">
            <RedUnderline />
          </span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {nav.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-semibold text-charcoal/75 transition-colors hover:text-green"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={nav.cta.href}
          className="shrink-0 rounded-full bg-green px-5 py-2.5 text-sm font-bold text-cream transition-transform hover:-translate-y-0.5"
        >
          {nav.cta.label}
        </a>
      </nav>
    </header>
  );
}
