import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";

export type MediaItem =
  | { type: "image" | "gif"; src: string; alt: string }
  | { type: "video"; src: string; alt: string; poster?: string };

interface MediaSlideshowProps {
  items: MediaItem[];
  eager?: boolean;
}

/** Swipeable slideshow supporting photos, GIFs and videos with soft dot pagination. */
export function MediaSlideshow({ items, eager }: MediaSlideshowProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative h-full w-full">
      <div ref={emblaRef} className="h-full w-full overflow-hidden">
        <div className="flex h-full touch-pan-y">
          {items.map((item, i) => (
            <div key={i} className="relative h-full min-w-0 shrink-0 grow-0 basis-full">
              {item.type === "video" ? (
                <video
                  src={item.src}
                  poster={item.poster}
                  className="h-full w-full object-cover"
                  muted
                  loop
                  playsInline
                  autoPlay
                  preload="metadata"
                  aria-label={item.alt}
                />
              ) : (
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={eager && i === 0 ? "eager" : "lazy"}
                  className="h-full w-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {items.length > 1 && (
        <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 flex justify-center gap-1.5">
          {items.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full bg-[var(--primary-foreground)] transition-all duration-300 ${
                i === selected ? "w-5 opacity-95" : "w-1.5 opacity-50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}