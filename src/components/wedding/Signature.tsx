import { useEffect, useRef, useState } from "react";

interface SignatureProps {
  text: string;
  className?: string;
}

/**
 * Renders a name in the calligraphy signature font that appears to be written
 * in real time: each character fades in organically (blur + rise) from left to
 * right the first time the signature scrolls into view.
 */
export function Signature({ text, className }: SignatureProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const chars = Array.from(text);
  // Stagger only across visible (non-space) glyphs so the writing pace is even.
  let glyphIndex = 0;
  const perChar = 90; // ms between strokes

  return (
    <p ref={ref} className={className} aria-label={text}>
      {chars.map((ch, i) => {
        const isSpace = ch === " ";
        const delay = glyphIndex * perChar;
        if (!isSpace) glyphIndex += 1;
        return (
          <span
            key={i}
            aria-hidden="true"
            style={{
              display: "inline-block",
              whiteSpace: "pre",
              opacity: shown ? 1 : 0,
              filter: shown ? "blur(0)" : "blur(7px)",
              transform: shown ? "translateY(0)" : "translateY(8px)",
              transition:
                "opacity 0.55s ease, filter 0.55s ease, transform 0.7s cubic-bezier(0.22,1,0.36,1)",
              transitionDelay: `${delay}ms`,
            }}
          >
            {ch}
          </span>
        );
      })}
    </p>
  );
}