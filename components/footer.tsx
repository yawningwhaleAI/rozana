import { footer, site } from "@/content";
import { RedUnderline } from "./decor";

function InstagramIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-green text-cream">
      <div className="mx-auto max-w-content px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="relative inline-block font-display text-3xl font-black">
              {site.name}
              <span className="absolute -bottom-1 left-0 block h-2 w-full">
                <RedUnderline />
              </span>
            </p>
            <p className="mt-4 font-hand text-2xl text-yellow">{footer.tagline}</p>
            <p className="mt-3 max-w-xs text-sm text-cream/70">{footer.blurb}</p>
          </div>

          <div className="flex flex-col gap-4 text-sm">
            <a
              href={`mailto:${footer.email}`}
              className="font-semibold text-cream underline decoration-yellow decoration-2 underline-offset-4"
            >
              {footer.email}
            </a>
            <a
              href={footer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-semibold text-cream/90 hover:text-yellow"
            >
              <InstagramIcon className="h-5 w-5" />
              Follow on Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-cream/15 pt-6 text-xs text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{footer.legal}</p>
          <p>{footer.madeIn}</p>
        </div>
      </div>
    </footer>
  );
}
