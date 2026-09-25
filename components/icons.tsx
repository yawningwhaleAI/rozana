type IconProps = { className?: string };

const base = "none";

export function SupplyIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill={base} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 34V16l10-6 10 6v18" />
      <path d="M26 22l8-4 8 4v12a2 2 0 0 1-2 2H8" />
      <path d="M16 34v-8h8v8" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill={base} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 5l15 5v11c0 9-6 16-15 22-9-6-15-13-15-22V10z" />
      <path d="M17 24l5 5 9-11" />
    </svg>
  );
}

export function DisplayIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill={base} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="14" width="30" height="26" rx="3" />
      <path d="M9 22h30" />
      <path d="M17 14V9a7 7 0 0 1 14 0v5" />
    </svg>
  );
}

export function TagIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill={base} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 24l18-18h18v18L24 42z" />
      <circle cx="33" cy="15" r="3" />
    </svg>
  );
}

export function FeatherIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill={base} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M40 8C24 8 12 20 12 34l-4 6" />
      <path d="M34 14L16 32M30 12c0 6-4 10-10 10" />
    </svg>
  );
}

export function LayersIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill={base} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 6L6 15l18 9 18-9z" />
      <path d="M6 24l18 9 18-9M6 33l18 9 18-9" />
    </svg>
  );
}

export function DropIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill={base} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M24 5c8 10 13 16 13 23a13 13 0 0 1-26 0c0-7 5-13 13-23z" />
    </svg>
  );
}

export function RulerIcon({ className = "" }: IconProps) {
  return (
    <svg viewBox="0 0 48 48" className={className} fill={base} stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="6" y="16" width="36" height="16" rx="2" />
      <path d="M14 16v6M22 16v8M30 16v6M38 16v8" />
    </svg>
  );
}

export const whyIcons = {
  supply: SupplyIcon,
  shield: ShieldIcon,
  display: DisplayIcon,
  tag: TagIcon,
} as const;
