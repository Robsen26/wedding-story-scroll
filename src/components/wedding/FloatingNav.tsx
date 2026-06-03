import { useEffect, useState } from "react";
import { navLabels, sectionIds, type Lang } from "./content";

interface FloatingNavProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  activeBg: string;
}

export function FloatingNav({ lang, onLangChange, activeBg }: FloatingNavProps) {
  const [open, setOpen] = useState(true);

  // Auto-collapse the navigation after 3 seconds of screen time.
  useEffect(() => {
    const timer = window.setTimeout(() => setOpen(false), 3000);
    return () => window.clearTimeout(timer);
  }, []);

  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-3">
      {open ? (
        <nav
          className="flex w-full max-w-[520px] animate-fade-in flex-col gap-2 rounded-[1.75rem] border border-border/70 px-3 py-3 shadow-[0_-12px_30px_-18px_rgba(80,55,35,0.5)] backdrop-blur-md transition-colors duration-500"
          style={{ backgroundColor: `color-mix(in oklab, ${activeBg} 88%, transparent)` }}
        >
          <div className="grid grid-cols-2 gap-2">
            {sectionIds.map((id) => (
              <button
                key={id}
                onClick={() => handleNav(id)}
                className="rounded-full border border-border/70 px-3 py-2 text-center font-sans text-[10px] uppercase tracking-[0.18em] text-foreground/85 transition-colors hover:bg-[var(--clay)] hover:text-[var(--primary-foreground)]"
              >
                {navLabels[lang][id]}
              </button>
            ))}
          </div>
          <div className="flex items-center justify-center gap-1 rounded-full border border-border/60 p-0.5">
            {(["de", "es"] as const).map((l) => (
              <button
                key={l}
                onClick={() => onLangChange(l)}
                aria-pressed={lang === l}
                className={`rounded-full px-3 py-1 font-sans text-[10px] uppercase tracking-[0.14em] transition-colors ${
                  lang === l
                    ? "bg-[var(--clay)] text-[var(--primary-foreground)]"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </nav>
      ) : (
        <button
          onClick={() => setOpen(true)}
          aria-label="Navigation öffnen"
          className="animate-fade-in rounded-full border border-border/60 px-6 py-1.5 font-sans text-[10px] uppercase tracking-[0.32em] text-foreground/70 shadow-[0_-8px_20px_-14px_rgba(80,55,35,0.5)] backdrop-blur-md transition-colors duration-500"
          style={{ backgroundColor: `color-mix(in oklab, ${activeBg} 80%, transparent)` }}
        >
          Navigation
        </button>
      )}
    </header>
  );
}