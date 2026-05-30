import { navLabels, sectionIds, type Lang } from "./content";

interface FloatingNavProps {
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}

export function FloatingNav({ lang, onLangChange }: FloatingNavProps) {
  const handleNav = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
      <nav className="flex w-full max-w-[520px] items-center gap-1.5 rounded-full border border-border/70 bg-[var(--cream)]/85 px-2 py-2 shadow-[0_12px_30px_-18px_rgba(80,55,35,0.5)] backdrop-blur-md">
        <div className="flex flex-1 items-center gap-1 overflow-x-auto no-scrollbar">
          {sectionIds.map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className="shrink-0 rounded-full border border-transparent px-2.5 py-1.5 font-sans text-[10px] uppercase tracking-[0.18em] text-foreground/80 transition-colors hover:border-border hover:bg-[var(--sand)] hover:text-foreground"
            >
              {navLabels[lang][id]}
            </button>
          ))}
        </div>
        <div className="flex shrink-0 items-center rounded-full border border-border/70 p-0.5">
          {(["de", "es"] as const).map((l) => (
            <button
              key={l}
              onClick={() => onLangChange(l)}
              aria-pressed={lang === l}
              className={`rounded-full px-2 py-1 font-sans text-[10px] uppercase tracking-[0.14em] transition-colors ${
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
    </header>
  );
}