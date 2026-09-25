import type { ReactNode } from "react";

/**
 * Renders text where words wrapped in [[double brackets]] get the
 * yellow highlighter stroke. Keeps all copy editable in content.ts.
 */
export function Highlight({ text }: { text: string }) {
  const parts = text.split(/(\[\[.*?\]\])/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("[[") && part.endsWith("]]")) {
          return (
            <span key={i} className="hl">
              {part.slice(2, -2)}
            </span>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

/** Dark-green rounded pill section label. */
export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="pill">
      <Sparkle className="h-3.5 w-3.5 text-yellow" />
      {children}
    </span>
  );
}

/** A small hand-drawn red underline, sits under a heading word/phrase. */
export function RedUnderline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 16"
      className={`w-full ${className}`}
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      <path
        d="M2 11C40 4 90 3 130 7c25 2.5 45 4 68 1"
        stroke="#D6412B"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small four-point sparkle mark. */
export function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0c.6 5.4 2.4 8.4 9 9-6.6.6-8.4 3.6-9 9-.6-5.4-2.4-8.4-9-9 6.6-.6 8.4-3.6 9-9z" />
    </svg>
  );
}

/** Red hand-drawn "spark" lines, like the accents in the packaging. */
export function SparkLines({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path d="M6 20h10M9 11l7 5M9 29l7-5M34 20H24M31 11l-7 5M31 29l-7-5" stroke="#D6412B" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}
