import { Reveal } from "./Reveal";

export interface GalleryImage {
  src: string;
  alt: string;
}

interface PhotoGridProps {
  images: GalleryImage[];
  columns?: number;
}

/** Instagram-style scrollable photo grid */
export function PhotoGrid({ images, columns = 3 }: PhotoGridProps) {
  return (
    <Reveal>
      <div className="mx-auto w-full max-w-[520px]">
        <div
          className="grid gap-1.5"
          style={{
            gridTemplateColumns: `repeat(${columns}, 1fr)`,
          }}
        >
          {images.map((img, i) => (
            <div
              key={i}
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
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
