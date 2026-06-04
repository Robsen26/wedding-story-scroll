import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Reveal } from "./Reveal";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface PhotoGridProps {
  images: GalleryImage[];
  columns?: number;
}

/** Instagram-style scrollable photo grid with a fullscreen, vertically scrollable lightbox. */
export function PhotoGrid({ images, columns = 3 }: PhotoGridProps) {
  const [openAt, setOpenAt] = useState<number | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Lock body scroll while the lightbox is open.
  useEffect(() => {
    if (openAt === null) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [openAt]);

  // Jump to the tapped photo when opening.
  useLayoutEffect(() => {
    if (openAt === null || !scrollerRef.current) return;
    const el = scrollerRef.current.querySelector<HTMLElement>(`[data-idx="${openAt}"]`);
    el?.scrollIntoView({ block: "start" });
  }, [openAt]);

  // Keep every fully-visible photo sharp; only blur images clipped by the
  // top/bottom edges of the screen, proportional to how much is cut off.
  useEffect(() => {
    if (openAt === null) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const update = () => {
      const vh = window.innerHeight;
      const imgs = scroller.querySelectorAll<HTMLImageElement>("img[data-idx]");
      imgs.forEach((img) => {
        const rect = img.getBoundingClientRect();
        // How far the image extends beyond the viewport edges, as a fraction
        // of its own height. 0 = fully visible (stays perfectly sharp).
        const clipped = Math.max(0, -rect.top) + Math.max(0, rect.bottom - vh);
        const norm = Math.min(clipped / Math.max(rect.height, 1), 1);
        img.style.filter = norm > 0 ? `blur(${(norm * 10).toFixed(2)}px)` : "none";
        img.style.opacity = `${(1 - norm * 0.5).toFixed(2)}`;
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    scroller.addEventListener("scroll", onScroll, { passive: true });
    raf = requestAnimationFrame(update);
    return () => {
      scroller.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [openAt]);

  return (
    <>
      <Reveal>
        <div className="mx-auto w-full max-w-[520px]">
          <div
            className="grid gap-1.5"
            style={{
              gridTemplateColumns: `repeat(${columns}, 1fr)`,
            }}
          >
            {images.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setOpenAt(i)}
                className="relative aspect-square overflow-hidden bg-[var(--taupe)]/30"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {openAt !== null && (
        <div className="fixed inset-0 z-[80] bg-[var(--cream)]">
          <button
            type="button"
            onClick={() => setOpenAt(null)}
            className="fixed left-4 top-4 z-[90] flex items-center gap-1 rounded-full border border-border/70 bg-[var(--cream)]/85 px-3 py-2 font-sans text-[11px] uppercase tracking-[0.18em] text-foreground shadow-[0_8px_20px_-12px_rgba(80,55,35,0.6)] backdrop-blur-md"
          >
            <ChevronLeft className="h-4 w-4" />
            Galerie
          </button>
          <div
            ref={scrollerRef}
            className="flex h-full w-full flex-col gap-1 overflow-y-auto overscroll-contain px-1 pb-16 pt-16"
          >
            {images.map((img, i) => (
              <img
                key={i}
                data-idx={i}
                src={img.src}
                alt={img.alt}
                className="w-full object-contain transition-[filter,opacity] duration-150"
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
