import { ticker } from "@/content";
import { Sparkle } from "./decor";

/**
 * Infinite scrolling ticker of the real pack taglines.
 * The list is duplicated so the -50% translate loops seamlessly.
 */
export function Marquee() {
  const items = [...ticker, ...ticker];
  return (
    <div className="overflow-hidden border-y-4 border-green bg-green py-4 text-cream">
      <div className="marquee" aria-hidden="true">
        {items.map((line, i) => (
          <span key={i} className="flex items-center whitespace-nowrap">
            <span className="font-hand text-2xl sm:text-3xl">{line}</span>
            <Sparkle className="mx-6 h-4 w-4 shrink-0 text-yellow sm:mx-8" />
          </span>
        ))}
      </div>
      <span className="sr-only">
        Rozana pack taglines: {ticker.join(" · ")}
      </span>
    </div>
  );
}
