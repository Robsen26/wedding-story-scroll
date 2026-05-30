import type { ReactNode } from "react";

interface ArchMediaProps {
  image: string;
  alt: string;
  eager?: boolean;
  overlayTop?: ReactNode;
  overlayBottom?: ReactNode;
}

/** Full-height portrait media container with a rounded arch top and soft overlay. */
export function ArchMedia({ image, alt, eager, overlayTop, overlayBottom }: ArchMediaProps) {
  return (
    <div className="relative mx-auto h-[88svh] w-full max-w-[520px] overflow-hidden rounded-[999px_999px_2rem_2rem] border border-border/60 shadow-[0_30px_60px_-30px_rgba(80,55,35,0.45)]">
      <img
        src={image}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        width={768}
        height={1344}
        className="h-full w-full object-cover"
      />
      {/* slideshow placeholder hint */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(60,42,28,0.28)] via-transparent to-[rgba(60,42,28,0.55)]" />
      {overlayTop && (
        <div className="absolute inset-x-0 top-0 flex justify-center px-6 pt-12 text-center text-[var(--primary-foreground)]">
          {overlayTop}
        </div>
      )}
      {overlayBottom && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center px-6 pb-12 text-center text-[var(--primary-foreground)]">
          {overlayBottom}
        </div>
      )}
    </div>
  );
}