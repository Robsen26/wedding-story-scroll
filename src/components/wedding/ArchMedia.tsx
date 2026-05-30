import type { ReactNode } from "react";
import { MediaSlideshow, type MediaItem } from "./MediaSlideshow";

interface ArchMediaProps {
  media: MediaItem[];
  eager?: boolean;
  overlayTop?: ReactNode;
  overlayBottom?: ReactNode;
}

/** Full-screen portrait media container with a rounded arch top and a swipeable slideshow. */
export function ArchMedia({ media, eager, overlayTop, overlayBottom }: ArchMediaProps) {
  return (
    <div className="relative mx-auto h-[calc(100svh-2rem)] max-h-[860px] w-full max-w-[520px] overflow-hidden rounded-[999px_999px_2rem_2rem] border border-border/60 shadow-[0_30px_60px_-30px_rgba(80,55,35,0.45)]">
      <MediaSlideshow items={media} eager={eager} />
      {/* readability overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-b from-[rgba(60,42,28,0.28)] via-transparent to-[rgba(60,42,28,0.55)]" />
      {overlayTop && (
        <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center px-6 pt-12 text-center text-[var(--primary-foreground)]">
          {overlayTop}
        </div>
      )}
      {overlayBottom && (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-6 pb-14 text-center text-[var(--primary-foreground)]">
          {overlayBottom}
        </div>
      )}
    </div>
  );
}