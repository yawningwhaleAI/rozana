import { announcement } from "@/content";
import { Sparkle } from "./decor";

export function AnnouncementBar() {
  return (
    <div className="bg-tomato text-cream">
      <div className="mx-auto flex max-w-content items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold sm:text-sm">
        <Sparkle className="h-3.5 w-3.5 shrink-0 text-yellow" />
        <span>
          <span className="font-bold">{announcement.text}</span>
          <span className="hidden sm:inline"> — {announcement.detail}</span>
        </span>
        <a
          href={announcement.href}
          className="ml-1 shrink-0 rounded-full bg-cream/15 px-3 py-0.5 font-bold underline-offset-2 hover:bg-cream/25"
        >
          {announcement.cta} →
        </a>
      </div>
    </div>
  );
}
