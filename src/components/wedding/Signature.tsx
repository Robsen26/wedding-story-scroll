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
  const perChar = 90; // ms between strokes
  const words = text.split(" ");
  let glyphIndex = 0;

  return (
    <p ref={ref} className={className} aria-label={text}>
      {words.map((word, wi) => (
        <span
          key={wi}
          aria-hidden="true"
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {Array.from(word).map((ch, ci) => {
            const delay = glyphIndex * perChar;
            glyphIndex += 1;
            return (
              <span
                key={ci}
                style={{
                  display: "inline-block",
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
          {wi < words.length - 1 ? "\u00A0" : ""}
        </span>
      ))}
    </p>
  );
}